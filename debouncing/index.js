let counter = 0;

const getData = () => {
    // calls an api and gets data

    console.log('Fetching Data ..', counter++)
}

const debounce =  function(fn, delay){
    let timer;
    return function (){
        let context = this, 
        args = arguments;

        clearTimeout(timer)

         timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

const debounceWithArrow = (fn, delay) => {
    let timer;  // hold it as closuer
    return function (...args){
        if(timer)clearTimeout(timer)

         timer = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}
// const betterFunction  = debounce(getData, 300)
const betterFunction  = debounceWithArrow(getData, 300)