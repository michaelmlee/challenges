// Complete the getMinimumCost function below.
function getMinimumCost(k, c) {
  c.sort((a,b) => b-a);
  let diff = c.length - k;
  const mark = c.length - diff;
  let sum = 0;
  for(let i = 0; i < mark; i++){
    sum += c[i];
  }
  let l = 1;
  let t = 1;
  for(let j = mark; j < c.length; j++){
    sum += (l+1)*c[j];
    t++;
    if(t > k){
      t = 1;
      l++;
    }
  }
  return sum;
}

function main(){
  console.log(getMinimumCost(3, [2,5,6])); // 13
  console.log(getMinimumCost(2, [2,5,6])); //  15
  console.log(getMinimumCost(3, [1,3,5,7,9])); //  29
  console.log(getMinimumCost(3, [390225,426456,688267,800389,990107,439248,240638,15991,874479,568754,729927,980985,132244,488186,5037,721765,251885,28458,23710,281490,30935,897665,768945,337228,533277,959855,927447,941485,24242,684459,312855,716170,512600,608266,779912,950103,211756,665028,642996,262173,789020,932421,390745,433434,350262,463568,668809,305781,815771,550800])); // 163578911
}

main();