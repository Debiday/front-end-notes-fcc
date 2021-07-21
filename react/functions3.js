// More functions
/* --------------------------------------------------- */
/* Using ternary expressions for conditional rendering */
/* --------------------------------------------------- */
const inputStyle = {
    width: 235,
    margin: 5
};

class CheckUserAge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            userAge: ""
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            input: e.target.value,
            userAge: ''
        });
    }
    submit() {
        this.setState(state => ({
            userAge: state.input
        }));
    }
    render() {
        const buttonOne = <button onClick={this.submit}>Submit</button>;
        const buttonTwo = <button>You May Enter</button>;
        const buttonThree = <button>You Shall Not Pass</button>;
        return (
            <div>
                <h3>Enter Your Age to Continue</h3>
                <input
                    style={inputStyle}
                    type='number'
                    value={this.state.input}
                    onChange={this.handleChange}
                    />
                    <br />
                    {
                        this.state.userAge === "" ? buttonOne :
                        this.state.userAge >= 18 ? buttonTwo :
                        buttonThree
                    }
            </div>
        );

    }
};
/* --------------------------------------------------- */
/* Child componenents/ make rendering decisions based on props */
/* --------------------------------------------------- */
//child that takes in the props
class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>{this.props.fiftyFifty ? "You win!" : "You lose!"}</h1>
        )
    };
};

class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => {
            return (
                {
                    counter: this.state.counter + 1
                })
        });
    }
    render() {
        const expression = Math.random() >= .5 ? true : false
        return (
            <div>
                <button onClick={this.handleClick}>Play Again</button>
                <Results fiftyFifty={expression} />
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
}
/* --------------------------------------------------- */
/* Gatekeeper: Change CSS conditionally */
/* --------------------------------------------------- */
class Gatekeeper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ input: event.target.value })
    }
    render() {
        let inputStyle = {
            border: '1px solid black'
        };
        if(this.state.input.length > 15) {
            inputStyle = {
                border: '3px solid red'
            }
        }
        return (
            <div>
                <h3>Don't type too much:</h3>
                <input
                    type="text"
                    style={inputStyle}
                    value={this.state.input}
                    onChange={this.handleChange} />
            </div>
        );
    }
};
/* --------------------------------------------------- */
/* Using Array.map() to dynamically render elements  */
/* --------------------------------------------------- */
const textAreaStyles ={
    width: 235,
    margin: 5
};

class MyToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            toDoList: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
            toDoList: itemsArray
        });
    }
    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }
    render() {
        const items = this.state.toDoList.map(i => <li>{i}</li>);
    return (
        <div>
            <textarea 
                onChange={this.handleChange}
                value={this.state.userInput}
                style={textAreaStyles}
                placeholder='Separate Items With Commas'
                 />
            <br />
            <button onClick={this.handleSubmit}>Create List</button>
            <h1>My "To Do" List:</h1>
            <ul>{items}</ul>
        </div>
        );
    }
}
/* --------------------------------------------------- */
/* Sibling elements unique key values */
/* --------------------------------------------------- */
const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
  ];
  
  function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map(i => <li key={i}>{i}</li>); // Change this line
    return (
      <div>
        <h1>Popular Front End JavaScript Frameworks</h1>
        <ul>
          {renderFrameworks}
        </ul>
      </div>
    );
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

/* --------------------------------------------------- */
/*  */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/*  */
/* --------------------------------------------------- */