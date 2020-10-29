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