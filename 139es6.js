//-------------- 140 use of template string
// var s = `backtic es6 e asce`;
// console.log(`use of backtic is ${s}`);
// console.log(s.padStart(30,'*'))
// console.log(s.padEnd(30,'a'))
// console.log('S'.repeat(10))
//----------- 141 let vs const vs let

// const a = 10
// a = 100
// console.log(a)

// let b = 10
// b = 100
// console.log(b)

// {
//     let abc = 'abc'
//     console.log(abc)
// }
// console.log(abc) let ke block er bahire access kora jay na

// -------------142 arrow function

// let sum = (a,b) =>{
//     return a + b   
// }
// console.log(sum(15,10))


// let add = (a,b) => a + b   
// console.log(add(5,10))

// ---------143 arrow function

// function testMe(){
//     console.log(this)
// }
// testMe.call({})

// let obj = {
//     name:'Moon Kabir',
//     print:()=>{
//         console.log(this)
//     }
// }

// obj.print()


// let obj = {
//     name:'Moon Kabir',
//     print: function(){
//         // let self = this
//         // setTimeout(function(){
//         setTimeout(()=>{
//             console.log(this)
//             console.log(`Hello, ${this.name}`)
//         },1000)
//     }
// }

// obj.print() 

//-------- 144default parameter

// function sqr(n=1){
//     return n*n
// }
// console.log(sqr()) 

// -----------145 iteratable and rest and spread operator

// function sum(...rest){
//     console.log(rest)
//     return rest.reduce((a,b) => a + b)
// }
// console.log(sum(1,2,3,4,5))

// let a = [1,2,3]
// console.log(...a)


// let obj = {
//     a:10,
//     b:20,
//     c:30
// }
// let obj2 = {
//     ...obj
// }
// console.log(obj2)

//------------ 146 enhanece

// let m = 10, n = 20
// let objmn = {
//     m,
//     n,
//     print(){
//         console.log(this)
//     }
// }
// objmn.print()

//------------- 147 destructure

// var person = {
//     name:"Moon Kabir",
//     email:"moonkabir4@gmail.com",
//     address:{
//         city:'Dhaka',
//         country:'Bangladesh'
//     }
// }

// let{name, email, address, address:{city, country}} = person

// console.log(name, email, city, country)


// let arr = [1,2,3,4,5,6]
// let [first, second, , , ,last] = arr
// console.log(first,second,last)

// -----148 object error

// let obj = {
//         a:10,
//         b:20
// }
// console.log(Object.entries(obj));

// var objArr = [
//     ['a', 10],
//     ['b', 20],
// ]

// console.log(Object.fromEntries(objArr))

// -----149 symbols

// let s1 = Symbol()
// let s2 = Symbol('test symbol')

// console.log(s1)
// console.log(s2)

// console.log(s1 === s2)

// let toss = {
//     HEAD: Symbol('HEAD'),
//     TAIL: Symbol('TAIL')
// }

// console.log( toss.HEAD )

// -----151iterator

// const arr = [1,2,3]

// function createIterator(collection){
//     let i = 0
//     return{
//         next(){
//             return{
//                 done: i>= collection.length,
//                 value: collection[i++] 
//             } 
//         }
//     }
// }
// let itearte = createIterator(arr)
// console.log(itearte.next())
// console.log(itearte.next())
// console.log(itearte.next())
// console.log(itearte.next())
// console.dir(itearte.next)

// ------152iterator


// const arr = [1,2,3]
// console.log(arr[Symbol.iterator])
// console.log('str'[Symbol.iterator])

// let iterate = arr[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// let str = 'str'
// let iterateText = str[Symbol.iterator]()
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())

// --------153 for of loop

// const arr = [1,2,3]

// for (let v of arr){
//     console.log(v)
// }

// for (let v of 'Moon Kabir'){
//     console.log(v)
// }

// let obj = {
//     a:10,
//     b:20
// } 

// for (let v of obj){
//     console.log(v)
// }

// -------154 generator

// const arr = [10,20,35]

// function* generate(collection){
//     for(let i = 0; i<=collection.length; i++){
//         yield collection[i]
//     }
// }
// let iterate  = generate(arr)
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// --------155set

// let set = new Set([1, 2, 3])
// set.add(5)
// set.add(6)
// set.add(6)
// set.add(6)

// set.clear()

// console.log(set.has(5))
// console.log(set)

// let valuesIterate = set.values()
// console.log(valuesIterate.next())

// let keysIterate = set.keys()
// console.log(keysIterate.next())

// -----156 map

// let map = new Map([
//     ['a', 10],
//     ['b', 20],
//     ['c', 30]
// ])

// map.set('d', 40)

// map.delete('c')
// console.log(map.size)
// console.log(map)
// console.log(map.get('b'))

// for(let [k, v] of map){
//     console.log(v, k)
// }

// ----158 weak set

// let a = {a: 10} , b={b: 20}
// let set = new Set([a,b])

// a = null
// console.log(set)

// let arr = [...set]
// console.log(arr[0 ])

// let weakset = new WeakSet([a,b])
// a = null
// console.log(weakset.has(b)) 

// ----159 weak map

// let a = {a: 10} , b={b: 20}

// let weakmap = new WeakMap([[a, 45], [b, 60]])
// a = null
// console.log(weakmap.get(b))
// console.log(weakmap.has(b))
// console.log(weakmap.has(a))

// ----160 class

// function Rectangle(width, height){
//     this.width = width
//     this.height = height
// }

// Rectangle.prototype.draw = function(){
//     console.log(this)
//     console.log('Drawing ...')
// }

// let rect1 = new Rectangle(12,15)
// console.log(rect1)

// class Rectangle{
//     constructor(width,height){
//         this.width = width
//         this.height = height
//     }
//     name = "Moon Kabir"
//     draw(){
//         console.log('Drawing...')
//     }
// }

// let rect1 = new Rectangle(45,75)
// console.log(rect1)

// ----161 class properties
// babel js er pluging install korar process dekhaice
// and babel er modify korar por kivabe updated code 
// lower version browser e run kore seita dekhano hoice  

// ----162 static method in class

// class Person{
//     constructor (name, email){
//         this.name = name
//         this.email = email
//     }
//     print(){
//         console.log(this.name, this.email)
//     }
//     static create(str){
//         let person = JSON.parse(str)
//         return new Person(person.name, person.email)
//     }
// }

// let str = '{"name":"Moon Kabir", "email":"moonkabir4@gmail.com"}'

// let p1 = Person.create(str)
// console.log(p1)

// console.log(p1 instanceof Person)
// p1.print()

// -----163 this 
// talking about this 

// ----164 Private Data symbol

// use symbol that's protected data

// -------165 private with weak map

// const _radius = new WeakMap()
// const _name = new WeakMap()
// const _resize = new WeakMap()

// class Circle{
//     constructor(radius, name){
//         this.size = 100
//         _radius.set(this, radius)
//         _name.set(this, name)
//         _resize.set(this, () =>{
//             console.log(this.size)
//         })
//     }

//     draw(){
//         console.log('Drawing...')
//         console.log(_radius.get(this), _name.get(this))
//         _resize.get(this)()
//     }
// }

// let c1 = new Circle(2, 'Cred')
// c1.draw() 

// -------167 inheritance
// -------168 overriding
// -------169 module

// import classname from filelocation

// import whole object
// import * from filelocation

// import multiple object
// import {objectname,objectname} from filelocation



 