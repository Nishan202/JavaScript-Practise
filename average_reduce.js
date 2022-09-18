let arr = [5,3,5,7];

const average = arr.reduce((accumulator, currentValue, index, array) =>{

	let total  = accumulator += currentValue;

	if (index === array.length-1) {
		return total/array.length;
	}

	return total;
})

console.log(average);