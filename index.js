function add(a, b){
  return a + b;
}
add(1,2);

function subtract(a, b){
  return a - b;
}
subtract(5, 2);

function multiply(a, b){
  return a * b;
}
multiply(5, 2);

function divide(a, b){
  return a / b;
}
divide(10, 2);

function inc(num){
num++;
return num;
}
inc();

function dec(num){
  num--;
  return num;
}
dec();

function makeInt(n) {
   return parseInt(n, 10);
}
makeInt();

function preserveDecimal(n){
  var parse = parseFloat(n);
  return parse;
}
preserveDecimal("2.199");
