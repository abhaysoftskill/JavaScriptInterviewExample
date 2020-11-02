let name = {
    firstname: "Abhay",
    lastname:"Narnaware"
}

let printName = function (hometown, state, country){
    console.log(this.firstname + " " + this.lastname + " , " + hometown + " - " + state + " ( " + country + " ) " )
}

let printMyName = printName.bind(name,'Pune');
printMyName("MAHARASHTRA", "INDIA") // Abhay Narnaware

// What if browser not support to bind functionality
//will create aour own bind, that call polyfill for bins

Function.prototype.mybind = function (...args) {
    let that = this,
    params = args.slice(1); //get the other args expect 0th
    return function (...args2) {
        // args[0] = name
        // that.call(args[0]);
        // that.apply(args[0], params.concat(args2)); // concatinate using normal JS
        that.apply(args[0], [...params, ...args2]) // ES6
    }
}

let printMyName2 = printName.mybind(name,'Pune', "MAHARASHTRA");
printMyName2( "INDIA"); // Abhay Narnaware , Pune - MAHARASHTRA