
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0)
    return [];
  let result = [];
  let isOdd = true;
  for (let subArr of matrix){
      if (isOdd) {
          for (let i = 0; i < subArr.length; i++) {
              result.push(subArr[i]);
          }
      }
      else {
          for (let i = subArr.length - 1; i >= 0; i--) {
              result.push(subArr[i]);
          }
      }
      isOdd = !isOdd;
  }
  return result;
}
