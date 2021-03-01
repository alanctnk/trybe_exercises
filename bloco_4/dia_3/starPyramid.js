let n = 5


if (n > 1) {

    // Variáveis que concatenadas irão formar cada linha da piramide 
    let star = "*"
    let whiteSpace = " "
    let amount = 0
    
    // O for irá percorrer a cada dois elementos
    for (let i = 1; i < n+1; i += 2) {

        // Em amount está a quantidade de espaços vazios de cada lado do "*". Que é n - o indice que representa a quantidade "*".
        let line = ""
        amount = (n-i) / 2
        line = whiteSpace.repeat(amount) + star.repeat(i) + whiteSpace.repeat(amount)
        console.log(line)
    }
} else {
    console.log("Valor inválido!")
}