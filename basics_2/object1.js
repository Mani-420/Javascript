// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const jsUser = {
    name: "Mani",
    "full name": "Mani Tahir",
    [mySym]: "mykey1",
    age: 22,
    location: "Lahore",
    email: "mani@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email = "mani@chatgpt.com"
Object.freeze(jsUser)
jsUser.email = "mithu@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());