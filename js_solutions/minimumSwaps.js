'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let count = 0;
  let n = arr.length;
  // for(let i = 0; i < n  ; i++){
  //   if (arr[i] !== i + 1) {
  //     let swapEl = arr[i];
  //     let index = arr.indexOf(i + 1)
  //     arr[i] = arr[index]
  //     arr[index] = swapEl
  //     count++;
  //   }
  // }
   for (let i = 0, l = Math.max(...arr); i < l; i++) {
    while (arr[i] !== i + 1) {
      arr[i] = [arr[arr[i]-1], arr[arr[i]-1] = arr[i]][0]
      if (!arr[i]) break
      count++
    }
  }
  return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
