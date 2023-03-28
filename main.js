//variables
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const cookieOpen = document.querySelector('#cookieOpen'); 
const anotherCookie = document.querySelector('#anotherCookie');
let fortuneRandomPhrase = document.querySelector('.fortuneRandomPhrase p');


//logic
let fortunePhrases = [
  "Delight the world with compassion, kindness and grace",
  "The early bird gets the worm, but the second mouse gets the cheese.",
  "Some days you are pigeon, some days you are statue. Today, bring umbrella.",
  "The fortune you seek is in another cookie.",
  "Be on the alert to recognize your prime at whatever time of your life it may occur.",
  "Your reality check about to bounce.",
  "Tension is who you think you should be. Relaxation is who you are.",
  "When blind leading the blind……..get out of the way.",
  "Everyone seems normal until you get to know them.",
  "Only difference between rut and a grave is depth.",
];


//events
cookieOpen.addEventListener('click', phraseAppear)
anotherCookie.addEventListener('click', anotherCookieClick);
document.addEventListener('keydown', enterButton)

//functions
function phraseAppear(event) {
  event.preventDefault(event);

  let randomPhrases = Math.floor(Math.random() * fortunePhrases.length)
  fortuneRandomPhrase.innerHTML = fortunePhrases[randomPhrases];

  toggleClick();
}

function anotherCookieClick(event) {
  event.preventDefault(event);
  toggleClick();
}

function toggleClick() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

function enterButton(e) {
    if(e.key == 'Enter' && screen2.classList.contains('hide')) {
      phraseAppear(e);
    }
  }