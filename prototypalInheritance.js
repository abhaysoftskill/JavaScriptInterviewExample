let car = function(model){
    this.model = model;
}

car.prototype.getModel = function () {
    return this.model;
}

let hyundai = new car('hyundai');
console.log(hyundai.getModel())

let tata = new car('tata');
console.log(tata.getModel())


// ***********************************
let arr = ["Abhay", "kanchan"];
let object = {
    name: "Advik",
    city:"Pune",
    getIntro : function (){
        console.log(this.name + "from " + this.city);
    }
}
console.log(object.__proto__)
function fun() {
    
}
console.log(fun.__proto__.__proto__.__proto__)

let object2 = {
    name:"Son"
}
//never do this
object2.__proto__ = object1;