const sayHitesh = function(){
    console.log("Abdul Rehman Tahir");
}
const changeText = function(){
    document.querySelector('h1').innerHTML = "Best JS Series"
}

const changeMe = setTimeout(changeText, 2000)

document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe)
    console.log("STOPPED")
})