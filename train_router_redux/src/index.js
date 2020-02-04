import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import PagesLinks from "./pages/PagesLinks";
import PagesRouter from "./pages/PagesRouter";

import { Provider } from "react-redux";
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <PagesLinks />
        <PagesRouter />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
