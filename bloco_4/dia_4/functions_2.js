// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let numbers = [2, 3, 6, 7, 10, 1]
let numberID = 0
function takeMaxNumberID(arr) {
	for (let index = 0; index < numbers.length; index += 1) {

		if (arr[index+1]){

			if (arr[index] >= arr[index+1]){
				numberID = index
			} else {
				numberID = index+1
			}
		}
	}
	console.log(numberID)
}

takeMaxNumberID(numbers)