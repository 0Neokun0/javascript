
function * nextNatural()
{
	var naturalNumber = 1;

	// Infinite Generation
	while (true) {
		yield naturalNumber++;
	}
}

// Calling the Generate Function
var gen = nextNatural();

// Loop to print the first
// 10 Generated number
for (var i = 0; i < 10; i++) {

	// Generating Next Number
	document.write(gen.next().value);

	// New Line
	document.write("<br>");
}
