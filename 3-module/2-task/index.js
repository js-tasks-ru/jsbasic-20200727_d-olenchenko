/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let NewArr = [];
  let k;
  for (k = 0; k < arr.length; ++k) {
    let i = a;
    for (i; i <= b; i++) {
      if (i === arr[k]) {
        NewArr.push(arr[k]);
      } else {
        ++i;
      }
    }
  }
  return NewArr;
}
