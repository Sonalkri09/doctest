var fs = require('fs');



var natural = require('natural');
//reading file 
var file = 'venus.txt';
var stddata = fs.readFileSync(file, 'utf8');

//reading another file
var file1 = 'venus1.txt';
var targetdata = fs.readFileSync(file1, 'utf8');

//reading dictionary
var dict = 'words.txt';
var dictdata = fs.readFileSync(dict, 'utf8');

//tokenizing dictionary
var tokenizer = new natural.WordTokenizer();
var dictArr = tokenizer.tokenize(dictdata);
console.log(dictArr);




//breaking standard file into array of tokens
var tokenizer = new natural.WordTokenizer();
var stdArr = tokenizer.tokenize(stddata);
console.log(stdArr);

//counting number of words
stdWord=(tokenizer.tokenize(stddata)).length;
console.log(stdWord);


//spelling check
var mistakesArray= new Array();
var spellcheck=new natural.Spellcheck(dictArr);
var mistakes=0;
for (var i = stdArr.length - 1; i >= 0; i--) {
	if(!spellcheck.isCorrect(stdArr[i]))
	{
		mistakes++;
		mistakesArray.push(stdArr[i]);
	}
}
console.log("number of mistakes are:"+mistakes);
console.log(mistakesArray);


//counting nouns
var path = require("path");
 
var base_folder = path.join(path.dirname(require.resolve("natural")), "brill_pos_tagger");
var rulesFilename = base_folder + "/data/English/tr_from_posjs.txt";
var lexiconFilename = base_folder + "/data/English/lexicon_from_posjs.json";
var defaultCategory = 'N';
 
var lexicon = new natural.Lexicon(lexiconFilename, defaultCategory);
var rules = new natural.RuleSet(rulesFilename);
var tagger = new natural.BrillPOSTagger(lexicon, rules);

var json1=tagger.tag(tokenizer.tokenize(stddata));

var count=0;
for(i=0;i<stdWord;i++){
if(json1[i][1]=='NN'||json1[i][1]=='NNP'||json1[i][1]=='NNPS'||json1[i][1]=='NNS')
  count++;    
}
nounsCount=count;
//console.log(nounsCount);

 //counting verbs
var count=0;
for(i=0;i<stdWord;i++){
if(json1[i][1]=='VB'||json1[i][1]=='VBD'||json1[i][1]=='VBG'||json1[i][1]=='VBP'||json1[i][1]=='VBN'||json1[i][1]=='VBZ')
  count++;    
}
verbCount=count;

//counting adjectives
var count=0;
for(i=0;i<stdWord;i++){
if(json1[i][1]=='JJ'||json1[i][1]=='JJR'||json1[i][1]=='JJS')
  count++;    
}
adjCount=count;

console.log(nounsCount,verbCount,adjCount);

//similarity
var stringSimilarity = require('string-similarity');
var similarity = 0;
similarity = (stringSimilarity.compareTwoStrings(stddata, targetdata)) * 100;
console.log(similarity);




var output = {
		Wordcount:{Standard: stdWord},
		Spellcheck:{NumberofMistakes: mistakes,
					Mistakes: mistakesArray },
		DocumentsSimilarity: {Percentage: similarity },
		PartsofSpeechCounts:{Nouns:nounsCount ,
								Verbs:verbCount ,
							     Adjectives: adjCount }
							 }


let json = JSON.stringify(output,null,2);
	fs.writeFile('output.json',json,'utf8',(err) =>{
		if(err){
			console.log("error");
		}console.log("success");
	})		