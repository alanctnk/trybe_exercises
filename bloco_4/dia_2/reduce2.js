let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizei reduce(), um array function que percorre cada elemento da lista para retornar um único valor.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const media = numbers.reduce((soma, i) => soma += i)/numbers.length
console.log(media)