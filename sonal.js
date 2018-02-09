var txt;
var counts={};
function preload(){
	txt=loadStrings('doc.txt');

}

function setup(){
	var allwords=txt.join("\n");
	var tokens=allwords.split(/\W+/);
	console.log(tokens);
	for (var i =0; i < tokens.length; i++)
	{
		var word = tokens[i];
		
			if(counts[word]===undefined){
				counts[word]=1;
			}
			else{
				counts[word]= counts[word]+1;
			}
		noCanvas();
		
	};