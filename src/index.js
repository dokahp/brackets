module.exports = function check(str, bracketsConfig) {
  let checkArr = []
  for (bracket of str) {
    let indexBracketArr = bracketsConfig.map(el => el.includes(bracket)).findIndex(el => el == true)
    if (checkArr[checkArr.length - 1] == bracketsConfig[indexBracketArr][0] && bracket == bracketsConfig[indexBracketArr][1]){
      checkArr.pop()
    } else {
      checkArr.push(bracket)
    }
  }
  return !checkArr.length
}
