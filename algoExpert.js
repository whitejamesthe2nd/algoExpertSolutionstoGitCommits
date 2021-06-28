function isValidSubsequence(array, sequence) {
    // Write your code here.
      let spot = 0;
      for(let i =0; i< array.length;i++){
          if(array[i] === sequence[spot]){
              spot++;
          }
      }
      if(spot === sequence.length){
          return true
      }
      return false
  }
