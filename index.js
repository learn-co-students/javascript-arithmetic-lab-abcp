function add(x,y){
  return x+y
}
function subtract(x,y){
  return x-y
}
function multiply (x,y){
  return x*y
}
function divide (x,y){
  return x/y
}
function makeInt(n){
  return parseInt(n,10);
}
function dec(n){
  return --n
}
function inc(n){
  return ++n
}
function preserveDecimal(NaN){
  return parseInt(NaN,10)
}
function preserveDecimal(n){
  return parseFloat(n,10);
}