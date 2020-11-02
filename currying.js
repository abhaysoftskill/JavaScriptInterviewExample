// var add = function(x) {
//     return function(y) { return x + y; };
// }



function add(a,b){
    var ddd = function (b){
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
console.log(add(1)(2));
console.log(add(1,2))