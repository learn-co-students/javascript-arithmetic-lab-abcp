function add(a, b) {
  var sum = a + b 
  return sum
}

function subtract(a, b) {
  var difference = a - b
  return difference
}

function multiply(a, b) {
  var product = a * b 
  return product
}

function divide(a, b) {
  var quotient = a / b 
  return quotient
}

function inc(n) {
  var toIncrement = n
  toIncrement++
  return toIncrement
}

function dec(n) {
  var toDecrement = n
  toDecrement--
  return toDecrement
}

function makeInt(n) {
  var integer = n
  return parseInt(integer,10)
}

function preserveDecimal(n) {
 var floating = n 
 return parseFloat(n)
}