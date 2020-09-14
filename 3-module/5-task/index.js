/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  
    let arr = str.split(" ");
      let strAgain = arr.join(',');
      let arrNoComm = strAgain.split(',');
      let index;
      let arrOnlyNum = [];
      let number;

      for (index = 0; index < arrNoComm.length; ++index) {
        number = Number(arrNoComm[index]);

        if (isFinite(arrNoComm[index]) === true) {
          arrOnlyNum.push(number);
        }
      }

      let max = Math.max(...arrOnlyNum);
      let min = Math.min(...arrOnlyNum);
      let result = {};
      result['min'] = min;
      result['max'] = max;
      return result;
    
  
}
