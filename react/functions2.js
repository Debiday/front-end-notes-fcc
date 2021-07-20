/* --------------------------------------------------- */
/* A simple counter */

import React from "react";
import { unstable_getThreadID } from "scheduler/tracing";

/* --------------------------------------------------- */
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment() {
        this.setState(state => ({
            count: state.count + 1
        }));
    }
    decrement() {
        this.setState(state => ({
            count: state.count - 1
        }));
    }
    reset() {
        this.setState(state => ({
            count: 0
        }));
    }
    render() {
        return (
            <div>
                <button className='inc' onClick={this.increment}>Increment!</button>

            </div>
        )
    }
 }
/* --------------------------------------------------- */
/* Create a controlled input */
/* --------------------------------------------------- */
class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        //initialized with input that holds an empty string
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    //method with (event) as parameter
    //receives an event object from the input element below(div)
    handleChange(event) {
        this.setState({
            input: event.target.value
            //event.target.value accesses this string from the html and updates
        });
    }
    render() {
        return (
            <div>
                {/* value is equal to the input property of the components state. initially empty string. */}
                {/* onchange allows input box to register changes from the state of the input box */}
                {/* Summary: value gets sent to state, onchange registers the changes */}
                <input value={this.state.input} onChange={this.handleChange.bind(this)}>{this.value}</input>
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
 };
/* --------------------------------------------------- */
/* Created a controlled form */
/* --------------------------------------------------- */
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault()
        this.setState ({
            submit: this.state.input
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange} />
                    <button type='submit'>Submit!</button>
                    <h1>{this.state.submit}</h1>
                </form>
            </div>
        );
    }
}
/* --------------------------------------------------- */
/* Pass state as props to Child Components */
/* --------------------------------------------------- */
// Notes: Separating state logic from UI logic/ parent >> child
// Here navbar is the parent holding the state, sharing logic to a <h1> tag
class myApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'CamperBot'
        }
    }
    render() {
        return (
            <div>
                <p>Parent</p>
                <Navbar name={this.state.name} />
            </div>
        );
    }
};

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Hello, my name is : {this.props.name} </h1>
            </div>
        );
    }
};
/* --------------------------------------------------- */
/* Passing methods/ callback as props */
/* --------------------------------------------------- */
//parent component
class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState ({
            inputValue: event.target.value
        });
    }
    render() {
        return(
            <div>
                <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
                <RenderInput input={this.state.inputValue} />
            </div>
        );
    }
};
//child component
class GetInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Get Input:</h3>
                <input 
                    value={this.props.input}
                    onChange={this.props.handleChange} />
            </div>
        );
    }
 };

 class RenderInput extends React.Component {
     constructor(props) {
         super(props);
     }
     render() {
         return (
             <div>
                 <h3>Input Render:</h3>
                 <p>{this.props.input}</p>
             </div>
         );
     }
 };
/* --------------------------------------------------- */
/* Using the lifecycle method >>> componentDidMount with timeout e.g.*/
/* --------------------------------------------------- */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUsers: null
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUsers: 1273
            });
        }, 2500);
    } //simulating an API call
    render() {
        return (
            <div>
                <h1>Active Users: {this.state.activeUsers}</h1>
            </div>
        );
    }
} 
/* --------------------------------------------------- */
/* Add Event Listeners */
/* --------------------------------------------------- */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress)
    }
    handleEnter() {
        this.setState((state => ({
            message: state.message + 'You pressed the enter key! '
        }));
    }
    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }
    render() {
        return (
            <div>
            <h1>{this.state.message}</h1>
            </div>
        );
    }
};
/* --------------------------------------------------- */
/* nextProps & shouldComponentUpdate update only even numbers */
/* --------------------------------------------------- */
class OnlyEvens extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I update?');
        if (nextProps.value % 2 == 0) {
            return true;
        }
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render() {
        return <h1>{this.props.value}</h1>
    }
}

class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.addValue = this.addValue.bind(this);
        }
        addValue() {
            this.setState(state => ({
                value: state.value + 1
            }));
        }
        render() {
            return (
                <div>
                    <button onClick={this.addValue}>Add</button>
                    <OnlyEvens value={this.state.value} />
                </div>
            );
        }
     }
/* --------------------------------------------------- */
/* Inline styles in react */
/* --------------------------------------------------- */
const styles = ({
    color: "purple",
    fontSize: 40,
})

class Colorful extends React.Component {
    render() {
        return (
            <div style={styles}>Style Me!</div>
        );
    }
};
/* --------------------------------------------------- */
/* Render with if-else condition */
/* --------------------------------------------------- */
class myComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState((state) => ({
            display: !state.display
        }));
    }
    render() {
        if(this.state.display) {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                    <h1>Displayed!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                </div>
            )
        }}
    };
/* --------------------------------------------------- */
/* Render with && condition (more concise) */
/* --------------------------------------------------- */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState(state => ({
            display: !state.display
        }));
    }
    render() {
        return(
            <div>
                <button onClick={this.toggleDisplay}></button>
                {this.state.display && <h1>Displayed!</h1>}
            </div>
        );
    }
 };
