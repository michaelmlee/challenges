// Complete the anagram function below.
function anagram(s) {
  if(s.length % 2 !== 0)
    return -1;

  const n = s.length / 2;
  const arr = s.split("");
  let count = 0;

  for(let i = 0; i < n; i++){
    for(let j = n; j < arr.length; j++){
      if(arr[i] === arr[j]){
        count++;
        arr.splice(j, 1);
        break;
      }
    }
  }
  return n - count;
}

function main(){
  console.log(anagram("aaabbb")); // 3
  console.log(anagram("ab")); // 1
  console.log(anagram("abc")); // -1
  console.log(anagram("mnop")); // 2
  console.log(anagram("xyyx")); // 0
  console.log(anagram("xaxbbbxx")); // 1
  console.log(anagram("asdfjoieufoa")); // 3
  console.log(anagram("fdhlvosfpafhalll")); // 5
  console.log(anagram("mvdalvkiopaufl")); // 5
}

main();