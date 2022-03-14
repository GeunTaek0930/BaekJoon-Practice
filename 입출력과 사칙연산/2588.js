const fs = require('fs');
const [a,b] = fs.readFileSync('./dev/stdin').toString().split('\n').map(v=>parseInt(v));

const X = b % 10;
const Y = Math.floor((b % 100) / 10);
const Z = Math.floor(b / 100);

console.log(a * X);
console.log(a * Y);
console.log(a * Z);
console.log(a * b);