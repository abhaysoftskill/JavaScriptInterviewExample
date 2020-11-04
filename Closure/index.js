//Clouser
/* A clousre is an inner function that has access to the outer function variable in addition
to its own variable and global variable.

In Simple terms is a function inside a function*/
// Example ********

(function (){
    var count = 0;
    return function (){
        return console.dir(++count);
    }
})(); // self invoking function



//Simple example
var passed = 5; //lexical scoping
var add = function (){  
    var inner = 10;
    return passed + inner;
}

console.dir(add())


//another example

var addTo = function(outer){

    // var add = function(inner){
    //     return outer + inner;
    // }

    // anyominus function ***************
    //return function(inner){
    //     return outer + inner;
    // }

    // function add(inner) {
    //     return outer + inner;
    // }
    return add;
}

var addThree = new addTo(3); // new we used as constructor function
var addFour = new addTo(4);

// console.dir(addThree);
// console.dir(addFour);

console.dir(addThree(1));
console.dir(addFour(1));

_______________________________________________________
var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
  })();

  add()