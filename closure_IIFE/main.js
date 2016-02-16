// standard example of closure 
// Results are unexpected if you don't understand that the function 
// pushed to the array still has access to the i variable even after the 
// buildFunctions function has been removed from the execution stack
function buildFunctions() {
	var arr = [];

	for (var i = 0; i < 3; i++) {
		arr.push(
			function() {
				console.log(i);
			}
		)
	}
	return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

// one way of keeping the value of i 
// by setting j to the value of i at the time the inner function is pushed to the array
// using an imediately invoked function
function buildFunctions2() {
	var arr = [];

	for (var i = 0; i < 3; i++) {
		arr.push(
			(function(j) {
				return function() {
					console.log(j);
				}
			}(i))
		)
	}
	return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

//another use of closure with the outer function being called twice creating two language variables that the 
//inner returned function has access to only the one that was created when the function was created
function makeGreeting(language) {
	return function(firstname, lastname) {
		if (language === 'en') {
			console.log('Hello ' + firstname + ' ' + lastname);
		}
		if (language === 'es') {
			console.log('Hola ' + firstname + ' ' + lastname);
		}
	}
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

//when this function is executed it has closure over the language variable = 'en'
//that was created in the makeGreeting execution context 
greetEnglish('John', 'Doe');
// and in turn this one has closure over the language variable = 'es'
greetSpanish('John', 'Doe');

