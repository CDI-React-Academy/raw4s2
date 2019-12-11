import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import {store} from './modules/store';
import Navigation from './navigation';
import UserProfile from './UserProfile';

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Navigation />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <UserProfile />
    </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
