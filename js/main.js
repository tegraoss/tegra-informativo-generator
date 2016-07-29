// Loads the content of addSection
var addSection = function () {
    var title = document.getElementById("button-title");
    var text = document.getElementById("button-text");
    var img = document.getElementById("list");
    loadHTML(title, text, img);
  }
  // DEPRECATED
var loadHTML = function (title, text, img) {
  var div = document.getElementsByClassName('corpoemail');
  var changeText = div[0].innerHTML = " ";
}
