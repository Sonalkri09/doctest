var readline=require('readline');
var fs = require('fs');
var file = 'nv.txt';
var file1 = 'nv1.txt';
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

let obj=["b","a","c"];
let doc = {};
obj.map(state =>{
	doc[state]={
		wc: 10,
		mis: 11,
	}
});
	


let json = JSON.stringify(doc,null,2);


fs.writeFile('data.json',json,'utf8',(err)=> {})