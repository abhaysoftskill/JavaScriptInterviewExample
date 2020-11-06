//temporal deadzone
console.log(a); // reference error
/*
---
--
temporal deadzone
--
---
*/
console.log(x); // Reference Error --- x is not define
let a = 10;
console.log(a); // 10
var b = 20;
window.b; // 20
this.b // 20
//no duplication in let 
let a = 20 // syntex Error -- a has already declared or ///// var a

const b = 100;
const c;
c = 100 //syntex error --- missing initializer in const declaration
b = 1000 // type Error -- Assignment to constant variable



hoisting();

//Function declaration *********
function hosting(){
    console.log(hoist);
    var what = "Variable & function declarations.";

    console.log("What is hoisted" + what);

    var hoist = "to lift or rise up";

    console.log("Hoist means" + hoist);

}
// undefined
// what us hoisted? Variable & function declarations.
// Hoist means to lift or rise up



//another Example 
// function expression *****************
sum();

var sum = function(){
    console.log(a + b)
}

// sum()  // NaN
var a = 10,
    b = 5

    // error : - sum is not a functiom