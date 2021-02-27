let n = 5

if (n > 1) {
    let star = "*"
    let line = ""
    
    // O programa irá percorrer "n" e incrementas "*" em cada iteração
    for (let index = 0; index < n; index += 1) {
        line += star;
        let nStarsLine = "";

        // Quando atingir a line.length atingir quantidade "n" uma nova var irá receber essa string
        switch(line.length) {
            case n:
                nStarsLine = line
        }

        // Ainda na iteração, um novo for vai percorrer essa nova string(NstarsLine) e pra cada iteração, será impressa ela mesma configurando o seu quadrado.
        for(let nStarIndex = 0; nStarIndex < nStarsLine.length; nStarIndex +=1){
            console.log(nStarsLine)
        }
    }

} else {
    console.log("Valor inválido!")
}