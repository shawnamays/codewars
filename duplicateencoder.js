//  DUPLICATE ENCODER CODEWARS SOLUTION

function duplicateEncode(word){
    let chars=[...word.toLowerCase()];
    let duplicateList = chars.filter((char,index,chars)=>chars.indexOf(char)!==index);
    let duplicateSet = new Set(duplicateList); 
    let uniqueDuplicateList = [...duplicateSet];
    //console.log(uniqueDuplicateList);
    let resultString = "";
    for (let i=0, n=chars.length; i < n; ++i ) {
      if(uniqueDuplicateList.includes(chars[i])) {
        resultString += ")";
      } else {
        resultString += "(";
      }
    }
    return resultString;
}
//solution is not mine and was found online