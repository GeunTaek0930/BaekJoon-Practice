let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(' ');

  console.log(Number(numbers[0]) + Number(numbers[1]));
}

// //redline 이용한풀이

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const input = [];

// rl.on('line', function (line) {
//     input.push(line);
// }).on('close', function () {
 
//     const T = Number(input[0]);

//     for (let i = 1; i <= T; i++) {
//         let num1 = Number(input[i].split(' ')[0]);
//         let num2 = Number(input[i].split(' ')[1]);

//         console.log(num1 + num2);
//     }

//     process.exit();
// });