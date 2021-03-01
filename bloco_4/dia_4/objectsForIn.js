// Questão 1
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
console.log(`Bem-vinda, ${info.personagem} \n`)

// Questão 2
info['recorrente'] = 'sim'
console.log(info)
console.log('\n')

// Questão 3
for (i in info) {
  console.log(i)
}
console.log('\n')

// Questão 4
for (i in info) {
  console.log(info[i])
}