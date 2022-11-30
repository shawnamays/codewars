//Params(input),Return,Example,Pseudo

//Given a positive number (val), I have to create the function that will output the next smallest palindrome number higher than val.
//First the user will input a positive number
//I want the next smallest palindrome number that is greater than the user's value input (val)
//Because it is a palindrome, the number must be the same forwards and backwards (palindromic)
//So I also need to target those numbers and filter out the ones that do not meet our condition of being palindromic



function nextPal(val) {
   for (let i = val+1; true; i++) {
     if([...String(i)].reverse().join('') == i) {
       return i
     }
   }
    }
