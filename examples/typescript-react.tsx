import React, { useState } from "react";

// Define a type for props
export type GreetingProps = {
  name: string;
};

export const Greeting = ({ name }: GreetingProps) => (
  <h2>Hello, {name}!</h2>
);

type CounterProps = {
  initial?: number;
};

const Counter = ({ initial = 0 }: CounterProps) => {
  const [count, setCount] = useState<number>(initial);

  return (
    <div style={{ margin: 16 }}>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <span style={{ margin: "0 1em" }}>{count}</span>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
};

const App = () => {
  const [name, setName] = useState<string>("World");

  return (
    <div style={{ fontFamily: "sans-serif", padding: 32 }}>
      <Greeting name={name} />
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Type your name"
        style={{ marginBottom: 16, padding: 4 }}
      />
      <Counter initial={5} />
    </div>
  );
};

export default App;
