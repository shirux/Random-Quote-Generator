/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// -----------------------
// VARIABLES
// -----------------------

var myTimer;

/*** 
 * `quotes` array 
***/
/**
 * My array of different quotes objects, it contains quote and source, and may contain year and citation
 */
var quotes= [{
  quote: 'Be the change that you want to see in the world',
  source: 'Mahatma Gandhi',
  tags: ['political']
},{
  quote: 'An eye for an eye will make the whole world blind',
  source: 'Mahatma Gandhi'
},{
  quote: 'If you’re going through hell, keep going.',  
  source: 'Winston Churchill'
},{
  quote: 'You have enemies? Good. That means you’ve stood up for something, sometime in your life.',
  source: 'Winston churchill'
},{
  quote: 'Hmmmmm',
  source: 'Geralt of Rivia',
  tags: ['games', 'humor']
},{
  quote: 'It\'s not a bug. It is a feature',
  source: 'Annoyed developer',
  citation: 'Every project with bugs',
  tags: ['humor']
},{
  quote: '"You want weapons? We\'re in a library! Books! Best weapons in the world!"',
  source: '10th Doctor',
  citation: 'Doctor who Season 2 episode 2 - "Tooth and Claw"',
  year: 2007,
  tags: ['tv', 'pop']
},{
  quote: 'Never be cruel, \n Never be cowardly... \n Remember \n Hate is always Foolish \n Love is always Wise \n Always try to be nice \n But never fail to be kind \n Laugh hard... \n Run fast... \n Be kind.',
  source: '12th Doctor',
  citation: 'Doctor who - "Twice upon a time"',
  year: 2017,
  tags: ['tv', 'pop']
},{
  quote: 'We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.',
  source: 'J. K. Rowling',
  citation: 'Harry Potter and the Order of the Phoenix',
  tags: ['book', 'pop']
},{
  quote: 'Wait A Minute, Doc. Are You Telling Me You Built A Time Machine...Out Of A DeLorean?',
  source: 'Marty McFly',
  citation: 'Back to the future',
  tags: ['movie', 'pop']
},{
  quote: 'Hasta la vista, Baby',
  source: 'Terminator',
  citation: 'Terminator 2',
  tags: ['movie', 'pop']
},{
  quote: 'The Red Army and Navy and the whole Soviet people must fight for every inch of Soviet soil, fight to the last drop of blood for our towns and villages... onward, to victory!',
  source: 'Joseph Stalin',
  citation: 'World War II - Joseph Stalin Soviet leader',
  year: 1941
}

];


// -----------------------------
// FUNCTIONS
// -----------------------------

/**
 * functions to start and stop quote intervals
 * source : robertpm
 * source example : https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_setinterval
 */
function startPrintQuoteInterval(){
  myTimer = setInterval(printQuote, 30000);
}

function stopPrintQuoteInterval(){
  if(myTimer)
    myTimer = clearInterval(myTimer);
}


/***
 * `getRandomQuote` function
***/
/**
 * Function that will return a random number between 1 and the length of my quotes array
 */
function getRandomQuote(){
  var index = Math.floor(Math.random() * quotes.length );
  console.log(index);
  return quotes[index];
}


/***
 * `printQuote` function
 * Main function that will print a quote into my web site
***/
function printQuote(){

  //set intervals
  stopPrintQuoteInterval();
  startPrintQuoteInterval();
  
  // grab a randomQuote from quotes
  var randomQuote = getRandomQuote();

  //build my quote inner HTML
  var quoteHTML = '';
  quoteHTML += '<p class="quote"> ' + randomQuote["quote"] + ' </p>';
  quoteHTML += '<p class="source"> ' + randomQuote["source"];
  
  //if quote has citation or year 
  if(randomQuote["citation"])
    quoteHTML += '<span class="citation"> ' + randomQuote["citation"] + ' </span>';
  if(randomQuote["year"])
    quoteHTML += '<span class="year"> ' + randomQuote["year"] + ' </span>';
  quoteHTML += '</p>';

  //if quote has tags
  if(randomQuote["tags"]){
    quoteHTML += '<p class="tags"><i>';
    for(var i = 0; i < randomQuote["tags"].length; i++){
      if(i === 0)
        quoteHTML += randomQuote["tags"][i];
      else 
        quoteHTML += ', ' + randomQuote["tags"][i];
    }
    quoteHTML += '</i></p>';
  }
  

  //set quoteHTML right into the div element
  document.getElementById("quote-box").innerHTML = quoteHTML;

  //change background color
  changeBackgroundColor();
}

/**
 * returns a random number between 0 and 255 
 */
function randomNumberRGB(){
  return Math.floor(Math.random()*256);
}

/**
 * Function that will change backgroun color for each call
 */
function changeBackgroundColor(){
  //set my rgb values
  var red = randomNumberRGB();
  var green = randomNumberRGB();
  var blue = randomNumberRGB();

  /**
   * grab my body element, source : https://developer.mozilla.org/en-US/docs/Web/API/Document/body
   * set background color, source : https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
   */
  document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);