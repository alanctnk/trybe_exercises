const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizei reduce(), um array function que percorre cada elemento da lista para retornar um único valor.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const total_soma = numbers.reduce((total_soma, i) => total_soma += i)
console.log(total_soma)