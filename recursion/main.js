var word = 'really';

console.log(word);

// function reverse(word) {
// 	var newWord = ''; 
// 	for (var i = word.length - 1; i >= 0; i--) {
// 		newWord += word[i];
// 	}
// 	return newWord;
// }
// console.log(reverse(word));

function reverse(word) {
	return (word === '') ? '' : reverse(word.substr(1)) + word[0];
}
console.log(reverse(word));

// function reverse(word) {
// 	if (word.length > 1) {
// 		return reverse(word.substr(1)) + word[0];
// 	}
// 	else {
// 		console.log('return')
// 		return word
// 	}
// }
// console.log(reverse('old'));