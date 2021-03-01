
//          | I   | 1    |
//          | --- | ---- |
//          | V   | 5    |
//          | IV  | 4    |
//          | I   | 1    |
//          | IX  | 9    |
//          | X   | 10   |
//          | XL  | 40   |
//          | L   | 50   |
//          | XC  | 90   |
//          | C   | 100  |
//          | CD  | 400  |
//          | D   | 500  |
//          | CM  | 900  |
//          | M   | 1000 |

let dicRomans = {
    I: 1,
    V: 5,
    I: 1,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}



converteParaInt = function(s) {
    s = s.toUpperCase()
    let array = s.split("")
    let total = 0
    let current;
    let currentValue;
    let next;
    let nextValue;
    
    for (let index = 0; index < array.length; index += 1) {
        current = array[index];
        currentValue = dicRomans[current]

        next = array[index+1]
        nextValue = dicRomans[next]

        // Se o currentValue for menor que o seu próximo, temos que subtrair
        if (currentValue < nextValue) {
            total -= currentValue
        
        // Se não, adicionar normal
        } else {
            total += currentValue
        }
    }

    console.log(total)
}

converteParaInt("ccxiv")

// Fonte: https://javascript.plainenglish.io/algorithms-101-convert-roman-numerals-to-integers-in-javascript-d3aba86a43d4