import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = configureStore();

const GlobalStore = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};
export default GlobalStore;
