
setTimeout(function () {
    console.log('a');
}, 0) // it is a async call, it has to wait to finish stack first


console.log('b');

setTimeout(() => { console.log('c') }, 100)
// console.log('c');
console.log('d');

