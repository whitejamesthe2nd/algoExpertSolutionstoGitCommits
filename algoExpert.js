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
function sortedSquaredArray(array) {
    // Write your code here.
      const sortedSquares = array.map(ele => ele*ele)

      sortedSquares.sort((a,b)=> a-b);
      return sortedSquares;
  }
  // more to do
  // Happy Birthday James
