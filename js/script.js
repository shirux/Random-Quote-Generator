/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
/**
 * My array of different quotes objects, it contains quote and source, and may contain year and citation
 */
var quotes= [{
  quote: 'Be the change that you want to see in the world',
  source: 'Mahatma Gandhi'
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
  source: 'Geralt of Rivia'
},{
  quote: 'Fuck',
  source: 'Geralt of Rivia'
},{
  quote: 'It\'s not a bug. It is a feature',
  source: 'Annoyed developer',
  citation: 'Every project with bugs'
},{
  quote: '"You want weapons? We\'re in a library! Books! Best weapons in the world!"',
  source: '10th Doctor',
  citation: 'Doctor who Season 2 episode 2 - "Tooth and Claw"',
  year: 2007
},{
  quote: 'Never be cruel, \n Never be cowardly... \n Remember \n Hate is always Foolish \n Love is always Wise \n Always try to be nice \n But never fail to be kind \n Laugh hard... \n Run fast... \n Be kind.',
  source: '12th Doctor',
  citation: 'Doctor who - "Twice upon a time"',
  year: 2017
},{
  quote: 'We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.',
  source: 'J. K. Rowling',
  citation: 'Harry Potter and the Order of the Phoenix'
},{
  quote: 'Wait A Minute, Doc. Are You Telling Me You Built A Time Machine...Out Of A DeLorean?',
  source: 'Marty McFly',
  citation: 'Back to the future'
},,{
  quote: 'Hasta la vista, Baby',
  source: 'Terminator',
  citation: 'Terminator 2'
},{
  quote: 'The Red Army and Navy and the whole Soviet people must fight for every inch of Soviet soil, fight to the last drop of blood for our towns and villages... onward, to victory!',
  source: 'Joseph Stalin',
  citation: 'World War II - Joseph Stalin Soviet leader',
  year: 1941
}

];



/***
 * `getRandomQuote` function
***/
/**
 * Function that will return a random number between 1 and the length of my quotes array
 */
function getRandomQuote(){
  var index = Math.floor(Math.random() * quotes.length );
  return quotes[index];
}


/***
 * `printQuote` function
***/




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);