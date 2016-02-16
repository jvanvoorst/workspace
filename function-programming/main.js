// functional programming examples
var arr1 = [1,2,3];

// function that will take an array and a function 
// the function is run against each item in the array returning a new function
function mapForEach(arr, fn) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr.push(
			fn(arr[i])
		)
	}
	return newArr;
}

// multiply each item by 2
var arr2 = mapForEach(arr1, function(item) {
	return item * 2;
});

// test if each item is greater than 2 returning and array of booleans 
var arr3 = mapForEach(arr1, function(item) {
	return item > 2;
});

// also checking if item is greater than limiter but creating the test function with the limiter preset
var checkPastLimitSimple = function(limiter) {
	return function(limiter, item) {
		return item > limiter;
	}.bind(this, limiter);
};

// using the above function with the limiter preset to 1
var arr4 = mapForEach(arr1, checkPastLimitSimple(1));

console.log(arr1);

console.log(arr2);

console.log(arr3);

console.log(arr4);
