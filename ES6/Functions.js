// -------------------------------------------------------------------
// Another Lecture of Function and Bind 

const person = {
    name: "Mani",
    walk(){
        console.log(this)
    },
};

person.walk();

const walk = person.walk.bind(person);
walk();