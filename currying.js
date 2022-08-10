// var add = function(x) {
//     return function(y) { return x + y; };
// }



function add(a,b){
    var ddd = function (b=0){
        return a+b;
    };
    
    if(typeof b =='undefined'){
        return ddd;
    }else{
        return ddd(b);
    }
}

add(2)(3) // 5
add(2,3) // 5

var add = function(x) {
    return function(y) { 
        return x + y; };
}

console.log(add(1)(2));
console.log(add(1,2))
// ***********************************************
function mul(x) {
    return function (y) {
      return function (z) {
        return x * y * z;
      };
    };
  }

console.log(mul(2)(3)(5));
console.log(mul(2)(3)(4));


// *********************
const multiply = (...args) => (
    args.length < 2
    ? multiply.bind(null, ...args)
    : args.reduce((a, b) => a * b)
  );
  console.log(multiply(2, 3, 4,5));
console.log(multiply(2, 3)(4));
console.log(multiply(2)(3)(4));
console.log(multiply(2)(3, 4));