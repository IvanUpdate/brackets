module.exports = function check(str, bracketsConfig) {
  brackets = str.split();
  for (let bracket in brackets) {
    let status = false;
    for (let bracketsCon in bracketsConfig){
      if (bracketsCon[0] == bracket || bracketsCon[1] == bracket){
        status = true;
      }
    }
    if (status == false) {
      return false;
    }
  }
  return true;
}
