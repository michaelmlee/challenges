'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
  const lengthOfStr = s.length;
  const numberTimes = Math.floor(n/lengthOfStr);
  const remainder = n % lengthOfStr;

  let count = 0;
  let remainderCount = 0;
  for(let i = 0; i < lengthOfStr; i++){
     if(s.charAt(i) === 'a'){
        count++;
     }
     if(i < remainder && s.charAt(i) === 'a'){
       remainderCount++;
     }
  }
  count = count * numberTimes;
  count = count + remainderCount;

  return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
