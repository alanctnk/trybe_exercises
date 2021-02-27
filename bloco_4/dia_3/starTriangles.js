let n = 5

if (n > 1) {
    let star = ""
    for (let i = 0; i < n; i += 1) {
        star += "*"
        console.log(star)
    }
} else {
    console.log("Valor inválido!")
}