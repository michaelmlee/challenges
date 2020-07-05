// Complete the gridChallenge function below.
function gridChallenge(grid) {
  // sort horizontal rows
  const newGrid = [];
  for(let i = 0; i < grid.length; i++){
    let sortedRowArray = grid[i].split('');
    sortedRowArray.sort();
    newGrid.push(sortedRowArray);
  }

  for(let r = 0; r < newGrid[0].length; r++){
    for(let c = 1; c < newGrid.length; c++){
      if(newGrid[c][r] < newGrid[0][r])
        return "NO"
    }
  }
  
  return "YES"
}

function main(){
  console.log(gridChallenge(["eabcd","fghij","olkmn","trpqs","xywuv"])); //yes
  console.log(gridChallenge(["kc","iu"])); //yes
  console.log(gridChallenge(["uxf","vof","hmp"])); //no
  console.log(gridChallenge(["abc","lmp","qrt"])); //yes
  console.log(gridChallenge(["mpxz","abcd","wlmf"])); //no
  console.log(gridChallenge(["abc","hjk","mpq","rtv"])); //yes
}

main();
