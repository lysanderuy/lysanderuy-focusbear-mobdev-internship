const initialState = {
  value: 0,
  status: 'idle',
  greeting: ''
};

const increment = () => ({
  type: 'counter/increment'
});

const addByAmount = (amount) => ({
  type: 'counter/addByAmount',
  payload: amount
});

const fetchGreetingPending = () => ({
  type: 'counter/fetchGreeting/pending'
});

const fetchGreetingFulfilled = (greeting) => ({
  type: 'counter/fetchGreeting/fulfilled',
  payload: greeting
});

const fetchGreeting = (name) => async (dispatch) => {
  dispatch(fetchGreetingPending());
  const greeting = await Promise.resolve(`Hello, ${name}!`);
  dispatch(fetchGreetingFulfilled(greeting));
  return greeting;
};

const counterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'counter/increment':
      return {
        ...state,
        value: state.value + 1
      };
    case 'counter/addByAmount':
      return {
        ...state,
        value: state.value + action.payload
      };
    case 'counter/fetchGreeting/pending':
      return {
        ...state,
        status: 'loading'
      };
    case 'counter/fetchGreeting/fulfilled':
      return {
        ...state,
        status: 'succeeded',
        greeting: action.payload
      };
    default:
      return state;
  }
};

module.exports = {
  addByAmount,
  counterReducer,
  fetchGreeting,
  fetchGreetingFulfilled,
  fetchGreetingPending,
  increment,
  initialState
};
