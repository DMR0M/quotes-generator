"use strict";


// API data array
let apiQuotes = [];

// Get Quotes From API
async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
  } catch(error) {
    // alert the error
    alert(error);
  }
};

// Randomize Quote Function
const randomizeQuote = (quoteSelector, authorSelector) => {
  const randomIndex = Math.floor(Math.random() * apiQuotes.length);
  const randomQuote = apiQuotes[randomIndex].text;
  const randomAuthor = apiQuotes[randomIndex].author;
  
  // Change quotes
  document.querySelector(quoteSelector).textContent = randomQuote;
  document.querySelector(authorSelector).textContent = randomAuthor;
};

// Tweet the quote
const tweetQuote = (quoteSelector, authorSelector) => {
  const quoteText = document.querySelector(quoteSelector);
  const authorText = document.querySelector(authorSelector);

  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}   -   ${authorText.textContent}`;

  // Open twitter.com
  window.open(twitterUrl, '_blank');
};

// On Load
getQuotes();


