
var a = Math.floor(Math.random() * 1000)
var b = Math.floor(Math.random() * 1000)

function add(a, b) {
  add = a + b
  return(add)
}

function subtract(a, b) {
  subtract = a - b
  return(subtract)
}

function multiply(a, b) {
  multiply = a * b
  return(multiply)
}

function divide(a, b){
  divide = a/b
  return(divide)
}

function inc(n) {
  inc = ++n
  return(inc)
}

function dec(n) {
  dec = --n
  return(dec)
}

function makeInt(n){
  return parseInt(n, 10)
}

function preserveDecimal(n){
  return parseFloat(n, 10)
}
