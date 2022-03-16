const fs = require(`fs`);
const inputData = fs.readFileSync(`/dev/stdin`).toString().split(' ').map(value => +value);
const a = inputData;

if (a % 4 == 0) {
  if (a % 100 != 0) {
    console.log(`1`);
  } 
  else if (a % 400 == 0) {
    console.log(`1`);
  } 
  else {
    console.log(`0`);
  }
} 
else {
  console.log(`0`);
}