/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let arr = str.split('-');
  let index;
  let FirstLetter;
  
  if (str.slice(0, 1) === "-") {
    index = 0;
  } else {
    index = 1;
  }

  for (index; index < arr.length; ++index) {
    FirstLetter = arr[index].slice(0, 1);
    key = FirstLetter.toUpperCase() + arr[index].slice(1);
    arr[index] = key;
  }
  
  let Joined = arr.join("");
  return Joined;
}
