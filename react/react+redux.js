/* --------------------------------------------------- */
/* Displaying messages as UL */
/* --------------------------------------------------- */
class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
    }
    handleChange(event) {
        this.setState({
            input: event.target.value,
            messages: this.state.messages
        });
    }
    submitMessage() {
        this.setState({
            input: '',
            messages: [...this.state.messages, this.state.input]
        })
    }
    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
                <button onClick={this.submitMessage.bind(this)}>Submit</button>
                <ul>
                    {this.state.messages.map((x, i) => {
                        return <li key={i}>{x}</li>
                    })}
                </ul>
            </div>
        );
        }
    };
/* --------------------------------------------------- */
/* Extract state logic to redux */
/* --------------------------------------------------- */
const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message
    }
}

const messageReducer = (previousState = [], action) => {
    switch(action.type) {
        case ADD:
            return [...previousState, action.message];
        default:
            return previousState;
    }
};

const store = Redux.createStore(messageReducer);
/* --------------------------------------------------- */
/* Full code: using provider to connect redux to react */
/* --------------------------------------------------- */
//Redux portion
const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message
    }
};

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD: 
            return [...state, action.message];
        default:
            return state;
    }
};

const store = Redux.createStore(messageReducer);

//React portion
class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    submitMessage() {
        this.setState((state) => {
            const currentMessage = state.input;
            return {
                input: '',
                messages: state.messages.concat(currentMessage)
            };
        });
    }
    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input 
                    value={this.state.input}
                    onChange={this.handleChange}/><br/>
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                    {this.state.messages.map( (message, idx) => {
                        return (
                            <li key={idx}>{message}</li>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store = {store}>
                <DisplayMessages />
            </Provider>
        );
    }
};
/* --------------------------------------------------- */
/* mapStateToProps & mapDispatchToProps */
/* --------------------------------------------------- */
//getting methods from the redux store?
const state = [];

const mapStateToProps = state => {
    return {
        messages: state
    }
}
/* --------------------------------------------------- */
/* Map dispatch to props */
/* --------------------------------------------------- */
const addMessage = (message) => {
    return {
        type: 'ADD',
        message: message
    }
};

const mapDispatchToProps = dispatch => {
    return {
        submitNewMessage: (message) => {
            dispatch(addMessage(message))
        }
    }
}
/* --------------------------------------------------- */
/* Connect method to mapStateToProps and mapDispatchToProps */
/* --------------------------------------------------- */
const addMessage = (message) => {
    return {
        type: 'ADD',
        message: message
    }
};

const mapStateToProps = (state) => {
    return {
        messages: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => {
            dispatch(addMessage(message));
        }
    }
};

class Presentational extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h3>This is a Presentational Component</h3>
    }
};

const connect = ReactRedux.connect;

//TODO: Note this!
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational)
/* --------------------------------------------------- */
/* Full? Connect redux to the messages app */
/* --------------------------------------------------- */
//Redux
const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message: message
    }
};

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state, action.message
            ];
        default: 
            return state;
    }
};

const store = Redux.createStore(messageReducer);

//React
class Presentational extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    submitMessage() {
        this.setState((state) => {
            const currentMessage = state.input;
            return {
                input: '',
                messages: state.messages.concat(currentMessage)
            };
        });
    }
    render() {
        return (
            <div>
                <h2>Type in a new message:</h2>
                <input 
                    value={this.state.input}
                    onChange={this.handleChange}/><br/>
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                    {this.state.messages.map((message, idx) => {
                        return (
                            <li key={idx}>{message}</li>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
 };

 //React+redux
 const mapStateToProps = (state) => {
     return { messages: state }
 };

 const mapDispatchToProps = (dispatch) => {
     return {
         submitNewMessage: (newMessage) => {
             dispatch(addMessage(newMessage))
         }
     }
 };

 const Provider = ReactRedux.Provider;
 const connect = ReactRedux.connect;

 const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)

 class AppWrapper extends React.Component {
     constructor(props) {
         super(props);
     }
     render() {
         return (
             <Provider store = {store}>
                 <Container />
             </Provider>
         );
     }
 };
/* --------------------------------------------------- */
/* */
/* --------------------------------------------------- */
