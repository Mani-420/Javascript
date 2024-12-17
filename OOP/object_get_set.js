const User = {
    _email: 'm@art.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const sherbat = Object.create(User)
console.log(sherbat.email);