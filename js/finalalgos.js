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
// TODO: Telephone Num Validator
// ---------------------------------------------------
function telephoneCheck(str) {

    if(str.includes(")") && !str.includes("(")) {
      return false;
    } else if(str.match(/^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/) || str.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/) || str.match(/^[0-9]{10}$/) || str.match(/^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/) || str.match(/^1\s?\(?[0-9]{3}\)?\-?\s?[0-9]{3}-[0-9]{4}$/)) {
      return true;
    } return false;
  } 
  
  telephoneCheck("555-555-5555");
  console.log(telephoneCheck("1 555)555-5555"));
  

// ---------------------------------------------------
// TODO: Cash register
// ---------------------------------------------------
function checkCashRegister(price, cash, cid) {
    let change = [];
    let changeDue = cash - price;
    let drawerTotal = 0;
    let mult = 0;
    let penny = 0;
    let final = {};
    console.log("changedue2", changeDue);;
    console.log("cid2", cid)
    function countChange() {
      if (changeDue >= 100) {
        while (changeDue >= 100 && cid[8][1] >= 100){
          changeDue -= 100;
          cid[8][1] -=100;
          mult += 1;  
        }
        change.push(["ONE HUNDRED", (100 * mult)]);
        mult = 0;
      }
      
      if (changeDue >= 20) {
        while (changeDue >= 20 && cid[7][1] >= 20){
          changeDue -= 20;
          cid[7][1] -= 20;
          mult += 1;  
        }
        change.push(["TWENTY", (20 * mult)]);
        mult = 0;
      }
      
      if (changeDue >= 10) {
        while (changeDue >= 10 && cid[6][1] >= 10){
          changeDue -= 10;
          cid[6][1] -= 10;
          mult += 1;  
        }
        change.push(["TEN", (10 * mult)]);
        mult = 0;
      }
      
      if (changeDue >= 5) {
        while (changeDue >= 5 && cid[5][1] >= 5){
          changeDue -= 5;
          cid[5][1] -= 5;
          mult += 1;  
        }
        change.push(["FIVE", (5 * mult)]);
        mult = 0;
      }
      
      if (changeDue >= 1) {
        while (changeDue >= 1 && cid[4][1] >= 1){
          changeDue -= 1;
          cid[4][1] -= 1;
          mult += 1;  
        }
        change.push(["ONE", (1 * mult)]);
        mult = 0;
      }
  
      if (changeDue >= 0.25) {
        while (changeDue >= 0.25 && cid[3][1] >= 0.25){
          changeDue -= 0.25;
          cid[3][1] -= 0.25;
          mult += 1;  
        }
        mult *= 0.25;
        change.push(["QUARTER", mult]);
        mult = 0;
      }
      
      if (changeDue >= 0.1) {
        while (changeDue >= 0.1 && cid[2][1] >= 0.1){
          changeDue -= 0.1;
          cid[2][1] -= 0.1;
          mult += 1;  
        }
        change.push(["DIME", (0.1 * mult)]);
        mult = 0;
      }
      
      if (changeDue >= 0.5) {
        while (changeDue >= 0.5 && cid[1][1] >= 0.5){
          changeDue -= 0.5;
          cid[1][1] -= 0.5;
          mult += 1;  
        }
        change.push(["NICKEL", (0.5 * mult)]);
        mult = 0;
      }
      
      if (changeDue >= 0.01) {
        while (changeDue >= 0.01 && cid[0][1] >= 0.01){
          changeDue -= 0.01;
          cid[0][1] -= 0.01;
          mult += 1;  
        }
        
        
        if (0 < changeDue && changeDue <= 0.01  && cid[0][1] >= 0.01){
          penny = 0.01;
        } 
        
        change.push(["PENNY", ((0.01 * mult) + penny)]);
        mult = 0;
      }
        
        if (changeDue >= 0.01){
          final["change"] = [];
        }    
  
     }
    
    for (var i in cid) {
      drawerTotal += cid[i][1];
    }
  
    let changeTotal = 0;
    countChange();
    for(let i = 0; i < change.length; i ++) {
      changeTotal += change[i][1]
    }
    if (changeDue > drawerTotal || changeDue > changeTotal) {
      final["status"] = "INSUFFICIENT_FUNDS";
      final["change"] = [];
    } else if (changeDue < drawerTotal) {
        if (cash-price === drawerTotal) {
          final["status"] = "CLOSED";
          cid[0][1] = 0.5;
          final["change"] = cid;
    } else {
      countChange();
      final["status"] = "OPEN";
      final["change"] = change;
    }
    }
    return final;
  }
  
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));