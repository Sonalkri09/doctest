function getData() {
	var xmlhttp = new XMLHttpRequest();
	var url = "http://localhost:3000/db";
	xmlhttp.open("GET",url,true);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myArr = JSON.parse(this.responseText);
			var dataObj = JSON.stringify(myArr);
			document.getElementById('stdwc').innerHTML = "Words count:"+myArr.Wordcount.Standard;
			document.getElementById('wc').innerHTML = "Words count:"+myArr.Wordcount.Target;
			document.getElementById('mc').innerHTML = "Number of mistakes:"+myArr.Spellcheck.NumberofMistakes;
			document.getElementById('nc').innerHTML = "Nouns Count:"+myArr.PartsofSpeechCounts.Nouns;
			document.getElementById('vc').innerHTML = "Verbs Count:"+myArr.PartsofSpeechCounts.Verbs;
			document.getElementById('ac').innerHTML = "Adjectives Count:"+myArr.PartsofSpeechCounts.Adjectives;
			document.getElementById('similar').innerHTML = "Documemts Similarity:"+myArr.DocumentsSimilarity.Percentage;

		}
	};
}




