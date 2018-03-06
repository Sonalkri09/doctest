var fs = require('fs');



var natural = require('natural');
//reading standard file 
var file = 'venus1.txt';
var stddata = fs.readFileSync(file, 'utf8');

//reading target file
var file1 = 'venus.txt';
var targetdata = fs.readFileSync(file1, 'utf8');

//reading dictionary
var dict = 'words.txt';
var dictdata = fs.readFileSync(dict, 'utf8');

//tokenizing dictionary
var tokenizer = new natural.WordTokenizer();
var dictArr = tokenizer.tokenize(dictdata);
console.log(dictArr);

//tokenizing standard file
var stdArr = tokenizer.tokenize(stddata);
console.log(stdArr);

//tokenizing target file
var targetArr = tokenizer.tokenize(targetdata);
console.log(targetArr);

//counting number of words of standard file
stdWord=(tokenizer.tokenize(stddata)).length;
console.log(stdWord);

//counting number of words of target file
targetWord=(tokenizer.tokenize(targetdata)).length;
console.log(targetWord);


//spelling check
var mistakesArray= new Array();
var spellcheck=new natural.Spellcheck(dictArr);
var mistakes=0;
for (var i = targetArr.length - 1; i >= 0; i--) {
	if(!spellcheck.isCorrect(targetArr[i]))
	{
		mistakes++;
		mistakesArray.push(targetArr[i]);
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

var sen=tagger.tag(tokenizer.tokenize(targetdata));

var count=0;
for(i=0;i<targetWord;i++){
if(sen[i][1]=='NN'||sen[i][1]=='NNP'||sen[i][1]=='NNPS'||sen[i][1]=='NNS')
  count++;    
}
nounsCount=count;

 //counting verbs
var count=0;
for(i=0;i<targetWord;i++){
if(sen[i][1]=='VB'||sen[i][1]=='VBD'||sen[i][1]=='VBG'||sen[i][1]=='VBP'||sen[i][1]=='VBN'||sen[i][1]=='VBZ')
  count++;    
}
verbCount=count;

//counting adjectives
var count=0;
for(i=0;i<targetWord;i++){
if(sen[i][1]=='JJ'||sen[i][1]=='JJR'||sen[i][1]=='JJS')
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
		Wordcount:{Standard: stdWord,Target: targetWord},
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