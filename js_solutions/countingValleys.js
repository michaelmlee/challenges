function countingValleys(n, s) {
    let level = 0;
    let numValleys = 0;
    let isChanging = false;
    for(let i = 0; i < n ; i++){
      if(level == 0)
        isChanging = true;
      if(s.charAt(i) == "U")
        level++;
      else
        level--;
      if(isChanging){
        if(level < 0)
          numValleys++;
        isChanging = false;
      }
    }
    return numValleys;
  }

  console.log(countingValleys(8, "UDDDUDUU"));