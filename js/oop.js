// O.O.P Practice: 
//Taking notes as I do a recap of FCC's JS Algos and DS
// ---------------------------------------------------
// TODO: Make Code More Reusable with the this Keyword
// ---------------------------------------------------
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();


// ---------------------------------------------------
// TODO: Define a constructor function
// ---------------------------------------------------
function Dog() {
    this.name = "Doge";
    this.color = "blue";
    this.numLegs = 5;
  }
//Create a new instance of Dog called Hound
//let hound = new Dog();

// ---------------------------------------------------
// TODO: Extend constructors to receive arguments
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
// TODO: Check own properties 
// ---------------------------------------------------
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  
  console.log(ownProps);


// ---------------------------------------------------
// TODO: Add a property to ALL prototypes
// ---------------------------------------------------
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");
  
  console.log(beagle.numLegs)


// ---------------------------------------------------
// TODO:
// ---------------------------------------------------

// ---------------------------------------------------
// TODO:
// ---------------------------------------------------

//----------------------------------------------------
// TODO:
// ---------------------------------------------------