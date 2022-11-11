// Isograms codewars solution

//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
    var hash = {};
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
      if (hash[str[i]]) {
        return false;
      }
      hash[str[i]] = true;
    }
    return true; 
 }
