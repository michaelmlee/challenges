function minimumAbsoluteDifference(arr) {
    let lowest = Number.MAX_SAFE_INTEGER;
    arr.sort((a,b)=> a - b);
    for(let i = 0; i < arr.length - 1; i++){
      const low = Math.abs(arr[i] - arr[i+1]);
      if(low < lowest){
        lowest = low;
      }
      if(low === 0)
        return low;
    }
    return lowest;
}

function main() {
    console.log(minimumAbsoluteDifference([3, -7, 0])); //3
}

main();