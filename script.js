const WORDS = [
  "be",
  "have",
  "do",
  "say",
  "go",
  "get",
  "make",
  "know",
  "think",
  "take",
  "see",
  "come",
  "want",
  "use",
  "find",
  "give",
  "tell",
  "work",
  "call",
  "try",
  "ask",
  "need",
  "feel",
  "become",
  "leave",
  "put",
  "mean",
  "keep",
  "let",
  "begin",
  "seem",
  "help",
  "show",
  "hear",
  "play",
  "run",
  "move",
  "live",
  "believe",
  "bring",
  "happen",
  "write",
  "sit",
  "stand",
  "lose",
  "pay",
  "meet",
  "include",
  "continue",
  "set",
  "learn",
  "change",
  "lead",
  "understand",
  "watch",
  "follow",
  "stop",
  "create",
  "speak",
  "read",
  "spend",
  "grow",
  "open",
  "walk",
  "win",
  "teach",
  "offer",
  "remember",
  "consider",
  "appear",
  "buy",
  "serve",
  "die",
  "send",
  "build",
  "stay",
  "fall",
  "cut",
  "reach",
  "kill",
  "raise",
  "pass",
  "sell",
  "decide",
  "return",
  "explain",
  "hope",
  "develop",
  "carry",
  "break",
  "receive",
  "agree",
  "support",
  "hit",
  "produce",
  "eat",
  "cover",
  "catch",
  "draw",
  "choose",
];

let currentWord;
let count = 0;


window.onload = () => {
  changeWord();

  $( "#changeWord" ).click(function() {
    changeWord();
  });
};

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
