const {
  addByAmount,
  counterReducer,
  fetchGreeting,
  initialState
} = require('../counterSlice');

describe('counterReducer', () => {
  test('updates state when addByAmount is dispatched', () => {
    const state = counterReducer(initialState, addByAmount(5));
    expect(state).toEqual({
      value: 5,
      status: 'idle',
      greeting: ''
    });
  });
});

describe('fetchGreeting async action', () => {
  test('dispatches pending and fulfilled actions and updates state', async () => {
    let state = initialState;
    const dispatch = (action) => {
      state = counterReducer(state, action);
      return action;
    };

    const result = await fetchGreeting('Redux')(dispatch);

    expect(result).toBe('Hello, Redux!');
    expect(state).toEqual({
      value: 0,
      status: 'succeeded',
      greeting: 'Hello, Redux!'
    });
  });
});
