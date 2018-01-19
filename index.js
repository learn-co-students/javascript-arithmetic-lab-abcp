 function makeInt(n){
   return parseInt(n,10)
 }

 function preserveDecimal(n){
   return parseFloat(n)
 }

 function add(a,b){
   return a + b
 }

 function substract(a, b){
   return a - b
 }
 function multiply(a,b){
   return a * b
 }

 function divide(a , b){
   if (b !==0 ){
     return a/b
   }
   else {
     return NaN
   }
 }

 function inc(n){
   return ++n
 }

 function dec(n){
   return --n
 }
