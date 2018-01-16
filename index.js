function add(a,b){
 return a + b;
}
add(1002,1);

function subtract(a,b){
 return a - b;
}
subtract(1002,1);

function multiply(a,b){
 return a * b;
}
multiply(1002,1);

function divide(a,b){
 return a / b;
}
divide(1002,1);

function inc(n){
  n++;
  return n;
}

inc(37);

function dec(n){
  n--;
  return n;
}

dec(37);

function makeInt(a){
  return parseInt(a,10);
}

makeInt('693');
makeInt(693.11112);
makeInt('things');

function preserveDecimal(n){
  return parseFloat(n);
}

preserveDecimal('2.11222');