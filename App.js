import React from "react";
import { Provider } from "react-redux";
import {store} from "./store/store";
import CounterButton from "./CounterButton"

export default function App() {
  return (
    <Provider store={store}>
      <CounterButton />
    </Provider>
  );
}


