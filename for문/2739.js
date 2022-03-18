let input = require('fs').readFileSync('/dev/stdin').toString();

let num = Number(input[0]);

for (let i = 1; i < 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}

// readline 이용한풀이 

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const num = parseInt(line);
  for (let i = 1; i < 10; i++) {
    console.log(num, '*', i, '=', num * i);
  }
  rl.close();
}).on('close', function () {
  process.exit();
});