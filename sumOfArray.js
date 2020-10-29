var arr = [1,2,[1,2],1,[2,4]]

//let arr = [[3, 2], [1], [4, 12], 10];
//if you are running in the browser with support for Array.prototype.flat( )
//one line functional solution

let sum = arr.flat().reduce((p, c) => p + c, 0);
console.log(sum);


const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));