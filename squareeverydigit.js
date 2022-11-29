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

  //first I need to declare the result variable as a string
  //in order for the numbers to be able to be placed into a string, I have to establish a variable that will use the .toString method on the number
  //I need to loop through the array of numbers that I've turned into strings
  //I need to indicate that the result is going to be assigned the value of the result + each digit of the number in the array.
  //I then need to turn that into a string because our result string is not going to take a number
  //I will return the string result in the number function, which will turn it back into a number for the proper result

  function squareDigits(num){
    var res = "";
    num = num.toString();
    for (var i = 0; i < num.length; i++)
    {
      res = res + (num[i] * num[i]).toString();
    }
    return Number(res);
  }



  function squareDigits(num){
    var res = ""
  num = num.toString();
  for (var i = 0; i < num.length; i++)
{
  res = res + (num[i] * num[i]).toString();
} 
return Number(res);

}


function squareDigits(num){
  var res = ""
  num = num.toString();
  for (var i = 0; i < num.length; i++)
{
return Number(res);

}
}
