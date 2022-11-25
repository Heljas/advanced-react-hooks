// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.tsx

import * as React from 'react';

const CountContext =
  React.createContext<[number, React.Dispatch<React.SetStateAction<number>>]>(
    undefined,
  );

function useCount() {
  const state = React.useContext(CountContext);
  if (state === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return state;
}

const CountProvider = props => {
  const [count, setCount] = React.useState(0);
  const value = [count, setCount] as const;
  return <CountContext.Provider value={value} {...props} />;
};

function CountDisplay() {
  const [count] = useCount();
  return <div>{`The current count is ${count}`}</div>;
}

function Counter() {
  const [, setCount] = useCount();

  const increment = () => setCount(c => c + 1);
  return <button onClick={increment}>Increment count</button>;
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
}

export default App;
