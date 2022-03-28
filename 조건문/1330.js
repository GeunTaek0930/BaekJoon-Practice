console.log(`1번째 풀이`);

const fs = require(`fs`);
const inputData = fs.readFileSync(`/dev/stdin`).toString().split(' ').map(value => +value);
const [a, b] = inputData;

if (a > b) {
  console.log(`>`);
} 
else if (a < b) {
  console.log(`<`);
} 
else {
  console.log(`==`);
}

console.log(`2번째 풀이`);

const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number); 
const [A, B] = [input[0], input[1]]; 
if(A > B) console.log(">"); 
if(A < B) console.log("<"); 
if(A == B) console.log("==");