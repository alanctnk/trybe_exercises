let n = 5; // you can take input from prompt or change the value
let string = "";

for (let i = 1; i <= n; i += 1) {
  
    // printing spaces
  for (let j = 0; j < n - i; j += 1) {
    string += " ";
  }
  
  // printing star
  for (let k = 0; k < i; k += 1) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


// Fonte >> https://www.tutorialstonight.com/js/javascript-star-pattern.php