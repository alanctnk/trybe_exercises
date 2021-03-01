// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let arr = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function countString(arr) {
	let strLength = 0
	let nameIndex = 0

	for (let index = 0; index < arr.length; index += 1){
		if (arr[index].length > strLength){
			strLength = arr[index].length
			nameIndex = index
		} 
	}
	return arr[nameIndex]
}

console.log(countString(arr))