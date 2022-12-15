//TWO TO ONE SOLUTION

function longest(s1, s2) {
    // your code
    //Create Arrays a and b containing unique values by making them Set and converting them back to array.
    let a = [... new Set(s1.split(""))];
    let b = [... new Set(s2.split(""))];
  
    //combine both arrays into one
    for (let i=0; i<b.length; i++){
        a.push(b[i]);
    }
    //create a unique array from the combination
    let init_combo = [... new Set(a)];
    //sort array and join to form a string
    let combo = init_combo.sort().join("");
    //Return the final result
    return combo;
  
  }
  