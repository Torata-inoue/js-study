import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const time = () => setCount(count * 2);
  const divide = () => setCount(count => {
    if (count % 3 === 0) {
      return count / 3;
    } else {
      alert('fuck you!');
    }
  });

  return (
    <>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
      <button onClick={time}>x2</button>
      <button onClick={divide}>3の倍数の時だけ３で割る</button>
    </>
  );
};

export default App;
