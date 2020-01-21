import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux'
import rootReducer from './reducers';
import Activity from './activities-page/components/activity.component';

import './App.css';
function App() {
  return (
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
      <div className="App">
        <Activity />
      </div>
    </Provider>
  );
}

export default App;
