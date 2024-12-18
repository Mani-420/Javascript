class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const sherbat = new Teacher("sherbat", "sherbat@teacher.com", "123")

sherbat.logMe()
const sandalSherbat = new User("Sandal Sherbat")

sandalSherbat.logMe()

console.log(sherbat instanceof User);