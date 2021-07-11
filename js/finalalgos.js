Final JS Projects on FCC
// ---------------------------------------------------
// TODO: Check Palindrome
// ---------------------------------------------------
function palindrome(str) {
    let alpha = str.replace(/[^0-9a-z]/gi, '');
    let s = alpha.toLowerCase();
    let middle = s.length/2;
    console.log("first part: ", s.slice(0, middle))
    console.log("second part:", s.slice(middle+1, s.length) )
    //check if even number of chars
    if(middle == Math.floor(middle)) {
      if(s.slice(0, middle) === s.slice(middle, s.length).split("").reverse().join("")) {
        return true;
      }
        return false;
      } else {
        if(s.slice(0, middle) === s.slice(middle+1, s.length).split("").reverse().join("")) {
          return true
  
        } return false;
      }
  }
  
  console.log(palindrome("never odd or even") )
  console.log(palindrome("_eye"))
  console.log(palindrome("My age is 0, 0 si ega ym."))
  

// ---------------------------------------------------
// TODO: 
// ---------------------------------------------------

// ---------------------------------------------------
// TODO: 
// ---------------------------------------------------

// ---------------------------------------------------
// TODO: 
// ---------------------------------------------------

// ---------------------------------------------------
// TODO: 
// ---------------------------------------------------