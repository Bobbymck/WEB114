// Bobby McKinney 7/11/26
let counter = 0;
let totalGas = 0;

let name = prompt('Enter your name.');
if (name === null) {
	alert('Cancelled name prompt.');
} else if (name == "") {
		alert('No name detected.');
} else {
	let endGas = calcGasAvg();
	if (endGas === null) {
		alert("You cancelled entering gas totals.");
	}
}

if (counter === 0) {
	alert('No gas totals were entered.');
	alert(`${name}'s average weekly gas total will be `);
} else if (counter === 1) {
		alert(`${name}'s gas total will be $${totalGas.toFixed(2)}`);
		alert(`${name} entered ${counter} gas total`)
} else  {
		average = (totalGas / counter);
		alert(`${name}'s average weekly gas total will be $${average.toFixed(2)}`);
		alert(`${name} entered ${counter} gas totals`)
}

//alert('Gas: ' + totalGas);
//alert('Count: ' + counter);
function calcGasAvg() {
	let input;
	let weeklyGas;
	input = prompt("Enter your first week's gas total. Enter -1 when you are done.");
	if (input === null) {
		return null;
	} else if (isNaN(input)) {
		alert("Enter a valid number.")
		return
	} else {
		weeklyGas = input;
		counter++;
	}
	while (weeklyGas !== "-1") {
		if (weeklyGas == null) {
			counter--;
			return null;
		} else if (isNaN(weeklyGas)) {
			alert("Please enter a valid number");
			weeklyGas = prompt("Enter your next week's gas total. Enter -1 when you are done.");
		} else {
			totalGas += Number(weeklyGas);
			counter++;
			weeklyGas = prompt("Enter your next week's gas total. Enter -1 when you are done.");
			if (weeklyGas == -1) {
				counter--;
			}
		}
	}
}
