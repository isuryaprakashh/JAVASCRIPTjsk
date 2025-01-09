import home from "./demo20.js" // . means current directory
import obj from "./demo21.js"

home()
console.log(obj.id)
console.log(obj.name)
console.log(obj.salary)
console.log(obj.url)

console.log("-------------")

import {sum,mul,text,object} from './demo23.js'

console.log(sum(2,3))
console.log(`multiplication is ${mul(3,2)}`)
console.log(text)
console.log(object.id)
console.log(object.name)

console.log("---------------")

import * as klu from './demo23.js'  //if you dont know item names go with *

console.log(klu.sum(1,1))
console.log(klu.mul(1,3))
console.log(klu.text)
console.log(klu.object.id)
console.log(klu.object.name)