$(document).ready(function(){
    $("#news2").click(loadDoc);
})
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("news_page").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "news.txt");
    xhttp.send();
  }