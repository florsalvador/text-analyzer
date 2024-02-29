import analyzer from './analyzer.js';

const button = document.getElementById("reset-button");
const textArea = document.querySelector("textarea");
const caracteres = document.querySelector("li");
const caracteresSinSignos = document.querySelector("li:nth-of-type(2)");
const palabras = document.querySelector("li:nth-of-type(3)");
const longitudMedia = document.querySelector("li:nth-of-type(4)");
const numeros = document.querySelector("li:nth-of-type(5)");
const sumaNumeros = document.querySelector("li:nth-of-type(6)");

textArea.addEventListener("input", function() {
  caracteres.innerHTML = "Caracteres: " + analyzer.getCharacterCount(textArea.value);
  caracteresSinSignos.innerHTML = "Caracteres sin espacios: " + analyzer.getCharacterCountExcludingSpaces(textArea.value);
  palabras.innerHTML = "Palabras: " + analyzer.getWordCount(textArea.value);
  longitudMedia.innerHTML = "Longitud media: " + analyzer.getAverageWordLength(textArea.value);
  numeros.innerHTML = "Números: " + analyzer.getNumberCount(textArea.value);
  sumaNumeros.innerHTML = "Suma de números: " + analyzer.getNumberSum(textArea.value);
})

button.addEventListener("click", function() {
  textArea.value = "";
  caracteres.innerHTML = "Caracteres: 0";
  caracteresSinSignos.innerHTML = "Caracteres sin espacios: 0";
  palabras.innerHTML = "Palabras: 0";
  longitudMedia.innerHTML = "Longitud media: 0";
  numeros.innerHTML = "Números: 0";
  sumaNumeros.innerHTML = "Suma de números: 0";
})