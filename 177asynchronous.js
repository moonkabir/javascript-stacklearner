//-----178 asynchronous  

// console.log("I am Line One")
// setTimeout(()=>{
//     console.log("I am Line two")
// },3000)
// setTimeout(()=>{
//     console.log("I am Line three")
// },1000)
// console.log("I am Line four")

//-----179 store data

// function sayMyName(name){
//     let result 
//     setTimeout(() => {
//         result = name
//         console.log('I have done...')
//     }, 3000)
//     return result
// }
// let output = sayMyName('Moon Kabir')
// console.log(output)

//------ 184 ajax defination

//-------185 ajax callback

// const xhr = new XMLHttpRequest()
// xhr.open('get', 'http://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange = function(e){
//     if(xhr.readyState === 4){
//         if(xhr.status === 200){
//             let users = JSON.parse(xhr.response)
//             console.log(users)
//         }else{
//             console.log(shr.status)
//         }
//     }
// }

// xhr.send()


// function getRequest(url,callback) {
//     const xhr = new XMLHttpRequest()
//     xhr.open('get', url)

//     xhr.onreadystatechange = function(e){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 let response = JSON.parse(xhr.response)
//                 callback(null, response)
//             }else{
//                 callback(xhr.status,null)
//             }
//         }
//     }

//     xhr.send()
// }

// getRequest('http://jsonplaceholder.typicode.com/users', (err, res)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(res)
//         res.forEach(r=> alert(r.name))
//     }
// })

// getRequest('http://jsonplaceholder.typicode.com/posts', (err, res)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(res)
//         res.forEach(r=>console.log(r.title))
//     }
// })

//------186 callback not always asynchronous

// let arr = [1, 2, 3, 4]

// let sqrArr = arr.map(v => v * v) 
// console.log(sqrArr)

// function asyncMap(arr, cb){
//     return arr.map(v =>{
//         setTimeout(cb.bind(null, v), 0)
//         setTimeout(() => (v), 0)
//     })
// }

// let qbArr = asyncMap(arr, v =>{
//     console.log(v)
// })
// console.log(qbArr)

// ------187not callback

// callback system isSecureContext

//----- 188 promise
// age resolved asto ekon 'fulfilled' ase

// let p1 = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 5000, 'one')
// })

// let p2 = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 3000, 'two')
// })

// p1.then((v)=>{
//     console.log(p1)
// }).catch((e)=>{
//     console.log(e)
// })

// p2.then((v)=>{
//     console.log(p2)
// }).catch((e)=>{
//     console.log(e)
// })

function getIphone(isPassed){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isPassed){
                resolve('I Have Got an Iphone')
            }else{
                reject(new Error('You Have Failed'))
            }
        }, 2000)
    })
}

// true or false

getIphone(true)
    .then((res) => {
        console.log(res)
    })
    .catch((e) => {
        console.log(e)
    })
