console.log(funcD())
// console.log(functE())  // you cant call fun Expression before declare  gives refrence error

function funcD(){
    console.log('function declaration');
}

let functE = function (){
    console.log('function expression')
}