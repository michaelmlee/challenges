'use strict';

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

// Complete the countSwaps function below.
function countSwaps(a) {
  let count = 0;
  const n = a.length;
  for(let i = 0 ; i < n; i++){
    for(let j = 0; j < n - 1; j++){
      if(a[j] > a[j+1]){
        [a[j],a[j+1]] = [a[j+1], a[j]];
        count++;
      }
    }
  }
  process.stdout.write(`Array is sorted in ${count} swaps.\nFirst Element: ${a[0]}\nLast Element: ${a[a.length-1]}`);
}

function main() {
    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);
}
