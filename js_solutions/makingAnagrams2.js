function makingAnagrams(s1, s2) {
  let freqs = {};
  s1.split('').forEach(char => freqs[char] = (freqs[char] || 0) + 1); 
  s2.split('').forEach(char => freqs[char] = (freqs[char] || 0) - 1);
  return Object.keys(freqs).reduce((accum, currVal) => accum + Math.abs(freqs[currVal]), 0);
}


function main(){
  console.log(makingAnagrams("cde", "abc")); //4
  console.log(makingAnagrams("absdjkvuahdakejfnfauhdsaavasdlkj", "djfladfhiawasdkjvalskufhafablsdkashlahdfa")); //19
}

main();