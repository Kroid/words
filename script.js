'use strict';

var WORDS = [
  "upon",
  "such",
  "much",
  "those",
  "came",
  "come",
  "through",
  "being",
  "might",
  "def",
  "went",
  "thought",
  "still",
  "though",
  "against",
  "things",
  "took",
  "thing",
  "whom",
  "seemed",
  "almost",
  "thou",
  "quite",
  "brought",
  "whose",
  "rather",
  "thy",
  "certain",
  "feet",
  "thus",
  "perhaps",
  "along",
  "either",
  "lay",
  "manner",
  "become",
  "forth",
  "sight",
  "ought",
  "further",
  "purpose",
  "south",
  "toward",
  "north",
  "below",
  "laid",
  "west",
  "hath",
  "especially",
  "fellow",
  "faith",
  "remained",
  "duty",
  "particular",
  "according",
  "thoughts",
  "carry",
  "exclaimed",
  "influence",
  "struck",
  "occasion",
  "former",
  "youth",
  "merely",
  "remain",
  "society",
  "mere",
  "beside",
  "duke",
  "bound",
  "east",
  "bright",
  "considered",
  "observed",
  "scarcely",
  "hill",
  "considerable",
  "race",
  "bit",
  "attempt",
  "spring",
  "beneath",
  "century",
  "intended",
  "straight",
  "matters",
  "corner",
  "passage",
  "sake",
  "wise",
  "grave",
  "troops",
  "rise",
  "fortune",
  "shore",
  "degree",
  "pale",
  "conduct",
  "cases",
  "shot",
  "lead",
  "threw",
  "vain",
  "affairs",
];

var currentWord;
var count = 0;


$(document).ready(function() {
  $("#changeWord").click(function() {
    changeWord();
  });

  changeWord();
});

function changeWord() {
  currentWord = getRandomWord();
  count += 1;
  setCambridgeDictionaryLink();
  setWooordhuntLink();
  setLingvoliveLink();
  $('#currentWord').text(currentWord);
  $('#count').text(count);
}

function getRandomWord() {
  let word = WORDS[Math.floor(Math.random()*WORDS.length)];
  if (word == currentWord) return getRandomWord();
  return word;
}

function setCambridgeDictionaryLink() {
  let link = `https://dictionary.cambridge.org/dictionary/english/${currentWord}`;
  $('#cambridge').attr("href", link);
}

function setWooordhuntLink() {
  let link = `https://wooordhunt.ru/word/${currentWord}`;
  $('#wooordhunt').attr("href", link);
}


function setLingvoliveLink() {
  let link = `https://www.lingvolive.com/ru-ru/translate/en-ru/${currentWord}`;
  $('#lingvolive').attr("href", link);
}
