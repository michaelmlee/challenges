// Complete the isBalanced function below.
function isBalanced(s) {
  const leftSide = [];
  for(let i = 0; i < s.length; i++){
    if(s.charAt(i) === '{' || s.charAt(i) === '[' ||s.charAt(i) ===  '('){
      leftSide.push(s.charAt(i));
    } else {
      const nextCorrectChar = leftSide.pop();
      if(nextCorrectChar === undefined)
        return "NO";

      if(s.charAt(i) === '}' && nextCorrectChar !== '{')
        return "NO";
      if(s.charAt(i) === ']' && nextCorrectChar !== '[')
        return "NO";
      if(s.charAt(i) === ')' && nextCorrectChar !== '(')
        return "NO";
    }
  }

  if(leftSide.length > 0)
    return "NO";

  return "YES";
}

function main() {
  console.log(isBalanced('{[()]}')); // YES
  console.log(isBalanced('{[(])}'));  // NO
  console.log(isBalanced('{{[[(())]]}}')); // YES
  console.log(isBalanced('{{([])}}'))  // YES  
  console.log(isBalanced(' {{)[](}}'))  // NO
  console.log(isBalanced('{(([])[])[]}')) // YES
  console.log(isBalanced('{(([])[])[]]}')) // NO
  console.log(isBalanced('{(([])[])[]}[]'))  // YES
}
