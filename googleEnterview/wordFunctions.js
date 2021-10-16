function mapString(string){
	let map = [];
	let index = 0;

	for( l of string){
		if(map[l]){				
			map[l].push(index);	
		}
		else{
			map[l] = [index];	
		}
		index++;
	}
	return map;	
}

function isSubSequence(word, map){
	let min = 0;
	for(l of word){
		if (map[l]){
			min = findNextIndex(map[l],min);
			if (min === false ){
				return false;
			}			 
		}
		else{
			return false;
		}
	}
	return true;
}

function findNextIndex(indexes, min){
	for(i of indexes){
		if (i >= min){
			return i + 1;
		}
	}
	return false;
}

function longestWord(words){
	let longest = "";
	for(w of words){
		if (w.length > longest.length){
			longest = w;
		}
	}
	return longest;
}

function longestMatch(){
	let dictionary = ["avast", "art", "vat", "javas", "vascular", "tsavar"];
	let stringSequence = "javascript";
	let map = mapString(stringSequence);
	let words = [];
	for ( word of dictionary){
		if (isSubSequence(word,map)){
			words.push(word);
		}
	}

	console.log(`Dictionary: avast, art, vat, javas, vascular, tsavar`);

	console.log(`word sequence: ${stringSequence}`);

	console.log("The subsequences found:");
	
	for (w of words){
		console.log(w);
	}

	let longest = longestWord(words);

	let msg = `The longest word is ${longest} `;

	alert(msg);

	console.log(msg);	
}