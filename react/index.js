import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(<h1>Hello there1</h1>, document.getElementById("root"))
//What to render, where to render

// ReactDOM.render(JSX, document.getElementById('root'))

const JSX = (
    <div>
      <h1>This is a block of JSX</h1>
      {/* Comment */}
      <p>Here's a subtitle</p>
    </div>
  );


/* --------------------------------------------------- */
/* className and camelCase */
/* --------------------------------------------------- */
  const JSX = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );


/* --------------------------------------------------- */
/* Basic component */
/* --------------------------------------------------- */
const MyComponent = function() {
    // Change code below this line
    return (
      <div>
        <p>Some text.</p>
      </div>
    );
    // Change code above this line
  }


/* --------------------------------------------------- */
/* Component with ES6 Syntax */ 
/* --------------------------------------------------- */
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Hello React!</h1>
        </div>
      );
    }
  };

/* --------------------------------------------------- */
/* Create a Component with Composition */
/* --------------------------------------------------- */
const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* Change code below this line */ }
            <ChildComponent />
          { /* Change code above this line */ }
        </div>
      );
    }
  };

// Another example:
const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* Change code below this line */ }
  
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
            <Fruits />
              <TypesOfFruit />
          { /* Change code above this line */ }
        </div>
      );
    }
  };


/* --------------------------------------------------- */
/* Compose React Components */
/* --------------------------------------------------- */
class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          { /* Change code below this line */ }
            <NonCitrus />
            <Citrus />
          { /* Change code above this line */ }
        </div>
      );
    }
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
            <Fruits />
  
          { /* Change code above this line */ }
          <Vegetables />
        </div>
      );
    }
  };


/* --------------------------------------------------- */
/* Render a class component to the DOM */
/* --------------------------------------------------- */
class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* Change code below this line */}
            <Fruits />
            <Vegetables />
  
          {/* Change code above this line */}
        </div>
      );
    }
  };
  
  // Change code below this line
  ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))


/* --------------------------------------------------- */
/* Pass props to a stateless functional component */
/* --------------------------------------------------- */
const CurrentDate = (props) => {
    return (
      <div>
        { /* Change code below this line */ }
        <p>The current date is: {props.date} </p>
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* Change code below this line */ }
          <CurrentDate date={Date()}/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };


/* --------------------------------------------------- */
/* Array as Props */
/* --------------------------------------------------- */
const List = (props) => {
    { /* Change code below this line */ }
    return <p>{props.tasks.join(", ")}</p>
    { /* Change code above this line */ }
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* Change code below this line */ }
          <List tasks={["walk dog", "workout"]}/>
          <h2>Tomorrow</h2>
          <List tasks={["walk cat", "work", "eat"]}/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };


/* --------------------------------------------------- */
/* Default props */
/* --------------------------------------------------- */
const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  // Change code below this line
  ShoppingCart.defaultProps = { items: 0 }


/* --------------------------------------------------- */
/* Default props plus overriding */
/* --------------------------------------------------- */
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* Change code below this line */ }
      return <Items quantity={10}/>
      { /* Change code above this line */ }
    }
  };


/* --------------------------------------------------- */
/* Defining prop types */
/* --------------------------------------------------- */
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // Change code below this line
  Items.propTypes = { quantity: PropTypes.number.isRequired }
  // Change code above this line
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };


/* --------------------------------------------------- */
/* Review: Props/ stateless functional components/ default/ proptype */
/* --------------------------------------------------- */
class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper />
        </div>
      );
    }
  };
  // Change code below this line
  
  
  const Camper = (props) => {
    return <p>{props.name}</p>
  };
  
  Camper.defaultProps = {
    name: 'CamperBot'
  }
  
  Camper.propTypes = { name: PropTypes.string.isRequired };
  