var word = 'really';

console.log(word);

function reverse(word) {
	return (word === '') ? '' : reverse(word.substr(1)) + word[0];
}
console.log(reverse(word));

function reverse(word) {
	if (word.length > 1) {
		return reverse(word.substr(1)) + word[0];
	}
	return word
}
console.log(reverse(word));

