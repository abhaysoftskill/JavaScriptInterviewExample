//CallStack - Last In first OUT

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

