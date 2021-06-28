// -------Adapted from FCC--------
// -------------------------------
// Confirm the Ending
// -------------------------------
function confirmEnding(str, target) {
    if (str.slice(-target.length) == target) {
      return true;
    }
    return false;
  }
  
console.log(confirmEnding("Bastian", "n"));