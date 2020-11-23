var d = document;

var name;
var initials;
var posada;

function addRow()
{
    // Считываем значения с формы
    name = d.getElementById('name').value;
    initials = d.getElementById('initials').value;
    posada = d.getElementById('posada').value;

    // Находим нужную таблицу
    var tbody = d.getElementById('tab1').getElementsByTagName('TBODY')[0];

    // Создаем строку таблицы и добавляем ее
    var row = d.createElement("TR");
    tbody.appendChild(row);

    // Создаем ячейки в вышесозданной строке
    // и добавляем тх
    var td1 = d.createElement("TD");
    var td2 = d.createElement("TD");

    row.appendChild(td1);
    row.appendChild(td2);

    // Наполняем ячейки
    td1.innerHTML = name+' '+initials;
    td2.innerHTML = posada;
}
var addTaskButton = document.getElementById("subm");
addTaskButton.addEventListener("click", addRow, false);