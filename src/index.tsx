import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import counterReducer from "./state/reducers";

import { Provider } from "react-redux";

// store
let store = createStore(counterReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
