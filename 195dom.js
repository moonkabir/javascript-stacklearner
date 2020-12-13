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


function createElement(tagName, className, innerHTML){
    let tag = document.createElement(tagName);
    tag.innerHTML = innerHTML || ''
    tag.className = className || ''
    return tag
}
function append(parent, children){
    children.forEach(child =>parent.appendChild(child))
}


let li = createElement('li', 'class-name', 'four')
li.setAttribute('attributeName','attributeValue')

let list = document.getElementById('list')
list.appendChild(li)

let p1 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vitae porro corrupti nam beatae quo perferendis ipsam maiores nihil optio!')

let p2 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vitae porro corrupti nam beatae quo perferendis ipsam maiores nihil optio!')

let div =  createElement('div')
append(div, [p1, p2])

list.insertAdjacentElement('beforeend',div)
// list.insertAdjacentElement('afterend',div)
// list.insertAdjacentElement('afterbegin',div)
// list.insertAdjacentElement('beforebegin',div)

// document.getElementsByClassName('container')[0].appendChild(div)




// remove and update element
let firstChild = list.firstElementChild

setTimeout(() =>{
    firstChild.innerHTML = firstChild.innerHTML + '(Modified)'
    firstChild.classList.add('text-success')
    firstChild.style.background = 'black'
}, 5000)

// setTimeout(() =>{
//     list.lastChild.remove()
// }, 3000)

let lastItem = list.lastElementChild.cloneNode()
lastItem.innerHTML = 'five'
list.appendChild(lastItem)

// deep clone 
let lastItem = list.lastElementChild.cloneNode(true)
list.appendChild(lastItem)