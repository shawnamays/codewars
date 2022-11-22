//square every digit codewars solution

function squareDigits(num){
    var res = "";
    num = num.toString();
    for (var i = 0; i < num.length; i++)
    {
      res = res + (num[i] * num[i]).toString();
    }
    return Number(res);
  }