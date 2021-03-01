function add(num1, num2) {
  result = ""

	while (num1 || num2){
		result = `${num1%10 + num2%10}${result}`
		num1 = Math.floor(num1/10)
		num2 = Math.floor(num2/10)
	}
  return parseInt(result || 0);
}

console.log(add(16,18))

// Método refatorado em javascript. Original: https://www.codewars.com/kata/reviews/5f4602db69f1cd00012e87a6/groups/5f47787d15fbdc0001ee04d4