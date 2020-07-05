function luckBalance(k, contests) {
    contests.sort((a,b) => b[0] - a[0]);
    let total = 0;
    for(let i = 0; i < contests.length; i++){
      if(k > 0 && contests[i][1] === 1){
        total += contests[i][0];
        k--;
       } else if(contests[i][1] === 1){
        total -= contests[i][0];
      } else {
        total += contests[i][0]
      } 
    }
    return total;
  }

  function main() {
    console.log(luckBalance(2, [[5,1],[1,1],[4,0]]))
    console.log(luckBalance(1, [[5,1],[1,1],[4,0]]))
  }

  main();