// chaining function

// const multiplies = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve(5)
//     })
//     .then(value =>{
//         return new Promise((resolve,reject)=>{
//             resolve(value*5)
//         })
//         .then(data =>{
//             console.log(data*2);
//         })
//     })

// }
// multiplies()

// alarm
const createAlarm =(name,ms)=>{
     
     return new Promise((resolve,reject)=>{
        let result = ms*1000
        setTimeout(()=>{
        return result >2000?resolve(`wake up ${name}`):reject('Delay is not sufficient')
    },result)
    }) 
}
createAlarm('jose',4)
.then(data =>{
    console.log(data);
})
.catch(err =>{
    console.log(err);
})

