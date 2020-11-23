var book;
var author;
var published;

function addRow() {
    book = document.getElementById('book').value;
    author = document.getElementById('author').value;
    published = document.getElementById('published').value;

    var tbody = document.getElementById('tab1').getElementsByTagName('TBODY')[0];
    
    var row = document.createElement("TR");
    tbody.appendChild(row);

    var td1 = document.createElement("TD");
    var td2 = document.createElement("TD");
    var td3 = document.createElement("TD");

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    td1.innerHTML = book;
    td2.innerHTML = author;
    td3.innerHTML = published;
}