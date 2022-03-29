let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x=> Number(x));

let max = input[0];
let number = 0;

for (let i = 1; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    number = i;
  }
}

console.log(max);
console.log(number + 1);