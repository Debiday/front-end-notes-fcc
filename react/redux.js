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
/* */
/* --------------------------------------------------- */
/* --------------------------------------------------- */
/* */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/* */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/* */
/* --------------------------------------------------- */