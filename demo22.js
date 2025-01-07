//back tick ``
let name = "klu"
console.log(`my name is  ${name}`)

//spread operator (...) - make the array/object as iterable
let arr1 = [10,20,30]
let arr2 = [40,50,60]
let arr3 = [...arr1,...arr2] //merging
console.log(arr3)


const original = [10,20,30]  
const copy = [...original] //copying
console.log(copy)

const numbers = [10,20]
const updated = [...numbers,30,40] //updating
console.log(updated)

//destructinng assignment 
const courses = ["OS","FSAD","DBMS"]
const [a,b,c] = courses
console.log(a)
console.log(b)
console.log(c)

const [p,,r] = courses
console.log(p)
console.log(r)