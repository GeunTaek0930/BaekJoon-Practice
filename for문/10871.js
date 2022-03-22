let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = input[0].split(' ').map(x => Number(x));
let arr = input[1].split(' ').map(x => Number(x));
const answer = [];

for (let i = 0; i <= num[0]; i++) {
  if (num[1] > arr[i]) {
    answer.push(arr[i]);
  }
}

console.log(answer.join(' '));

/*
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

//첫째 줄의 10, 5를 N, X에 담는다.
let numbers = input[0].split(' ');
let N = Number(numbers[0]); //10
let X = Number(numbers[1]); //5

//둘째 줄의 수열 A
let A = input[1].split(' ');

//결과를 담을 변수
let result= '';

for(let i=0; i<N; i++){
    if(Number( A[i]) < X ){
        result += A[i] + ' ';
    }
}
console.log(result);
*/