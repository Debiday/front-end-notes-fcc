// -------Adapted from FCC--------
// ---------------------------------------------------
// Confirm the Ending
// ---------------------------------------------------
function confirmEnding(str, target) {
    if (str.slice(-target.length) == target) {
      return true;
    }
    return false;
  }
  
console.log(confirmEnding("Bastian", "n"));


// ---------------------------------------------------
// Truncate a String
// ---------------------------------------------------
function truncateString(str, num) {
    if (str.length > num) {
    return str.slice(0, num) + "...";
    } else if (str.length <= num) {
      return str;
    }
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));


// ---------------------------------------------------
// Check num in arr passes func
// ---------------------------------------------------
function findElement(arr, func) {
let num = 0;

for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
    return num;
    }
}

return undefined;
}

// ---------------------------------------------------
// Check Boolean (typeof)
// ---------------------------------------------------
function booWho(bool) {
    if (typeof(bool) == "boolean") {
    return true
    }
    return false;
}

booWho(null);


// ---------------------------------------------------
// Title case a sentence
// ---------------------------------------------------
function titleCase(str) {
    let words = str.split(" ");
    let result = "";
    console.log(words);
    for (let i = 0; i < words.length; i++) {
        result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase() + " ";
  } return result.trim();
  }
  
  console.log(titleCase("I'm a little tea pot"));


// ---------------------------------------------------
// Slice and splice (insert at n)
// ---------------------------------------------------
function frankenSplice(arr1, arr2, n) {
    let result = [];
    result.push.apply(result, arr2.slice(0,n));
    result.push.apply(result, arr1);
    result.push.apply(result, arr2.slice(n));
    return result;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
  console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
  console.log(frankenSplice([1, 2], ["a", "b"], 1));


// ---------------------------------------------------
// Remove falsy values
// ---------------------------------------------------
function bouncer(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]){
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  bouncer([7, "ate", "", false, 9]);


// ---------------------------------------------------
// Insert num at lowest index after sorting
// ---------------------------------------------------
function getIndexToIns(arr, num) {
    arr.push(num);
    //using function expression
    //even shorter: numbers.sort((a, b) => a - b);
    function compareNumbers(a, b) {
    return a - b;
  }
    arr.sort(compareNumbers);
    return arr.indexOf(num);
  }
  
  
  console.log(getIndexToIns([3, 10, 5], 3)); //0
  console.log(getIndexToIns([2, 20, 10], 19)); //2

// ---------------------------------------------------
// True if the string in [0] contains all of the letters in [1].
// ---------------------------------------------------
function mutation(arr) {
    let word_length = arr[1].length;
    arr[0] = arr[0].toLowerCase()
    arr[1] = arr[1].toLowerCase()
    let result = true;
    for (let i = 0; i < word_length; i++) {
      console.log(arr[0].indexOf(arr[1][i]));
      if (arr[0].indexOf(arr[1][i]) == -1) {
          result = false;
      } else {
        continue;
      }
      } return result;
    }
  
  console.log(mutation(["hello", "hey"])); //false
  console.log(mutation(["Noel", "Ole"])); //true
  console.log(mutation(["floor", "for"])); //true


//----------------------------------------------------
// Split an array into lengths of size
// ---------------------------------------------------
function chunkArrayInGroups(arr, size) {
  let final_arr = [];
  for (let i = 0; i < arr.length; i+=size) {
      final_arr.push(arr.slice(i, i+size));
    } 
  return final_arr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); 


// ---------------------------------------------------
// 
// ---------------------------------------------------

// ---------------------------------------------------
// 
// ---------------------------------------------------

// ---------------------------------------------------
// 
// ---------------------------------------------------

//----------------------------------------------------
// 
// ---------------------------------------------------

// ---------------------------------------------------
// 
// ---------------------------------------------------

// ---------------------------------------------------
// 
// ---------------------------------------------------

// ---------------------------------------------------
// 
// ---------------------------------------------------

//----------------------------------------------------
// 
// ---------------------------------------------------