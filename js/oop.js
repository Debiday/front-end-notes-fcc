// O.O.P Practice: 
//Taking notes as I do a recap of FCC's JS Algos and DS
// ---------------------------------------------------
// Make Code More Reusable with the this Keyword
// ---------------------------------------------------
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();


// ---------------------------------------------------
// Define a constructor function
// ---------------------------------------------------
function Dog() {
    this.name = "Doge";
    this.color = "blue";
    this.numLegs = 5;
  }
//Create a new instance of Dog called Hound
//let hound = new Dog();

// ---------------------------------------------------
// Extend constructors to receive arguments
// ---------------------------------------------------
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  
  let terrier = new Dog("terry", "blue");
  //check instance: crow instanceof Bird;
  //                terrier instance of Dog; //true

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