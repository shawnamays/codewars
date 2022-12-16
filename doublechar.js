// DOUBLE CHAR SOLUTION

function doubleChar(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
      newStr += str.charAt(i) + str.charAt(i);
    }
    return newStr;
  };