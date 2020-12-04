console.log(2 + '2'); // 22
//When we use + operation, it apply ither number or string, When we do NAN the concat this

console.log(2 - '2'); // 0

console.info(2 * '2') // 4
// - (minus ) only apply to number
// ************************************
let nums = [1,2,2,3];  //expected [1,2,3] without using for loop or map
console.log(new Set(nums)) // {1,2,3} // not array
console.log([...new Set(nums)]) // [1,2,3]  expected result
// False value in js "" 0 null false undefined

// *********************
let func = function (){
    (function (){
        let l = 'let';
        var v = 'var'
    })(); //IIEF
    // console.log(v);
    // console.log(l);
}
func();


let func = function (){
    (function (){
        let l = 'let';
        var v = 'var'
    })(); //IIEF
    // console.log(v);
    // console.log(l);
}
func();  // gives ERROR to the v becx its in IIEF, so hosting as global

// ******************************************

console.log(5 < 6 < 7)
console.log(7 > 6 > 5)

console.log(5 < 6 < 7); // true
//5 < 6 true => true = 1 & 1 < 7 i.e true
console.log(7 > 6 > 5) // false
//7 > 6 true => 1 > 5 i.e false

// ****************************************************
let a = () => arguments; //Arrow function
let b = function (){
    return arguments;
}
// console.log(a('hi')) // arguments doesn't bind to arrow function
//solution
let ab = (...n) => {return n}
console.log(ab('hi','welcome'))
console.log(b('hi')) // [Arguments] { '0': 'hi' } i.e Normal function

// **********************************
let Tech = {
    name :'react'
}
Tech.version = 16.13
console.log(Tech);
// Q&A how to previent to adding new property
Object.seal(Tech);  // Seal is used to restrict to add any new property
// but allow to update the existing property
Tech.owner  = 'facebook';
console.log(Tech);

Object.freeze(Tech);  // Freeze is used to restrict to add any new property
Tech.owner  = 'facebook';
console.log(Tech);


// *******************
//ristrict the property update
let Tech2 = {
    name :'react',
    // owner:'facebook'
}
Object.defineProperty(Tech2, 'owner',{
    value:'facebook',
    writable:false
})
// Tech.version = 16.13
console.log(Tech2);

// *********************8
console.log(Math.max())  //-Infinity
// becz, find the lowest possible value


// **********************************
// How to remove duplicate from Array


let x = {
    a:1, 
    b:2 
};


const val = Object.values(x);

console.log(val); // [1,2]

const val2 = Object.keys(x)
console.log(val2) // ["a","b"]
 


var arr = [[1,2], [3,4], [4,5]]
arr.flat().filter((item, index) => temp.indexOf(item) === index)

"Abhay".split('').reverse().join('')



var arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  });
}
// Index: 4, element: undefined  //////////It prints for times

for (var i = 0; i < arr.length; i++) {
    setTimeout((function() {
      console.log('Index: ' + i + ', element: ' + arr[i]);
    })(i), 3000);
  }


//   https://medium.com/javascript-in-plain-english/5-tricky-javascript-problems-to-check-before-your-next-interview-part-1-60fdecaa59d6


function func() {
    abc = "Variable";
     function abc() {
       return("Function")
     }
     return abc();
   }
   console.log(func());

//    abc is not “function”
const numbers = [1,2,3,4,5]
numbers.slice(0,size).map((d,i,a) => console.log(a[i]))
