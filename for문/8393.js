const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
let inputNumber = Number(input)
let answer = 0;
for (let i = 1; i <= inputNumber; i++) {
  answer += i
}
console.log(answer);

// //readline 풀이

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on('line', function (line) {
//   const n = Number(line);
//   let answer = 0;

//   for (let i = 1; i <= n; i++) {
//     answer += i;
//   }

//   console.log(answer);

//   rl.close();
// }).on('close', function () {
//   process.exit();
// });