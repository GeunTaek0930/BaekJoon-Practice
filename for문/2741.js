let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let answer = ``;

for (let i = 1; i <= input; i++) {
    answer += i + '\n';
}

console.log(answer);

/*const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    const numberN = Number(line);
    
    let answer = '';

    for (let i = 1; i <= numberN; i++) {
    answer += i + '\n';
    }

    console.log(answer);

    rl.close();
}).on('close', function () {
    process.exit();
});*/