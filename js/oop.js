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
// TODO: Separate ownprops and prototype props
// ---------------------------------------------------
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
  
  for (let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }


// ---------------------------------------------------
// TODO: Making sure prototype is linked to constructor
// ---------------------------------------------------
function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype = {
    constructor: Dog,//Note**
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
//Check prototype of
//e.g. Dog.prototype.isPrototypeOf(beagle);


//----------------------------------------------------
// TODO: DRY Inheritance
// ---------------------------------------------------
function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
  };

//supertype
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
    console.log("nom nom nom");
  } 
  };


//----------------------------------------------------
// TODO: Inherit behaviour from a supertype
// ---------------------------------------------------
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line


//----------------------------------------------------
// TODO: Set child's prototype to an instance of the parent
// ---------------------------------------------------
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();


//----------------------------------------------------
// TODO: Reset inherited constructor property
// ---------------------------------------------------
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
// Reset constructor to nearest parent?
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();


//----------------------------------------------------
// TODO: Add methods after inheritance
// ---------------------------------------------------
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof!");
} //received its own methods by chaining them onto its prototype


// Only change code above this line

let beagle = new Dog();


console.log(beagle.bark());
console.log(beagle.eat());
// Now beagle has both the eat and bark methods


//----------------------------------------------------
// TODO: Override inherited methods
// ---------------------------------------------------
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird."
};

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

//----------------------------------------------------
// TODO: Mixins, add common behaviour btw loosely related objects
// ---------------------------------------------------
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("Gliding, wooosh!");
    }
  }
  
  glideMixin(bird);
  glideMixin(boat);
  
  bird.glide();
  boat.glide();


//----------------------------------------------------
// TODO: Closures and private variables/ methods
// ---------------------------------------------------
function Bird() {
    let weight = 15;
  
    this.getWeight = function() {
      return weight;
    };
  }
  
  let ducky = new Bird();
  console.log(ducky.getWeight());


//----------------------------------------------------
// TODO: Immediately invoked function expression
// ---------------------------------------------------
function makeNest() {
    console.log("A cozy nest is ready");
  }

//VS

  (function () {
    console.log("A cozy nest is ready");
  })();


//----------------------------------------------------
// TODO: Combine two mixins to create a module
// ---------------------------------------------------
let isCuteMixin = function(obj) {
    obj.isCute = function() {
      return true;
    };
  };
  let singMixin = function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
  };

  //VS

  let funModule = (function () {
    return {
      isCuteMixin: function(obj) {
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
    }
  })();

//How to use it
//motionModule.glideMixin(duck);
//duck.glide();


// End-of-notes