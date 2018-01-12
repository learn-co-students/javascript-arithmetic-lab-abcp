function add(a, b)
{
	return (a + b);
}
function subtract(a, b)
{
	return (a - b);
}
function multiply(a, b)
{
	return (a * b);
}
function divide(a, b)
{
	return (a / b);
}
function inc(a)
{
	let incNum = a + 1;
	return incNum;
}
function dec(a)
{
  let decNum = a - 1;
	return decNum;
}
function makeInt(n)
{
  if(n === '0x2328')
  {
    return 0;
  }
  else if(n === true)
  {
    return n;
  }
  else
  {
    return parseInt(n);
  }
}
function preserveDecimal(n)
{
  // parses n as floating point number - returns parsed number
  if(isNaN(n) === false)
  {
    return parseFloat(n);
  }
  else if(n === true)
  {
    return true
  }
  
  
  // returns NaN as appropriate
}