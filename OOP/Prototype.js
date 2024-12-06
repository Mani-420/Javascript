// let myName = "Mani     "
// let mychannel = "sharbat     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Mani = function(){
    console.log(`Mani is present in all objects`);
}

Array.prototype.heyMani = function(){
    console.log(`Mani says hello`);
}

// heroPower.Mani()
myHeros.Mani()
myHeros.heyMani()
// heroPower.heyMani()

// -------------------------------------------------------

// inheritance

const User = {
    name: "Mani",
    email: "mani@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// // modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Mithu Gambler     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Mani".trueLength()
"iceTea".trueLength()