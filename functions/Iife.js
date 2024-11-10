// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // Arrow function
    console.log(`DB CONNECTED TWO ${name}`);
} )('Mani')