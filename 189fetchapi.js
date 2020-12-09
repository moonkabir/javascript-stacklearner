// const BASE_URL = 'http://jsonplaceholder.typicode.com'

// fetch(`${BASE_URL}/users/1`)
//     .then(res => res.json())
//     .then(data =>{
//         console.log(data)
//         return Promise.resolve('something')
//     })
//     .then(str =>{
//         console.log(str)
//         return Promise.resolve('another Promise')
//     })
//     .then(another =>{b  
//         console.log(another)
//     })
//     .catch(e =>{
//         console.log(e)
//     })

// const BASE_URL = 'http://jsonplaceholder.typicode.com'
// function getRequest(url) {
//     return new Promise((resolve, reject) =>{

//         const xhr = new XMLHttpRequest()
//         xhr.open('get', url)

//         xhr.onreadystatechange = function(e){
//             if(xhr.readyState === 4){
//                 if(xhr.status === 200){
//                     let response = JSON.parse(xhr.response)
//                     resolve(response)
//                 }else{
//                     reject(new Error('Error Occurred'))
//                 }
//             }
//         }
//         xhr.send()
//     })
// }

// getRequest(`${BASE_URL}/users/1`)
//     .then(data =>{
//         console.log(data)
//     })
//     .catch(e =>{
//         console.log(e)
//     })

//----------- 190 promise api

// const delay = s =>new Promise(resolve => setTimeout(resolve,s*1000))
//  delay(2).then(() =>console.log('2 Second Delay'))
//  delay(1).then(() =>console.log('1 Second Delay'))
//  delay(2).then(() =>console.log('2 Second Delay'))
//  delay(3).then(() =>console.log('3 Second Delay'))
//  delay(5).then(() =>console.log('5 Second Delay'))


// sob resolve hoye output dibe,rejected hoile konoi output asbe na

let p1 = new Promise(resolve => {
    setTimeout(resolve, 3000,'One')
})
let p2 = new Promise(resolve => {
    setTimeout(resolve, 5000,'Two')
})
let p3 = new Promise(resolve => {
    setTimeout(resolve, 2000,'Three')
})

let promiseArr = [p1, p2, p3]

Promise.all(promiseArr)
    .then(arr =>console.log(arr))

Promise.race(promiseArr)
    .then(v => console.log(v))