// Notes from FCC's REDUX module
/* --------------------------------------------------- */
/* Creating 1st Redux Store */
/* --------------------------------------------------- */
const reducer = (state = 5) => {
    return state;
}

let store = Redux.createStore(reducer);
/* --------------------------------------------------- */
/* Get state */
/* --------------------------------------------------- */
const store = Redux.createStore(
    (state = 5) => state
);

const currentState = store.getState();
/* --------------------------------------------------- */
/* Define an action creator */
/* --------------------------------------------------- */
//action creators create objects that represent action events
const action = {
    type: 'LOGIN'
  }
  // Define an action creator here:
  function actionCreator() {
    return action;
  }
/* --------------------------------------------------- */
/* Dispatch an action event */
/* --------------------------------------------------- */
const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  // Dispatch the action here:
  store.dispatch(loginAction());
/* --------------------------------------------------- */
/* Handle an action in the store */
/* --------------------------------------------------- */
const defaultState = {
    login: false
};

const reducer = (state = defaultState, action) => {
    if (action.type === "LOGIN") {
        return {
            login: true
        };
    } else {
        return state
    };
};

const store = Redux.createStore(reducer);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};
/* --------------------------------------------------- */
/* Using switch statements to handle multiple actions */
/* --------------------------------------------------- */
const defaultState = {
    authenticated: false
};

const authReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                authenticated: true
            };
        case "LOGOUT":
            return {
                authenticated: false
            };
        default:
            return defaultState;
    }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
    return {
        type: 'LOGIN'
    }
};

const logoutUser = () => {
    return {
        type: 'LOGOUT'
    }
};
/* --------------------------------------------------- */
/* The Proper Way to Write Action Types? */
/* --------------------------------------------------- */
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
    authenticated: false
};

const authReducer = (state = defaultState, action) => {

    switch (action.type) {
        case LOGIN:
            return {
                authenticated: true
            }
        case LOGOUT: 
            return {
                authenticated: false
            }
        default:
            return state;
    }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
    return {
        type: LOGIN
    }
};

const logoutUser = () => {
    return {
        type: LOGOUT
    }
};
/* --------------------------------------------------- */
/* Register a store listener */
/* --------------------------------------------------- */
const ADD = 'ADD';

const reducer = (state = 0, action) => {
    switch(action.type) {
        case ADD:
            return state + 1;
        default:
            return state;
    }
};

const store = Redux.createStore(reducer);

let count = 0;

const incrementCounter = () => count +=1
store.subscribe(incrementCounter);

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
//1 //2 //3
/* --------------------------------------------------- */
/* Combine multiple reducers*/
/* --------------------------------------------------- */
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT: 
            return state - 1;
        default:
            return state;
    }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) =>
{
    switch(action.type) {
        case LOGIN:
            return {
                authenticated: true
            }
        case LOGOUT:
            return {
                authenticated: false
            }
        default:
            return state;
    }
};

#TODO: Combining multiple reducers
const rootReducer =  Redux.combineReducers({
    auth: authReducer,
    count: counterReducer
});

const store = Redux.createStore(rootReducer);
/* --------------------------------------------------- */
/* Send action data to the store */
/* --------------------------------------------------- */
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
    switch(action.type) {
        case ADD_NOTE:
            return action.text;
        default:
            return state;
    }
};

const addNoteText = (note) => {
    return {
        type: ADD_NOTE,
        text: note
    }
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello'));
console.log(store.getState());
/* --------------------------------------------------- */
/* Using middleware to handle async actions */
/* --------------------------------------------------- */
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

//method that holds actions
const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} } }

const handleAsync = () => {
    //releases state from store (messenger)
    return function(dispatch) {
        //dispatch request action
        dispatch(requestingData());
        setTimeout(function() {
            let data = {
                users: ['Jeff', 'William', 'Alice']
            }
        //dispatch received data action after first dispatch
        dispatch(receivedData(data));
        }, 2500);
    }
};

const defaultState = {
    fetching: false,
    users: []
};

const asyncDataReducer = (state = defaultState, action) => {
    switch(action.type) {
        case REQUESTING_DATA:
            return {
                fetching: true,
                users: []
            }
        case RECEIVED_DATA:
            return {
                fetching: false,
                users: action.users
            }
        default: 
            return state;
    }
};

const store = Redux.createStore(
    asyncDataReducer,
    Redux.applyMiddleware(ReduxThunk.default)
);
/* --------------------------------------------------- */
/* */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/* */
/* --------------------------------------------------- */