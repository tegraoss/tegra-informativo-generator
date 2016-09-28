document.setFile = function(id, value) {
    var img = document.getElementById(id);
    img.setAttribute("src",value);
};

function selectValue(id){
    // open popup window and pass field id
    var ref = window.open('php/form.php?id=' + encodeURIComponent(id), 'popuppage','width=400,toolbar=1,resizable=1,scrollbars=yes,height=400,top=100,left=100');
    ref.focus();
}
  function updateValue(id, value){
    // this gets called from the popup window and updates the field with a new value
    document.getElementById(id).src = value;
}

function adicionar() {
    var content = document.getElementById("contentBody").getElementsByTagName("tbody")[0];
    content.appendChild(createSection());
}
function editar(element, e) {
    element.parentElement.getElementsByTagName(e)[0].value = element.innerHTML;
    element.parentElement.getElementsByTagName(e)[0].style.display = "block";
    element.style.display = "none";
    element.parentElement.getElementsByTagName("button")[0].style.display = "block";
}
function x(element) {
    var inpt = element.parentElement.getElementsByTagName("input")[0];
    var h2 = element.parentElement.getElementsByTagName("h2")[0];
    h2.innerHTML = inpt.value;

    var txt = element.parentElement.getElementsByTagName("textarea")[0];
    var p = element.parentElement.getElementsByTagName("p")[0];
    p.innerHTML = txt.value;

    h2.style.display = "block";
    inpt.style.display = "none";
    txt.style.display = "none";
    p.style.display = "inline-block";
    element.style.display = "none";
}
function createSection() {
    var tr = document.createElement("tr");

    var td = document.createElement("td");
    td.setAttribute("bgcolor", "#ffffff");
    td.setAttribute("align", "center");
    td.setAttribute("height", "100%");
    td.setAttribute("valign", "top");
    td.setAttribute("width", "100%");
    tr.appendChild(td);

    var table = document.createElement("table");
    table.setAttribute("border", "0");
    table.setAttribute("cellpadding", "0");
    table.setAttribute("cellspacing", "0");
    table.setAttribute("width", "100%");
    table.setAttribute("align", "center");
    td.appendChild(table);

    var tr2 = document.createElement("tr");
    table.appendChild(tr2);

    var td2 = document.createElement("td");
    td2.setAttribute("align", "center");
    td2.setAttribute("style", "font-size:0; padding: 10px 0;");
    td2.setAttribute("valign", "top");
    tr2.appendChild(td2);

    var div = document.createElement("div");
    div.setAttribute("style", "display:inline-block; margin: 0 -2px; width:100%; min-width:200px; max-width:600px; vertical-align:top;");
    td2.appendChild(div);

    var table2 = document.createElement("table");
    table2.setAttribute("border", "0");
    table2.setAttribute("cellpadding", "0");
    table2.setAttribute("cellspacing", "0");
    table2.setAttribute("width", "100%");
    table2.setAttribute("align", "center");
    table2.setAttribute("style", "max-width:660px;");
    div.appendChild(table2);

    var tr3 = document.createElement("tr");
    table2.appendChild(tr3);

    var td3 = document.createElement("td");
    td3.setAttribute("bgcolor", "#ffffff");
    td3.setAttribute("align", "center");
    td3.setAttribute("height", "100%");
    td3.setAttribute("valign", "top");
    td3.setAttribute("width", "100%");
    tr3.appendChild(td3);

    var table3 = document.createElement("table");
    table3.setAttribute("border", "0");
    table3.setAttribute("cellpadding", "0");
    table3.setAttribute("cellspacing", "0");
    table3.setAttribute("width", "100%");
    table3.setAttribute("align", "center");
    td3.appendChild(table3);

    var tr4 = document.createElement("tr");
    table3.appendChild(tr4);

    var td4 = document.createElement("td");
    td4.setAttribute("align", "center");
    td4.setAttribute("style", "font-size:0; padding: 10px 0;");
    td4.setAttribute("valign", "top");
    tr4.appendChild(td4);

    var img = document.createElement("img");
    img.setAttribute("style", "border: 0;width: 100%; margin: 0%");
    img.setAttribute("class", "center-on-narrow");
    img.setAttribute("src", "http://placehold.it/600");
    img.setAttribute("id", ++window.imgId);
    img.setAttribute("onclick", "selectValue(this.id);");
    td4.appendChild(img);

    var tr5 = document.createElement("tr");
    table3.appendChild(tr5);

    var td5 = document.createElement("td");
    td5.setAttribute("style", "font-family: 'Lato', sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; padding-top: 10px; text-align:center");
    td5.setAttribute("class", "stack-column-center center-on-narrow");
    tr5.appendChild(td5);

    var inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("class", "title");
    inputTitle.setAttribute("style", "margin-left: auto; margin-right: auto; text-align:center");
    inputTitle.style.display = "none";
    inputTitle.value = "Title";
    td5.appendChild(inputTitle);

    var title = document.createElement("h2");
    title.setAttribute("class", "h2-title");
    title.setAttribute("onclick", "editar(this, 'input')");
    title.innerHTML = "Title";
    td5.appendChild(title);

    var inputText = document.createElement("textarea");
    inputText.setAttribute("class", "text");
    inputText.style.display = "none";
    inputText.value = "Lorem ipsum dolor sit amet, pellentesque integer vitae sit mauris, pretium elit felis magna in, quam ut adipiscing in lobortis, nulla ut ultricies quis, a et est neque eu. ";
    td5.appendChild(inputText);

    var text = document.createElement("p");
    text.setAttribute("class", "p-text");
    text.setAttribute("onclick", "editar(this, 'textarea')");
    text.innerHTML = "Lorem ipsum dolor sit amet, pellentesque integer vitae sit mauris, pretium elit felis magna in, quam ut adipiscing in lobortis, nulla ut ultricies quis, a et est neque eu. ";
    td5.appendChild(text);

    var btn = document.createElement("button");
    btn.setAttribute("onclick", "x(this);");
    btn.innerHTML = "save";
    btn.setAttribute("class", "button-td unselectable");
    btn.style.display = "none";
    td5.appendChild(btn);

    var hr = document.createElement("hr");
    td.appendChild(hr);
    return tr;
}
