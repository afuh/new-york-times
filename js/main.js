function listener () {
  document.getElementById('article').innerHTML = this.responseText;
}

var req = new XMLHttpRequest();
req.addEventListener("load", listener);
req.open("GET", "../article.html");
req.send();
