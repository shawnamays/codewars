//replace with alphabet position codewars solution


function alphabetPosition(text) {
    //we want the result to be a string
    let result = "";
    //we need to iterate over an array of elements which is the text input 
    for (let i = 0; i < text.length; i++) {
      //we want to transform the text so that capitalization doesn't matter.
      //we want to use the charCodeAt method on each array element to find its corresponding unicode
      const code = text.toUpperCase().charCodeAt(i)
      
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length - 1);
  }
  
  
  
  
  