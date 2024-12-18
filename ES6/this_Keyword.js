// -------------------------------------------------------------------
// Another Lecture of Object 

const person = {
    name: "Mani",
    walk(){
        console.log(this)
    },
};

person.walk();

const walk = person.walk;
walk();