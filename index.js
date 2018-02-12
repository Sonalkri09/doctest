var fs = require('fs');
var file = 'doc.txt';
var file1 = 'doc1.txt'
fs.readFile(file1, 'utf8', function (err, data) {

  if (err) throw err;


  var wordsArray = splitByWords(data);
  var wd = wordsArray.length;
  console.log(wd);

  sw = require('stopword')
var taAr=sw.removeStopwords(wordsArray)
console.log(taAr)

var wrdc = taAr.length;
console.log(wrdc);
spellcheck (taAr)

console.log("Success!!")


poss1(taAr);

  });


fs.readFile(file, 'utf8', function (err, data) {

  if (err) throw err;


  var wordsArray = splitByWords(data);
  var wd = wordsArray.length;
  console.log(wd);

  sw = require('stopword')
var taAr=sw.removeStopwords(wordsArray)
console.log(taAr)

var wrdc = taAr.length;
console.log(wrdc);
spellcheck (taAr)

console.log("Success!!")


poss1(taAr);

  });

function splitByWords (text) {
  // split string by spaces (including spaces, tabs, and newlines)
  var wordsArray = text.split(/\s+/);
  return wordsArray;
  

}

function spellcheck (taAr){
    const spell = require('spell-checker-js')
    spell.load('en')
    var i,mis=0;
    for(i=0;i<taAr.length;i++)
    {
        var check = spell.check(taAr[i])
        if (check != false) {
            console.log(taAr[i]);
            mis++;
        }
        
    }
    console.log(mis)
    
    return 0;
}

function poss1 (taAr){
var WordPOS = require('wordpos'),
    wordpos = new WordPOS();
    console.log(taAr);
    var str= taAr.toString();
    wordpos.getPOS(str, console.log)

}
// Load dictionary

 
// Checking text

/*let output={percentage :90%};

let json = json.stringify(output);

fs.writeFile('data.json',json,'utf8',(err)=> {
    if (err) {
        console.log("Error");
        return;
    }
    console.log("Success");

    });
*/