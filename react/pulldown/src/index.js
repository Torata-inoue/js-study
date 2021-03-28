import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import clicked_user from './components/App';

const data = {
  users: [
    {
      name: 'tora',
      icon: 'image.jpg',
      id: 1
    },
    {
      name: 'ora',
      icon: 'imag.png',
      id: 2
    }
  ],
  options: {
    onClickUser: {
      isCloseLists: true,
      isPullUser: false
    }
  }
};


ReactDOM.render(<App data={data}/>,document.getElementById('root'));

useEffect(() => {
  // チップ設置
}, clicked_user);
