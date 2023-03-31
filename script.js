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
const randomizeQuote = () => {
  const randomIndex = Math.floor(Math.random() * apiQuotes.length);
  const randomQuote = apiQuotes[randomIndex].text;
  const randomAuthor = apiQuotes[randomIndex].author;
  
  // Text Selectors
  const quoteSelector = document.querySelector('#quote');
  const authorSelector = document.querySelector('#author');

  // Change quotes
  quoteSelector.textContent = randomQuote;
  authorSelector.textContent = randomAuthor;
};

// Tweet the quote
const tweetQuote = () => {
  const quoteText = document.querySelector('#quote').textContent;
  const authorText = document.querySelector('#author').textContent;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText}   -   ${authorText}`;

  // Open twitter.com
  window.open(twitterUrl, '_blank');
};


// On Load
getQuotes();


