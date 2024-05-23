const quoteContent = document.getElementById("quote-content");
const quoteId = document.getElementById("quote-num");
const generateButton = document.getElementById("generate");
const apiURL = `https://api.adviceslip.com/advice`;

async function getQuote() {
  const response = await fetch(apiURL);
  const data = await response.json();
  return data;
}
// let canClick = true;

async function generateQuotes() {
  // if (!canClick) {
  //   generateButton.style.cursor = "not-allowed";
  // }

  // canClick = false;

  const quote = await getQuote();
  const currentQuote = {
    text: quote.slip.advice,
    id: quote.slip.id,
  };

  quoteContent.innerHTML = currentQuote.text;
  quoteId.innerHTML = currentQuote.id;

  // setTimeout(() => {
  //   canClick = true;
  //   generateButton.style.cursor = "pointer";
  // }, 2000);
}

generateButton.addEventListener("click", generateQuotes);
document.addEventListener("DOMContentLoaded", generateQuotes);
