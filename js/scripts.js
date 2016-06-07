/*This file is for your custom js.  All yours*/
$(function () {
  var sentence = prompt("Enter a sentence please");
  // var sentenceArray = sentence.split("");
  // for (var i = 0; i <= sentenceArray.length; i++) {
  //   if (sentenceArray[i] === "a" || sentenceArray[i] === "e" || sentenceArray[i] === "i" || sentenceArray[i] === "o" || sentenceArray[i] === "u") {
  //     sentenceArray[i] = "-";
  //   }
  // }
  // var newSentence = sentenceArray.join('');
  var newSentence = sentence.replace(/[AEIOUaeiou]/ig, "-");
  alert(newSentence);
})
