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