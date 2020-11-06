let array = [1,2,5,2,1,8] //[1,2,5,8]

//Bootforce algorithem
let uniqArray = [];
let arrayLength = array.length;
for(let i=0; i < arrayLength; i++ ){
    if(uniqArray.indexOf(array[i]) === -1){
        uniqArray.push(array[i]);
    }
}
console.log(uniqArray);

array.filter((item,index) => array.indexOf(item) !== index)



console.log([1, 2, 2, 4, 3, 4, 5].filter((item, index, arr) => arr.indexOf(item) !== index))// [2, 4]

console.log(new Set(nums)) // {1,2,3} // not array
console.log([...new Set(nums)]) // [1,2,3]  expected result

// unique Array
console.log([1, 2, 2, 4, 3, 4, 5].filter((item, index, arr) => arr.indexOf(item) === index))
//other
// *********************








array.sort(); // [1,1,2,2,5,8]
let uniqArray2 = [];
let _temp;
for (let i = 0; i < arrayLength; i++){
    if(array[i] !== _temp){
        uniqArray2.push(array[i]);
        _temp = array[i];
    }
}
console.log(uniqArray2);

// *********************
let array = [1,2,5,2,1,8] //[1,2,5,8]
obj = {};

for(let i of array){
    obj[i] = true;
}
let unqArray = Object.keys(obj);
console.log(unqArray);








// *************** best sol

let arraySet =[...new Set(array)];

console.log([...arraySet]);
