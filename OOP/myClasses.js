// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const sherbat = new User("sherbat", "sherbat@gmail.com", "123")

console.log(sherbat.encryptPassword());
console.log(sherbat.changeUsername());

// -------------------------------------------------

// // behind the scene

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const milk = new User2("milk", "milk@gmail.com", "mithu")

console.log(milk.encryptPassword());
console.log(milk.changeUsername());