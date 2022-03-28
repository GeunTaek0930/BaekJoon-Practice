let input = require('fs').readFileSync('/dev/stdin').toString();

let star = ``;

for (let i = 1; i <=input; i++) {
  star= star+ "*"
  console.log(star);
}

/* repeat사용
let input = require('fs').readFileSync('/dev/stdin').toString();

for (let i = 1; i <=input; i++) {
  console.log('*'.repeat(i));
}
*/
