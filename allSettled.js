const promisesA = new Promise((resolve,reject)=>{
 resolve(23)
})
const promisesB= new Promise((resolve,reject)=>{
    const connectionGood =false;
    if(connectionGood){
        resolve('connection is successful connected')
    } 
    else{
     reject({
        ErrorType:'network failed'
     })
    }
})
const promisesC = new Promise((resolve,reject)=>{
    if(9+9 ===18){
        resolve('calculation is good')
    }
    else{
        reject({
            ErrorType:'uknown calculation'
        })
    }
})
const promises = [promisesA,promisesB,promisesC]
Promise.allSettled(promises)
.then((value)=>{
value.forEach((val)=>console.log(val))
})
.catch((err)=>{
console.log(`allsettledfailed ${err.ErrorType}`);
})
.finally(()=>{
    console.log('End of operation');
})