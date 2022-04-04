const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

let input = [];

rl.on('line', function (line){
    input.push(line);

}).on('close',function (){

    let N = input[0];
    console.log(N.charCodeAt())
    process.exit();
});

/* 2번째방법
const input=require(`fs`).readFileSync(`/dev/stdin`).toString();
console.log(input.charCodeAt());
*/