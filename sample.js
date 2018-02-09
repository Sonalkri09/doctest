var fs = require('fs');
var file = 'doc.txt';

fs.readFile(file, 'utf8', function (err, data) {

  if (err) throw err;


  var wordsArray = splitByWords(data);

  sw = require('stopword')
var taAr=sw.removeStopwords(wordsArray)
console.log(taAr)

var wrdc = wordsArray.length;
console.log(wrdc);

var tatAr = spellcheck (wordsArray)

console.log("Success!!")
  });

function splitByWords (text) {
  // split string by spaces (including spaces, tabs, and newlines)
  var wordsArray = text.split(/\s+/);
  return wordsArray;
  

}

function spellcheck (wordsArray){
    const spell = require('spell-checker-js')
    spell.load('en')
    var i,mis=0;
    for(i=0;i<wordsArray.length;i++)
    {
        var check = spell.check(wordsArray[i])
        if (check != false) {
            console.log(wordsArray[i]);
            mis++;
        }
        
    }
    console.log(mis)
    
    return 0;
}