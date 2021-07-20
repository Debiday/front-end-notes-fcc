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

/* --------------------------------------------------- */
/*  */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/*  */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/*  */
/* --------------------------------------------------- */