// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
  const num = arr[n-1];
  console.log(num);
  console.log(arr);
  let i = arr.length - 2;
  for(; i >= 0 && arr[i] > num; i--){
    arr[i+1] = arr[i];
    console.log(arr.join(' '));
  }
  arr[i+1] = num;
  console.log(arr.join(' '));
}

function main() {
  const n = parseInt("5", 10);

  const arr = "2 4 6 8 3".split(' ').map(arrTemp => parseInt(arrTemp, 10));

  insertionSort1(n, arr);
}

main();