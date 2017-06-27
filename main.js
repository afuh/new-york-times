const root = document.getElementById("article");

fetch('https://raw.githubusercontent.com/afuh/new-york-times/master/article.html')
  .then(res => res.text())
  .then(res => document.getElementById("article").innerHTML = res)
  .catch(err => console.log(err))
