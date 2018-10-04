function looper(arr) {
    mySum = 0;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] % 2 !== 0){
        mySum = mySum + arr[i]
      } else if(arr[i] > 100) {
        mySum = mySum + arr[i]
      }
    }
    return mySum;
  }

  looper(1000);