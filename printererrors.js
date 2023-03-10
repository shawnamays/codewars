//printer errors codewars solution

function printerError(s) {
    // Count the number of characters in s that are not in the range a-m
    const errorCount = (s.match(/[^a-m]/g) || []).length;
    // Calculate the error rate as a string in the format "numerator/denominator"
    return `${errorCount}/${s.length}`;
  }