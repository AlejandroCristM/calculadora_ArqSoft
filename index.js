const interface = require('readline-sync');

var calculator = require('./app/calculator.js');

const firstNum = interface.question("Ingrese el primer número: ")
const secondNum = interface.question("Ingrese el segundo número: ")

var num1 = parseInt(firstNum) 
var num2 = parseInt(secondNum) 

console.log(`Add ${num1} + ${num2} = ${calculator.add(num1,num2)}`)
console.log(`Minus ${num1} + ${num2} = ${calculator.minus(num1,num2)}`)
console.log(`Multiply ${num1} + ${num2} = ${calculator.multiply(num1,num2)}`)
console.log(`Divide ${num1} + ${num2} = ${calculator.divide(num1,num2)}`)