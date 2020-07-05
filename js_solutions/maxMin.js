// Complete the maxMin function below.
function maxMin(k, arr) {
  arr.sort((a,b) => a - b);
  let low = Number.MAX_SAFE_INTEGER;
  for(let j = 0; j < arr.length; j++){
    const temp = arr[j + (k-1)] - arr[j];
    if(temp < low)
      low = temp;
  }
  return low;
}

function main(){
  console.log(maxMin(3,[10,100,300,200,1000,20,30])); // 20
  console.log(maxMin(4,[1,2,3,4,10,20,30,40,100,200])); // 3
  console.log(maxMin(2,[1,2,1,2,1])); // 0
  console.log(maxMin(3,[100,200,300,350,400,401,402])); // 2
}

main();