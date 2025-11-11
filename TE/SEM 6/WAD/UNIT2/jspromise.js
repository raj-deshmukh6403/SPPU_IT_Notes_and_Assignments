//fetch("http://google.com").then().catch

const promiseone = new Promise(function (resolve,reject) {
  setTimeout(function(){
    console.log("async task complete");
    
},1000)
promiseone.then(function(){
    console.log("Promise Consumed");
})
})