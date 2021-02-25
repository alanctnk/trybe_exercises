// Este programa faz uma iteração no array numbers e multiplica o 1º elemento pelo 2º; o 2º pelo 3º ... O último elemento é mulpltiplicado por 2. O resultado é armazenado em new_numbers[]

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let new_numbers = []

for (let i = 0; i < numbers.length; i++) {
    if (i+1 <  numbers.length) {
        new_numbers.push(numbers[i] * numbers[i+1])
    } else {
        new_numbers.push(numbers[i] * 2)
    }
} 

console.log(new_numbers)