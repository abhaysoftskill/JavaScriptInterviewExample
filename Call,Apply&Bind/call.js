// Utility of CALL,APPLY AND BIND

let name = {
    firstname : "Abhay",
    lastname : "Narnaware",
    printFullName : function () {
        console.log(this.firstname + " " + this.lastname)
    }
}
name.printFullName() // Abhay Narnaware

let printFullName2 =  function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state + " // using call")
}

printFullName2.call(name, "Pune" ,"Maharashtra") // Abhay Narnaware

let name2 = {
    firstname : 'Kanchan',
    lastname : "Narnaware"
}

// using call do function borrowing
name.printFullName.call(name2);  // Kanchan Narnaware

printFullName2.call(name2, "Pune","Maharashtra");