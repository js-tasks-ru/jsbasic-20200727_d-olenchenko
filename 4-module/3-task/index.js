/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {



    let table = document.querySelector('table');
    let tbody = document.querySelector('tbody');
    let thead = document.querySelector('tbody')

    let index = 0;
    let theadCells = document.querySelectorAll('thead > tr > td');
    let tbodyCells = document.querySelectorAll('tbody > tr > td');
    let Status;
    let Gender;
    let Age;

    //Сначала решаем задание с колонкой Status
    //Сначала через цикл вычисляем номер столбца с заголовком Status

    while (theadCells[index].innerHTML != `Status`) {
        Status = index++;
    }

    Status = Status + 1;

    //Теперь через циклы выполним заданные условия для ячеек столбца с заголовком Status
    //Проставляем класс `available/unavailable` в зависимости от значения атрибута `data-available` у ячейки `Status`.

    for (index; index < tbodyCells.length; index = index + Status) {

        if (tbodyCells[index].getAttribute("data-available") == 'true') {
            tbodyCells[index].classList.add("available")
        } else {
            tbodyCells[index].classList.add("unavailable")
        }

    }

    //Проставляем атрибут `hidden`, если атрибута `data-available` нет вообще.

    index = Status;

    for (index; index < tbodyCells.length; index = index + Status) {


        if (tbodyCells[index].hasAttribute("data-available") == false) {
            tbodyCells[index].setAttribute("hidden", "");
        }

    }

    //Переходим к заданию для столбца Gender
    //Через цикл вычисляем номер столбца с заголовком Gender

    index = 0;

    while (theadCells[index].innerHTML != `Gender`) {
        Gender = index++;
    }

    Gender = Gender + 1;

    //Проствляем класс `male/female` в зависимости от содержимого ячейки `Gender`. Если её значение `m` - класс `male`, Если её значение `f` - класс `female`.

    for (index; index < tbodyCells.length; index = index + Gender) {

        if (tbodyCells[index].innerHTML == 'm') {
            tbodyCells[index].classList.add("male")
        } else {
            tbodyCells[index].classList.add("female")
        }

    }

    //Переходим к заданию для столбца Age
    //Через цикл вычисляем номер столбца с заголовком Age

    index = 0;

    while (theadCells[index].innerHTML != `Age`) {
        Age = index++;
    }

    Age = Age + 1;
    console.log(Age)

    //Добавляем inline-стиль `style="text-decoration: line-through"`, если значение ячейки `Age` меньше 18.

    for (index; index < tbodyCells.length; index += Age) {

        if (tbodyCells[index].innerHTML < '18') {
            tbodyCells[index].classList.add("text-decoration:line-through")
        }

    }
}




