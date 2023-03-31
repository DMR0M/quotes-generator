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
const randomizeQuote = (quoteSelector=document.querySelector('#quote'), 
                        authorSelector=document.querySelector('#author')) => {
  const randomIndex = Math.floor(Math.random() * apiQuotes.length);
  const randomQuote = apiQuotes[randomIndex].text;
  const randomAuthor = apiQuotes[randomIndex].author;
  
  const quoteText = document.querySelector('.quote-text')
  
  // Check quote length to determine styling
  if (randomQuote.length > 70) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }

  // Change quotes
  quoteSelector.textContent = randomQuote;
  authorSelector.textContent = randomAuthor;
};



// Tweet the quote
const tweetQuote = (quoteSelector=document.querySelector('#quote'), 
                    authorSelector=document.querySelector('#author')) => {
  const quoteText = quoteSelector.textContent;
  const authorText = authorSelector.textContent;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText}   -   ${authorText}`;

  // Open twitter.com
  window.open(twitterUrl, '_blank');
};


// On Load
getQuotes();


