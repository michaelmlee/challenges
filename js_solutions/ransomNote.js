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

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
  const obj = {};
  magazine.forEach( word => obj[word] = (obj[word] || 0) + 1);

  for(let i = 0; i < note.length; i++){
    const word = note[i];
    if(obj[word] > 0){
      obj[word] = obj[word] - 1;
    } else {
      process.stdout.write("No");
      return false;
    }
  }
  process.stdout.write("Yes");
}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}
