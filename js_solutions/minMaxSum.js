'use strict';

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  const sortedArr = arr.sort((a,b) => a - b); // nlogn
  const sumOfArr = arr.reduce((a,b) => a + b); // n
  const largest = sumOfArr - sortedArr[0]; // constant
  const smallest = sumOfArr - sortedArr[sortedArr.length - 1]; // constant
  process.stdout.write(`${smallest} ${largest}`); // constant
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
