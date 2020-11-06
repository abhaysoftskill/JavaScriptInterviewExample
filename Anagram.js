function anagram(s1, s2){
    // return s1.split("").sort().join("") === s2.split("").sort().join("");
    return s1.toLowerCase().split("").sort().join("") === s2.toLowerCase().split("").sort().join("");;
}


// ---------------------------------------------------

function anagram (s1, s2){
    var tempStr1 = s1.toLowerCase();
    var tempStr2 = s2.toLowerCase();

    tempStr1.split('').map((data) =>{
        return tempStr2.includes(data) ? 'Anagram' :'Not Anagram'
    })
}