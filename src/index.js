module.exports = function check(str, bracketsConfig) {
  let brackets = str.split('');
  let left = [];
  let right = [];
  for (item of bracketsConfig) {
    left.push(item[0]);
    right.push(item[1]);
  }

  let stack = [];
  for (item of brackets) {
    i = left.indexOf(item);
    k = right.indexOf(item);

    if(i != -1) {
      stack.push(i);
    } else if (stack.length === 0 || stack[stack.length - 1] != k) {
      return false;
    } else {
      stack.pop();
    }

    if(i === k && (stack[stack.length - 1] === i) && (stack[stack.length - 2] === i)) {
      stack.pop();
      stack.pop();
    }
  }
  
  return (stack.length === 0);
}
