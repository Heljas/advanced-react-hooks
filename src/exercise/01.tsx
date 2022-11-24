// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.tsx

import * as React from 'react';

// 🐨 here's where you'll implement your countReducer function.
function countReducer(
  state: {count: number},
  action: {type: 'increment' | 'decrement'; step: number},
) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.step};
    case 'decrement':
      return {count: state.count - action.step};
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  });
  const {count} = state;

  const increment = () => dispatch({type: 'increment', step});
  const decrement = () => dispatch({type: 'decrement', step});

  return (
    <div className="counter">
      <button onClick={decrement}>⬅️</button>
      {count}
      <button onClick={increment}>➡️</button>
    </div>
  );
}

function App() {
  return <Counter />;
}

export default App;
