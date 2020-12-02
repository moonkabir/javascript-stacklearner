// This is error practise field
// this is the check vs code to perform vs code can update code github
//-----171 error handling

// function changeToInt(v){
//     let result = Number.parseInt()
//     if(!result){
//         return 'Please Provide a vlaue Which is able to convert in Integer'
        
//     }
//     return result
// } 

// let result = changeToInt('8thsdghdg6.gsg')
// console.log(result)

// NaN === NaN (false) 

// ------172 try catch

// function makeWords(text){
//     try {
//         let str = text.trim()
//         let words =str.split(' ')
//         return words
//     } catch (e) {
//         // console.log(e.message)
//         console.log('please Provide a valid text')
//     }
//     // let str = text.trim()
//     // let words =str.split(' ')
//     // return words
// }
// let words = makeWords(86)
// console.log(words)

// -----173 throwing error 

// try {
//     console.log('I am Line 1')
//     throw new Error('I am Your Error')
//     console.log('I am Line 2')
//     console.log('I am Line 3')
// } catch (e) {
//     console.log(e.message)
// }

// -----174 finally block


try {
    console.log('I am Line 1')
    // throw new Error('I am Your Error')
    console.log('I am Line 2')
    console.log('I am Line 3')
} catch (e) {
    console.log(e.message)
}finally{
    console.log('I am Finally Error')
}