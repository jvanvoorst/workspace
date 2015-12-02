console.log('really');
function reverse(word) {
	var newWord = ''; 
	for (var i = word.length - 1; i >= 0; i--) {
		newWord += word[i];
	}
	return newWord;
	console.log(newWord);
}
console.log(reverse('really'));