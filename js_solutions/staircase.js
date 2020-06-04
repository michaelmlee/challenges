function staircase(n) {
  const answer = [];
  const hashRtn = "#\n";
  const hash = "#";
  const space = " ";
  for(let rowP = 1 ; rowP <= n ; rowP++){
    for(let colP = 1 ; colP <= n ; colP++){
      if(colP === n){
        answer.push(hashRtn);
      }else if(colP + rowP > n){
        answer.push(hash);
      }else{
        answer.push(space);
      }
    }
  }
  console.log(answer.join(''));
}

function Ostaircase(n){
  const answer = [];
  for(let i = 1 ; i < n + 1 ; i++)
    answer.push(' '.repeat(n - i) + '#'.repeat(i) + "\n");
  console.log(answer.join(''));
}

function main() {
  const n = 6

  Ostaircase(n);
}

main();