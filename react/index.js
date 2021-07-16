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
/*  */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/*  */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/*  */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/*  */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/*  */
/* --------------------------------------------------- */