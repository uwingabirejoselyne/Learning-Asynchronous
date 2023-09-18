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
// const createAlarm =(name,ms)=>{

//      return new Promise((resolve,reject)=>{
//         let result = ms*1000
//         setTimeout(()=>{
//         return result >2000?resolve(`wake up ${name}`):reject('Delay is not sufficient')
//     },result)
//     })
// }
// createAlarm('jose',4)
// .then(data =>{
//     console.log(data);
// })
// .catch(err =>{
//     console.log(err);
// })

// const convert = async()=>{

// try{
//     const response = await fetch('https://api.github.com/users')
//     if(!response.ok){
//         throw new Error(`not found! status: ${response.status}`)
//     }
//     const data = await response.json()
//     console.log(data);
// }
// catch(err){
//  console.error(err);
// }
// }
// convert()


// const convert1 = ()=>{
//     const response = await

// }
// convert1()

// Create a function called myFetch that should work as a simple version of the native fetch() API. The function myFetch should use the XMLHttpRequest to make a GET Request and return a promise that resolves with the request’s response and rejects with an error if any.

// const myFetch = ()=>{
//     return new Promise((resolve,reject)=>{
//         const request = new XMLHttpRequest()
//         request.addEventListener('readystatechange',()=>{
//            if(request.readyState ===4 && request.status ===200){
//             const data = JSON.parse(request.responseText)
//             resolve(data)
//            }
//            else if (request.readyState ===4) {
//             reject('data not found')
//            }
//         })
//         request.open('GET','https://api.github.com/users')
//         request.send()
//     })

// }
// myFetch().then(data =>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// })



// const refetch =()=>{
//     return new Promise((resolve,reject)=>{
//         const request = new XMLHttpRequest()
//         request.addEventListener('readystatechange',()=>{
//         if(request.readyState===4 && request.status===200){
//             const data =JSON.parse(request.responseText)
//             resolve(data)
//         }
//         else if(request.readyState===4 ){
//             reject('not fouund')
//         }
//        })
//        request.open('GET','https://jsonplaceholder.typicode.com/users')
//        request.send()

//     })
// }
// refetch().then(data =>{
//     console.log(data);
// }).catch(err =>{
//     console.log(err);
// })

// const fetchUserTodos = async () => {
//   const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//     (response) => response.json()
//   );
//   const fetchTodos = fetch("https://jsonplaceholder.typicode.com/todos").then(
//     (response) => response.json()
//   );

//   return Promise.all([fetchUsers, fetchTodos]).then(([users, todos]) => {
//     const combinedData = users.map((user) => ({
//       ...user,
//       todos: todos.filter((todo) => todo.userId === user.id),
//     }));
//     return combinedData;
//   });
// };

// const fetchUser = async()=>{
//     const users = fetch("https://jsonplaceholder.typicode.com/users")
//     .then(data =>data.json())
//     const todo = fetch("https://jsonplaceholder.typicode.com/users")
//     .then(result =>result.json())
//     return Promise.all([users,todo]).then(([users1,todo1])=>{
//         const combinationofdata = users1.map((user2)=>({
//             ...user2,
//             todo1:todo1.filter((todo2)=> todo2.userId === user2.id)
//         }))
//         return combinationofdata
//     })
// }
// fetchUser()


// const getFastPosts =()=>{
//     const promise1 = fetch('https://dummyjson.com/posts')
//     const promise2 = fetch('https://this-may-not-exist.com/posts');
//     const promise3 = fetch('https://jsonplaceholder.typicode.com/posts');

// Promise.any([promise1,promise2,promise3]).then(data =>{
//     let result = data.json()
//     return result
// }).then((data1) => {
//     console.log(data1);
// })
// }
// getFastPosts()


const changeNum =(num)=>{
 const result = num.toString().split(' ')
 console.log(result);
}
changeNum(1999999)













// fetchUserTodos()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// function myReduce(array, reducer, initialValue) {
//   let accumulator = initialValue !== undefined ? initialValue : array[0];
//   let startIndex = initialValue !== undefined ? 0 : 1;

//   for (let i = startIndex; i < array.length; i++) {
//     accumulator = reducer(accumulator, array[i], i, array);
//   }

//   return accumulator;
// }

// const numbers = [1, 2, 3, 4];

// const sum = myReduce(
//   numbers,
//   (acc, curr) => {
//     return acc + curr;
//   },
//   0
// );

// Array.prototype.myReduce = function (reducer, initialValue) {
//   let accumulator = initialValue !== undefined ? initialValue : this[0];
//   let startIndex = initialValue !== undefined ? 0 : 1;

//   for (let i = startIndex; i < this.length; i++) {
//     accumulator = reducer(accumulator, this[i], i, this);
//   }

//   return accumulator;
// };

// const sum = numbers.myReduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(sum);


const myReduce = (cb,initial)=>{
 let result = initial
 for(let i =initial ? 0:1; i<this.length;i++){
    result =cb(result,this[i],i,this)
 }
 return result
}

Array.prototype.myReduce =myReduce;
const arr =[1,2,3]
const sum= arr.myReduce((acc,cur)=>acc +cur)
console.log(sum);