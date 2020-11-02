function add(){
    let args = [].slice.apply(arguments);
    function resultFn(){
        args = args.concat([].slice.apply(arguments));
        console.log(args)
        if(args.length>=4){
            console.log('@@@@@')
            return args.slice(0,4).reduce(function(acc,next){ return acc+next},0); //will only sum first 3 arguments
        }
        return resultFn;
    }
    return resultFn();
}
console.log(add(2)(3)(4)(2))
console.log(add(1,2,3,4))