function add (a,b) {
  return a + b
}

function subtract(a,b) {
  return a-b
}

function multiply(a,b) {
  return a* b
}

function divide(a,b) {
  return a / b
}

function inc(n) {
  n++
  return n
}

function dec(n) {
  n--
  return n
}

function preserveDecimal(n) {
  return parseFloat(n)
}

function makeInt(n) {
  var type = typeof n;
  if (type === 'string') {
    return parseInt(n, 10)
  } else {
    return 'NaN'
  }
}
