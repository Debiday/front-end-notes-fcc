// Practice questions (intermediate)
// ---------------------------------------------------
// TODO: Sum All Numbers in a Range (sort, for loop)
// ---------------------------------------------------
function sumAll(arr) {
    let finalSum = 0;
    let sorted = arr.sort(function(a,b) {
      return a === b ? 0: a < b ? -1: 1;
    });
    for(let i=sorted[0]; i <= sorted[1]; i++) {
      finalSum += i;
    } return finalSum;
  }
  
  console.log(sumAll([1, 4]));
  console.log(sumAll([10, 5]));
  

// ---------------------------------------------------
// TODO: Sort by length
// ---------------------------------------------------
function diffArray(arr1, arr2) {
    let arr = [[...arr1], [...arr2]];
    let unique = arr
      .sort(function(a,b) {return a.length - b.length;})
    return unique;
  }

  
// ---------------------------------------------------
// TODO: Diff two or more arrays (concat, filter)
// ---------------------------------------------------
function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// ---------------------------------------------------
// TODO: (Using the arguments object) Remove values in second array
// ---------------------------------------------------
function destroyer(arr) {
    let final = arguments[0];
    let remove = [...arguments].slice(1)
    return final
      .filter(function(item) {
    return remove.indexOf(item) === -1;
  })
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
  console.log(destroyer(["tree", "hamburger", 53], "tree", 53));


// ---------------------------------------------------
// TODO: Filter object values in collection
// ---------------------------------------------------
function whatIsInAName(collection, source) {
  let srcKeys = Object.keys(source);
  return collection
  //Collection becomes obj here, rmb to not use collection variable!
    .filter(function(obj){
      for(let i = 0; i < srcKeys.length; i++) {
        //negative testing 

        if(!obj.hasOwnProperty(srcKeys[i]) || 
        obj[srcKeys[i]] !== source[srcKeys[i]]) {
        //if false, return full array, no filtering
          return false;
        }
      }
      return true;
    });
};

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


// ---------------------------------------------------
// TODO: Spinal Tap Case (all-lowercase-words-joined)
// ---------------------------------------------------
function spinalCase(str) {
  let nonAlpha = str.replace(/[^A-Za-z]/g, " ");
  let zeroCapitalize = nonAlpha.charAt(0).toUpperCase() + nonAlpha.slice(1);
  let split = zeroCapitalize.split(" ");
  let capitalize = [];
  for(let i = 0; i < split.length; i ++) {
    capitalize.push(split[i].charAt(0).toUpperCase() + split[i].slice(1));
  }
  let joined = capitalize.join("")
  let capitalSplit = joined.split(/(?=[A-Z])/);
  console.log(capitalSplit)
  let hyphen = capitalSplit.join("-");
  return hyphen.toLowerCase();
  }

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("Teletubbies say Eh-oh"));

// ---------------------------------------------------
// TODO: Translate Pig Latin
// ---------------------------------------------------
function translatePigLatin(str) {
  let vowels = "aeiou";
  if(vowels.indexOf(str.charAt(0)) !== -1) {
    return str + "way";
  } else {
   for(let i = 0; i < str.length; i ++) {
     if(vowels.indexOf(str[i]) >= 0) {
       return str.slice(i).concat(str.slice(0, i) + "ay")
     }
   }
   return str + "ay"
}
}


console.log(translatePigLatin("california"));
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));


// ---------------------------------------------------
// TODO: Search and Replace (for loops)
// ---------------------------------------------------
function myReplace(str, before, after) {
  let editedAfter = ""
  if(before.charAt(0) === before.charAt(0).toUpperCase()){
    editedAfter = after.charAt(0).toUpperCase() + after.slice(1);
      return str.replace(before, editedAfter)
  } else if (before.charAt(0) === before.charAt(0).toLowerCase() ||
              after.charAt(0) !==  after.charAt(0).toLowerCase()) {
                editedAfter = after.charAt(0).toLowerCase() + after.slice(1);
                  return str.replace(before, editedAfter)
  }
  return str.replace(before, after) 
}


console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));


// ---------------------------------------------------
// TODO: DNA Pairing
// ---------------------------------------------------
function pairElement(str) {

  let dict = {
  "A": "T",
  T: "A",
  G: "C",
  C: "G" 
  };

  let result = [];
  // console.log(dict["T"]);

  for(let i = 0; i < str.length; i ++) {
    result.push([str[i], dict[str[i]]]);
    }
  return result;
  }

console.log(pairElement("GCG"));


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

// ---------------------------------------------------
// TODO: 
// ---------------------------------------------------

// ---------------------------------------------------
// TODO: 
// ---------------------------------------------------

// ---------------------------------------------------
// TODO: 
// ---------------------------------------------------