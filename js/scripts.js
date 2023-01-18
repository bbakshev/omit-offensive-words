// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function omitOffensiveWords() {
  let text = "this color is red zoinks so great";
  const result = text.replace('zoinks','');
  return result;
}

function omitOffensive() {
  const input = ["select from table order by asc limit 10 no binding"]
  const wordsToExclude = new Set(['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop']);
  const words = input[0].split(' ').filter(word => !wordsToExclude.has(word));
  words.join(" ")
  return words 
}