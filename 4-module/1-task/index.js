/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');
      
  let index = 0;
  let obj;

  let a;

  for (index; index < friends.length; index++) {
    a = friends[index].firstName + " " + friends[index].lastName;
    let li = document.createElement('li');
    li.innerHTML = a;
    ul.appendChild(li)
  }
  
}
