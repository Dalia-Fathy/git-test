var quotes = [
  {
    author: "-- Oscar Wilde",
    quotes: "“Be yourself; everyone else is already taken.”"
  },

  {
    author: "-- Frank Zappa",
    quotes: "“So many books, so little time.”"
  },

  {
    author: "-- Marcus Tullius Cicero",
    quotes: "“A room without books is like a body without a soul.”"
  },

  {
    author: "-- Albert Einstein",
    quotes: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
  },
  {
    author:"-- Friedrich Nietzsche,",
    quotes:"“Without music, life would be a mistake.”"
  },
  {
    author:"-- Allen Saunders",
    quotes:"“Life is what happens to us while we are making other plans.”"
  }
]
function newQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("outputquotes").innerHTML=quotes[randomNumber].quotes;
 document.getElementById("outputauthor").innerHTML=quotes[randomNumber].author;
    }