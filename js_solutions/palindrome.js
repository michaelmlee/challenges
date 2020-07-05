// todo need to optimize
function findPalindrome(s){
  const a = s.split('');
  a.sort();
  let isEven = a.length % 2 === 0 ? true : false;
  let foundOdd = false;
  let i = 0;
  while(i < a.length){
    if(a[i] === a[i + 1]){
      i += 2;
      continue;
    } else {
      if(isEven){
        return "NO"
      }
      if(foundOdd){
        return "NO"
      } else {
        foundOdd = true;
        i++;
      } 
    }
  }
  return "YES";
};

function main(){
  console.log(findPalindrome("aabbccdd")); // YES
  console.log(findPalindrome("cdefghmnopqrstuvw")); // NO
  console.log(findPalindrome("cdcdcdcdeeeef")); // YES
}

main();