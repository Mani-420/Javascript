//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Mani"

    function two(){
        const website = "mani.com"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "mani123"
    if (username === "mani123") {
        const website = "google.com"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// // ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

// Arrow function

const addTwo = function(num){
    return num + 2
}

addTwo(5)