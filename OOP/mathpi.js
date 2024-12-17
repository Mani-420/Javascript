const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const sherbat = {
    name: 'sandal sherbat',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Sherbat not available.");
    }
}

console.log(Object.getOwnPropertyDescriptor(sherbat, "name"));

Object.defineProperty(sherbat, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(sherbat, "name"));

for (let [key, value] of Object.entries(sherbat)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}