
function sockMerchant(n, ar) {
  const unpaired = [];
  const numPaired = ar.reduce((accm, currVal) => {
      let paired = false;
      unpaired.forEach( (item,index) => {
        if(item === currVal){
            paired = true; 
            unpaired.splice(index,1);
        }
      });
      if(!paired){
        unpaired.push(currVal);
        return accm
      } else 
      return accm + 1
  },0)
  return numPaired;
}

function main() {
    const testN = 9;
    const testArray1 = [10,20,20,10,10,30,50,10,20];
    let result = sockMerchant(testN, testArray1);
    console.log(result);

}
main();