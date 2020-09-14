/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let index;
  let arr = [];
  for (index = 0; index < users.length; ++index) {

    if (age >= users[index].age) {
      let element = users[index].name + ', ' + users[index].balance;
      arr.push(element)
    }
  }

  let Joined = arr.join('\n');
  return Joined;

}
