/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {

    let cell = table.querySelectorAll('tr > td');
    let raws = table.querySelectorAll('tr');
    let index = 0;
    let RawsQty = raws.length;

    for (index; index < cell.length; index = index + RawsQty + 1) {
        cell[index].style.backgroundColor = 'red';
    }

}
// Где в переменной table находится DOM-элемент для тега <table>

makeDiagonalRed(table);// это я добавил
