const sayDate = function(str){
    console.log(str, Date.now());
}

let intervalId;

document.querySelector('#start').addEventListener('click', function(){
    intervalId = setInterval(sayDate, 1000, "hi")
    setInterval(intervalId)
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(intervalId)
    intervalId = null
})


