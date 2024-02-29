const analyzer = {
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const textArray = text.trim().split(" ");
    const sinEspaciosString = textArray.join("");
    const letrasYNumeros = "abcdefghijklmnñopqrstuvwxyz1234567890";
    const sinSignosArray = [];
    for (let i = 0; i < sinEspaciosString.length; i++) {
      if (letrasYNumeros.includes(sinEspaciosString[i].toLowerCase()) === true) {
        sinSignosArray.push(sinEspaciosString[i]);
      }
    }
    return sinSignosArray.length;
  },
  getWordCount: (text) => {
    const wordCount = text.trim().split(" ");
    if (text === "") {
      return 0;
    } else return wordCount.length;
  },
  getNumberCount: (text) => {
    const words = text.split(" ");
    const wordsNoPeriods = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i][words[i].length - 1] === "." || words[i][words[i].length - 1] === ",") {
        wordsNoPeriods.push(words[i].slice(0, -1));
      }
      else wordsNoPeriods.push(words[i]);
    }
    const onlyNumbers = wordsNoPeriods.filter(x => {
      return x === "0" || Number(x);
    });
    return onlyNumbers.length;
  },
  getNumberSum: (text) => {
    const words = text.split(" ");
    const wordsNoPeriods = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i][words[i].length - 1] === "." || words[i][words[i].length - 1] === ",") {
        wordsNoPeriods.push(words[i].slice(0, -1));
      }
      else wordsNoPeriods.push(words[i]);
    }
    const onlyNumbers = wordsNoPeriods.filter(Number);
    const onlyNumbersInt = onlyNumbers.map((x) => { return Number(x) });
    const suma = onlyNumbersInt.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual;
    }, 0);
    return suma;
  },
  getAverageWordLength: (text) => {
    const words = text.trim().split(" ");
    const wordsLength = [];
    for (let i = 0; i < words.length; i++) {
      wordsLength.push(words[i].length);
    }
    const average = wordsLength.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual;
    }, 0) / wordsLength.length;
    const averageRounded = parseFloat(average.toFixed(2));
    return averageRounded;
  },
};
export default analyzer;