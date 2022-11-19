// Simple Pig Latin Codewars Solution

function pigIt(str){
    //first I need to split the string into an array using str.split
       const arr = str.split(' ')
    //I will need to return it to be able to use it further in the solution
       return arr
    //I will use map method to iterate over and move the first letter to the end
       .map((word) => {
    //I will use substr(1) method to give us the resulting substring from the first character onto the end of the array
    //I will then add the "ay"
    // THE PUNCTUATION MUST BE UNTOUCHED
    //You can use RegEx to only allow alphanumnerical values
    // return the resulting word
         return word.match(/[A-z]/i)
            ? `${word.substr(1)}${word.substr(0, 1)}ay`
            : word
        })
        .join(' ')
    
      
      
    }