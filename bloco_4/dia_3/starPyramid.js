let n = 3; // you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 1; i <= n; i += 1) {

  // printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }

  // printing star
  for (let k = 0; k < i * 2 - 1; k += 1) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

// Fonte >> https://www.tutorialstonight.com/js/javascript-star-pattern.php