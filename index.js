function add (a, b){
  return a + b
} 
add (1, 80)

function subtract (a, b){
  return a - b
} 
subtract (60, 40)

function multiply (a, b){
  return a * b
} 
multiply (2, 3.4)

function divide (a, b){
  return a / b
} 
divide (5.0, 2.5)

function inc (n){
  var result = ++n
  return result
}
inc (5)

function dec (n){
  var result = --n
  return result
}
dec (5)

function makeInt (n){
return parseInt(n)
}
makeInt(7)

function makeInt (n){
return parseInt(n, 10)
}
makeInt(7.55)

function preserveDecimal (n){
return parseFloat(n)
}
preserveDecimal(7.55)

function preserveDecimal (n){
return parseFloat(n)
}
preserveDecimal('7')