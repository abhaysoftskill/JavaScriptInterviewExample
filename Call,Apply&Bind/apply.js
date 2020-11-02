let name2 = {
    firstname : 'Kanchan',
    lastname : "Narnaware"
}

let printFullName2 =  function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state + " // using call")
}

// in apply the second arg pass as a array list
printFullName2.apply(name2, ["Pune","Maharashtra"]);


// Other Example

let printFullName3 =  function (address) {
    console.log(this.firstname + " " + this.lastname + " " + address.hometown + " " + address.state + " // using call")
}

let address = {
    hometown: 'Nagpur',
    state:'Maharashtra'
}
// in apply the second arg pass as a array list
printFullName3.apply(name2, [address]);