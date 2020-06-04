// Complete the minimumBribes function below.
function minimumBribes(q) {
	//q[i] cannot be more than 2 spots in front
	const n = q.length;
  let count = 0;
  let tooChaotic = false;
  for(let i = 0; i < n; i++){
    if(q[i] > i + 3){
      tooChaotic = true;
      break;
    }
		for(let j = 0; j < n - 1; j++){
			if(q[j] > q[j+1]){
				[q[j], q[j+1]] = [q[j+1], q[j]];
				count++;
			}
		}
  }
	console.log(q);
	console.log(count);
  const result = tooChaotic ? "Too chaotic\n" : `${count}\n`
  console.log(result);
}

function main() {
    const n = 2;
    const q = [[2,1,5,3,4],[2,5,1,3,4]]
    for (let i = 0; i < n;i++) {
        minimumBribes(q[i]);
    }
}
 

main();