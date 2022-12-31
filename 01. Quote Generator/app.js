const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btn = document.querySelector(".btn");

btn.addEventListener("click", getQuote);


function getQuote() {
  fetch("http://api.quotable.io/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      quote.innerHTML = data.content;
      author.innerHTML = data.author;
    });
}

getQuote()