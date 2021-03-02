// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.


function isPalindrome(word){
  let arr = word.split('')
  invertArr = []
  for (let index = 0; index < arr.length; index += 1){
    invertArr.unshift(arr[index])
  }
  if (arr.join('') === invertArr.join('')) {
    console.log('True')
  } else {
    console.log('False')
  }
}

isPalindrome("arara")