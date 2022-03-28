const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map((el) => parseInt(el));
}).on("close", function () {

  let hour = input[0];
  let minute = input[1];
  let fastAlarmM = minute - Number(45);

  if (0 > fastAlarmM) {
    hour -= 1;
    if (hour < 0) {
      hour = 23;
    } else {}
    minute = 60 + fastAlarmM;
  } else {
    minute = fastAlarmM;
  }

  console.log(hour + " " + minute);
  process.exit();
});