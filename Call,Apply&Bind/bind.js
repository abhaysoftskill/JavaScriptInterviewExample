let name2 = {
    firstname : 'Kanchan',
    lastname : "Narnaware"
}

let printFullName =  function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state + " // using bind")
}

// bind return a method which will call later
let printMyName = printFullName.bind(name2, "Pune","Maharashtra");
console.log(printMyName) // return function
printMyName()

let printMyName2 = printFullName.bind(name2);

printMyName2("Nagpur", "MH")
