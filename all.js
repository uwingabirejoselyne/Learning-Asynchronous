// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 300);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 200);
// });

// Promise.all([promise1, promise2]).then((res) => {
//   console.log(res[0]);
//   console.log(res[1]);
// });


// const promiseA = new Promise((resolve, reject)=>{
//   resolve(23)
// })
// const promiseB = new Promise((resolve,reject)=>{
//   if(12*12 ===144){
//     resolve(144)
//   }
//   else({
//       ErrorType:'typeerror'
//   });
// }
// );
// Promise.all([promiseA,promiseB])
// .then((values)=>{
//   console.log(`returned value of promise.all ${values}`)
// })
// .catch((err)=>{
//  console.log(`failed error ${err.ErrorType}`);
// }).finally(()=>{
//   console.log('Operations for Promise.all() have finished.');
// })

function getPromise(shouldResolve, value){
  return new Promise((resolve,reject)=>{
    if(shouldResolve){
      resolve(value)
    }
    else{
      reject(value)
    }
  })
}

function onResolve(value){
console.log('resolved'+value);
}
function onReject(value){
  console.log('Reject'+value);
  }
  const resolvedpromise1 =getPromise(true,'resolved promise 1')
  const resolvedpromise2 =getPromise(true,'resolved promise 2')
  const rejectedpromise1 =getPromise(false,'rejected promise 1')
  const rejectedpromise2 =getPromise(false,'rejected promise 2')



  // Promise.all([resolvedpromise1,resolvedpromise2]).then
  // (onResolve).
  // catch(onReject)
  Promise.all([rejectedpromise1,resolvedpromise2]).then
  (onResolve).
  catch(onReject)
  
 