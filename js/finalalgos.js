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
// TODO: Convert to Roman
// ---------------------------------------------------
function convertToRoman(num) {
    let dict = {
      1000 : 'M',
      500 : 'D',
      100 : 'C',
      50 : 'L',
      10 : 'X',
      5 : 'V',
      1 : 'I'
    }
  
    let dictKeys = Object.keys(dict);
  
    let roman = "";
    
    while (num > 0) {
      for(let i = 6; i >= 0; i--) {
        if (num - dictKeys[i] >= 0) {
          let multiple =  Math.floor(num/dictKeys[i]);
          for(let j = 0; j < multiple; j++) {
            roman += dict[dictKeys[i]];
            num -= dictKeys[i];
            // console.log(num)
          } 
        } 
      } return roman
          .replace("DCCCC", "CM")
          .replace("LXXXX", "XC")
          .replace("VIIII", "IX")
          .replace("CCCC", "CD")
          .replace("XXXX", "XL")
          .replace("IIII", "IV")
    }
  }
  
  console.log(convertToRoman(36));
  console.log(convertToRoman(400));
  console.log(convertToRoman(1000));
  console.log(convertToRoman(3999));


// ---------------------------------------------------
// TODO: Caesars Cipher (ROT13)
// ---------------------------------------------------
function rot13(str) {
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = ""
    for(let i = 0; i < str.length; i ++) {
      if(str[i].match(/^[A-Z]$/i)) {
        let newIndex = alpha.indexOf(str[i]) + 13
        if (newIndex >= 26) {
          newIndex -= 26
        }
        result += alpha[newIndex];
  
      } if (!str[i].match(/^[A-Z]$/i)) {
        result += str[i];
      }
    }
    return result;
  }
  
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("A"));
  

// ---------------------------------------------------
// TODO: 
// ---------------------------------------------------

// ---------------------------------------------------
// TODO: 
// ---------------------------------------------------