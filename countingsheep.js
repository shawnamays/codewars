// counting sheep codewars solution
// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    // function will count the "number of sheep"(value of true) in an array
    // will ignore/skip any value of false
    
  // we need to declare where the counter is even going to begin in the array
    let counter = 0
   //we create our for loop to go through the array, seeking out the sheep that are present.
   for (i=0; i<arrayOfSheep.length; i++){
        if(arrayOfSheep[i]) counter += 1
   }
    //then we want to return what the counter is now at after it has executed the expression
     return counter
  
  
      
    
  }
  
  