import React, { useEffect, useState } from 'react';

const App = props => {

  const [state, setState] = useState(props);
  const { name, price } = state;

  useEffect(() => {
    console.log('ComponentDidUpdate')
  });

  // renderしたとき、最初の一回だけ呼ばれる
  useEffect(() => {
    console.log('ComponentDidMount')
  }, []);

  // nameの変更があったとkに呼ばれる
  useEffect(() => {
    console.log('This callback is name only')
  }, [name]);

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  );
};

App.defaultProps = {
  name: 'sample',
  price: 1000
};

export default App;
