let i= [1,2,3,4]

let iterator = i[Symbol.iterator]() 

// it give done is false
iterator.next() // 1



function *generator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let iterator = generator();
console.log(iterator.next())