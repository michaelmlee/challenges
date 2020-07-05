/* 
# Data Merging
# Part 1a: Given 2 data arrays (size P and size Q) with sorted values, how do you get a merged sorted array?
# Part 1b: What’s the space and runtime complexity?

# Part 2a: Give X data arrays (with total element size Y) with sorted values, how do you get a merged sorted array?
# Part 2b: What’s the space and runtime complexity?
 */


// time: o(p + q)
// space: o(p + q)
function mergeArrays (p, q){
  const sortedArray = [];
  
  let iP = 0;
  let jQ = 0;
  
  while(iP < p.length && jQ < q.length){
    if(p[iP] < q[jQ]){
      sortedArray.push(p[iP]);
      iP++;
    } else {
      sortedArray.push(q[jQ]);
      jQ++;
    }
  }
  
  // finish off anything that didn't get added
  for(;iP < p.length; iP++){
    sortedArray.push(p[iP]);
  }

  //finish off anything that didn't get added
  for(;jQ < q.length; jQ++){
    sortedArray.push(q[jQ]);
  }
  return sortedArray;
}

// time: o(y)
// space: o(x/2)
function mergeXArrays(a){
  const sortArr = [];
  if(a.length === 1)
    return a[0];
    
  for(let i = 0; i < a.length; i++){
    if(i+1 >= a.length)
      sortArr.push(a[i]);
    else {
      sortArr.push(mergeArrays(a[i], a[i+1]));
      i++;
    }
  }
  return mergeXArrays(sortArr);
}
function main(){
  // uncomment to test
  // const a = [1,5,9],
  //   b = [-1, 2],
  //   c = [2, 4, 100],
  //   d = [Number.MIN_SAFE_INTEGER, 5, 9 , 11],
  //   e = [0, 12, 88, 100, 400, Number.MAX_SAFE_INTEGER],
  //   f = [-500, -200, 0, 100 , 1000000],
  //   g = [1000],
  //   h = [1 , 2, 4 , 6, 10, 25];

  // console.log(mergeArrays(g, h));
  // console.log(mergeXArrays([a]));
}

//for testing
main();

module.exports = {
  mergeXArrays,
  mergeArrays
};