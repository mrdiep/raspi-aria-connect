import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers';

import './App.css';

function App() {
  return (
    <Provider store={createStore(rootReducer)}>
      <div className="App">
        Test
      </div>
    </Provider>
  );
}

export default App;
