// ---195 introduction DOM(Data Object Model)
// ----196 WIndow Object 
// -----198 & 199 selector

// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.getElementsByName();
// document.querySelector();
// document.querySelectorAll();

// -----200 getElement vs Query selectron
// getElementBy use korle html collection pawa jay
// querySelector use korle node list pawa jay
// -----201 traverse dom tree

// let  list = document.getElementById('IdName')
// let parent = list.parentElement
// console.log(parent)
// let children = list.children
// console.log(children)
// console.log(list.previousElementSibling)
// console.log(list.nextElementSibling)
// console.log(list.firstElementChild)
// console.log(list.lastElementChild)

// ----202 throw loop traverse dom

// let listItem = documnet.getElementsByTagName('li')
// // let listItems = array.from(listItem)
// // let listItems = array.prototype.slicce.apply(listItem)
// let listItem = [...listItem] //spread operator

// listItems.forEach((li, ind) =>{
//     let text = li.innerHTML
//     li.innerHTML = `(${ind + 1}) ${text}`
// })

// --------203 create dom elements

// let li = document.createElement(li)
// li.className = 'class-name'
// li.setAttribute('attributeName','attributeValue')
// li.innerHTML = 'innerHTML'

// let list = document.getElementById('list')
// list.appendChild(li)


// function createElement(tagName, className, innerHTML){
//     let tag = document.createElement(tagName);
//     tag.innerHTML = innerHTML || ''
//     tag.className = className || ''
//     return tag
// }
// function append(parent, children){
//     children.forEach(child =>parent.appendChild(child))
// }


// let li = createElement('li', 'class-name', 'four')
// li.setAttribute('attributeName','attributeValue')

// let list = document.getElementById('list')
// list.appendChild(li)

// let p1 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vitae porro corrupti nam beatae quo perferendis ipsam maiores nihil optio!')

// let p2 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vitae porro corrupti nam beatae quo perferendis ipsam maiores nihil optio!')

// let div =  createElement('div')
// append(div, [p1, p2])

// --------204 insert adjecent

// list.insertAdjacentElement('beforeend',div)
// list.insertAdjacentElement('afterend',div)
// list.insertAdjacentElement('afterbegin',div)
// list.insertAdjacentElement('beforebegin',div)

// document.getElementsByClassName('container')[0].appendChild(div)

//-----205 remove and update element

// let firstChild = list.firstElementChild

// setTimeout(() =>{
//     firstChild.innerHTML = firstChild.innerHTML + '(Modified)'
//     firstChild.classList.add('text-success')
//     firstChild.style.background = 'black'
// }, 5000)

// setTimeout(() =>{
//     list.lastChild.remove()
// }, 3000)


// ----206 clone node 

// let lastItem = list.lastElementChild.cloneNode()
// lastItem.innerHTML = 'five'
// list.appendChild(lastItem)

// // deep clone 
// let lastItem = list.lastElementChild.cloneNode(true)
// list.appendChild(lastItem)

// -------207 deal with attribute

// console.log('list.attributes')
// console.log(list.getAttributeNames())
// console.log(list.getAttributeNode('class'))
// console.log(list.getAttribute('id'))
// console.log(list.id)
// console.log(list.className)
// console.log(list.classList)

// lastItem.id = 'last-item'
// lastItem.setAttribute('id', 'last-item')

// let attr = document.createAttribute('title')
// attr.value = 'I am value for attribute'
// lastItem.setAttributeNode(attr)

// ----------208 style dom

// let title = document.getElementById('title')
// // console.log(title.style)
// title.style.color = 'red'
// title.style.fontSize = '40px'

// let styleObj = {
//     background:'black',
//     color:'red',
//     fontSize:'40px'
// }

// let list = document.getElementById('list');
// [...list.children].forEach(li => Object.assign(li.style, styleObj))
// Object.assign(list.style, styleObj)

// -------209 event in dom

// let btn = document.getElementById('btn')

// // btn.onclick = function (e) {
// //     console.log(e)
// // }

// let list = document.getElementById('list')

// btn.addEventListener('click' , function (e) {
//     let item = list.lastElementChild.cloneNode(true)
//     item.innerHTML = 'Newly Created Item'
//     list.appendChild(item)
// })

// let box = document.getElementById('box')
// box.addEventListener('mousemove', function (e) {
//     // document.getElementById('x-value').innerHTML = e.clientX
//     // document.getElementById('y-value').innerHTML = e.clientY
//     document.getElementById('x-value').innerHTML = e.offsetX
//     document.getElementById('y-value').innerHTML = e.offsetY
//     if(e.offsetX === 50 && e.offsetY){
//         alert('I am In 50-50')
//     }
// })

// // -------210 event deligation issue

// // ;[...list.children].forEach(li =>{
// //     li.onClick = function(e) {
// //         e.target.remove()
// //     }
// // })

// list.addEventListener('click', function(e) {
//     if(this.contains(e.target)){
//         e.target.remove()
//     }
// })

// ---------211 input box

// let username = document.getElementById('name')
// username.addEventListener('keypress',function(event){
//     if(event.key === 'Enter'){
//         // console.log(event.target.value)
//         document.getElementById('showName').innerHTML = `Your name is ${event.target.value}`
//         // alert(document.getElementById('showName').innerHTML = `Your name is ${event.target.value}`)
//         event.target.value = ''
//     }
// })

// // --------212 check box event handling

// let skills = document.getElementsByName('skills')
// let result = document.getElementById('result')
// let checkedSkills = []
// ;[...skills].forEach(skill=>{
//     skill.addEventListener('change', function(event) {
//         if(event.target.checked){
//             checkedSkills.push(event.target.value)
//             outputSkills(result, checkedSkills)
//         }else{
//             let ind = checkedSkills.indexOf(event.target.value)
//             checkedSkills.splice(ind, 1)
//             outputSkills(result, checkedSkills)
//         }
//     })
// })

// function outputSkills(parent, skills){
//     let result = ""
//     skills.forEach((skill,index) => {
//         result += `(${index + 1}) ${skill} `
//     })
//     parent.innerHTML = result
// }

// // -------213 list and input event handlers

// let list = document.getElementById('list')
// list.addEventListener('dblclick', function(event){
//     if(this.contains(event.target)){
//         let innerText = event.target.innerText
//         event.target.innerHTML = ""
//         let inputBox = createInputBox(innerText)
//         event.target.appendChild(inputBox)

//         inputBox.addEventListener('keypress', function(e){
//             if("Enter" == e.key){
//                 event.target.innerHTML = e.target.value
//             }
//         })
//     }
// })

// function createInputBox(value){
//     let inp = document.createElement('input')
//     inp.type = 'text'
//     inp.className = 'form-control'
//     inp.value = value
//     return inp
// }


// -------216 ajax get request

const URL = 'http://jsonplaceholder.typicode.com/posts'
let load  = document.getElementById('load')
let postList = document.getElementById('posts')

load.addEventListener('click',function(){
    fetch(URL)
        .then(response => response.json())
        .then(posts =>{
            posts.forEach((post, index) =>{
                let listItem = listItemGenerator(post, index+1)
                postList.appendChild(listItem)
            }) 
        })
        .catch(e =>console.log(e.message))
})

function listItemGenerator(item, no){
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = `${no}. ${item.title}`
    return li
}