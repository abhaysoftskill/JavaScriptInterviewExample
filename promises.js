//to make a async call ,
// which has  wait for some operation has to done and once come back 
// perform callback fucntion 


var p1 = new Promise(function (resolve, reject){
    resolve(axios.get('/user?ID=12345'))
})
p1.then(function (response) {
    // handle success
    console.log(response);
    return new Promise()
  }) .then(function () {
    // always executed
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 