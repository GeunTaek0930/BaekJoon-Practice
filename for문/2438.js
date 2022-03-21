let input = require('fs').readFileSync('/dev/stdin').toString();

let star = ``;

for (let i = 1; i <=input; i++) {
  star= star+ "*"
  console.log(star);
}