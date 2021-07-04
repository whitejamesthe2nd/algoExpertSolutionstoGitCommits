function isValidSubsequence(array, sequence) {
    // WIt feels good to be a gangsta
    // Tengen toppa
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
//Yay sorting stuff
//Bokutachiwa
