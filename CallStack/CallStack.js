//CallStack - Last In first OUT
// https://www.javascripttutorial.net/javascript-call-stack/
function multiply(x,y){
    return x * y;
}

var res = multiply(3,5)

function funOne(){
    return "Function One";
}

function funTwo(){
    return funcOne() +  "Function Two";
}

funTwo();

// _____________________________________________
function a(){
    var b = 10;
    c();
    function c(){
        console.log(b)
    }
}

a();