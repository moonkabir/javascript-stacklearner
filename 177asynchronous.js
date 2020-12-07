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