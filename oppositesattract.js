//opposites attract codewars solution

function lovefunc(flower1, flower2){
    // Check if one flower has an even number of petals and the other has an odd number of petals
    if ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)) {
      return true; // They are in love!
    } else {
      return false; // They aren't in love :(
    }
  }