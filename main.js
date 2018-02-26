var readline=require('readline');
var fs = require('fs');
var file = 'doc.txt';
var file1 = 'doc1.txt';

var data1 = fs.readFileSync(file1, 'utf8');

wordsArray1 = splitByWords(data1);

var wd1 = wordsArray1.length;
console.log(wd1);
var data = fs.readFileSync(file, 'utf8');
wordsArray = splitByWords(data);

var wd = wordsArray.length;
console.log(wd);
var dec=0;
wcdec(wrdc,wrdc1);
if(dec == 1)
console.log("Document accepted");
else console.log("Document rejected");

sw1 = require('stopword')
var taAr1=sw1.removeStopwords(wordsArray1)
console.log(taAr1)

var wrdc1 = taAr1.length;
console.log(wrdc1);
spellcheck (taAr1)

console.log("Success!!")


poss1(taAr1);

sw = require('stopword')
var taAr=sw.removeStopwords(wordsArray)
console.log(taAr)

var wrdc = taAr.length;
console.log(wrdc);
spellcheck (taAr)

console.log("Success!!")


poss1(taAr);


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



function wcdec(wrdc,wrdc1)
{
	if((wrdc1-wrdc)>1000)
	dec=0;
	else dec=1;	
}

var WordPOS = require('wordpos'),
    wordpos = new WordPOS();
var standard_token_array = new Array(4);
var mydocument_token_array = new Array(4); 
function x(document) {
	return new Promise((resolve, reject) => {
		wordpos.getNouns(document, function (result) {
			standard_token_array[0] = result.length;
		});

		wordpos.getAdjectives(document, function (result) {
			standard_token_array[1] = result.length;
		});

		wordpos.getVerbs(document, function (result) {
			standard_token_array[2] = result.length;
		});

		wordpos.getAdverbs(document, function (result) {
			standard_token_array[3] = result.length;
			resolve("completed");
		});

		var n = 0;
		if (n == 1) {
			reject("failed");

		}
	});
}



x(data1).then((message) => {
		function y(document) {
			return new Promise((resolve, reject) => {
				wordpos.getNouns(document, function (result) {
					mydocument_token_array[0] = result.length;
				});

				wordpos.getAdjectives(document, function (result) {
					mydocument_token_array[1] = result.length;
				});

				wordpos.getVerbs(document, function (result) {
					mydocument_token_array[2] = result.length;
				});

				wordpos.getAdverbs(document, function (result) {
					mydocument_token_array[3] = result.length;
					resolve("completed");
				});

				var n = 0;
				if (n == 1) {
					reject("failed");

				}
			});
		}



		y(data).then((message) => {
				//json_creation();
			})
			.catch((message) => {

				console.log("Failed");
			});


	})
	.catch((message) => {

		console.log("Failed");
	});





 
// Checking text





/*let fls =['base file','ind file'];

let oup = {};

fls.map(state=> {
	oup[state]={
		word_count :  ,
		spell_mistakes :  ,

	}
});
let json = json.stringify(oup,null,2);

fs.writeFile('data.json',json,'utf8',(err)=> {
	if (err) {
		console.log("Error");
		return;
	}
	console.log("Success");

	});
/*