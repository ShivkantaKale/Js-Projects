
//1)


const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);



//2)


var promise=new Promise(function(resolve, reject){
    var x= 2+3;
    if(x==5)
        resolve(" executed and resolved successfully");
    else
        reject("rejected");
    });
    promise.then(function(fromResolve){
   console.log("Promise is::"+fromResolve);
     }).catch(function(fromReject){
        console.log("Promise is "+fromReject);
     });




    // 3)

let p = new Promise((resolve, reject)=>{  
        let a = 3;  
        if(a==3){  
            resolve('Success');  
        }  
        else{  
            reject('Failed');  
        }  
 })  
    p.then((message)=>{  
        console.log("It is then block. The message is:"+ message)  
    }).catch((message)=>{  
    console.log("It is Catch block. The message is: "+ message)  
    }) ;


  //  4)

  let x = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});
x.then((result) => {
    console.log(result); // 10
    return result * 2;
}).then((result) => {
    console.log(result); // 20
    return result * 3;
}).then((result) => {
    console.log(result); // 60
    return result * 4;
});

//5)

var data = 'Initial state';
setTimeout(function(){
    data = 'new state'
   console.log('inside date') //inside date
},2000)

//6
var data = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('new State')
        console.log(data); //new State
    },2000
    )
   
})
data.then(function (val) {
    console.warn(val)// new State
})

//7)

const myPromise = new Promise((resolve, reject) => {    
    let condition=9;    
      
    if(condition<0) {      
        resolve('Promise is resolved successfully and then() menthod will be called');    
    } else {      
        reject('Promise is rejected and catch() medhod will be called');    
    }  
});  
    
  myPromise.then((message) => {   
    console.log(message);  
}).catch((message) => {   
    console.log(message);  
}); 




//8)

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

add(1, 2).then((sum) => {
    console.log("SUM 1 ::  ",sum)
    add(sum, 5).then((sum2) => {
      console.log("SUM 2 ::  ", sum2)
       add(sum2, 5).then((sum3) => {
        console.log("SUM 3 ::  ",sum3)
    }).catch((e) => {
        console.log(e)
    })
    }).catch((e) => {
        console.log(e)
    })
}).catch((e) => {   
    console.log(e)
})








