var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

function add (a,b) {
  return (a + b)
}

function subtract (a,b) {
  return (a - b)
}

function multiply (a,b) {
  return (a*b)
}

function divide (a,b) {
  return (a/b)
}

function inc (a) {
  return ++a
}

function dec (a) {
  return --a
}

function makeInt (a) {
  return (a)
}

function makeInt (n) {
  n = parseInt(n, 10)
  return parseInt(n)
}

function preserveDecimal(n) {
  n = parseFloat (n)
  return parseFloat (n)
}
