let obj = function (){
    let i = 0;

    return{
        setI(k){
            i = k;
        },
        getI(){
            return i
        }
    }
}

let x = obj();

x.setI(2);
console.log(x.getI()) // 2
// *****************************
function parent(){
    let parentVar = 10;
    return function (){
      console.log("I can access parentVar: ", parentVar);
    }
  }
  let p = parent();
  p(); //I can access parentVar: 10