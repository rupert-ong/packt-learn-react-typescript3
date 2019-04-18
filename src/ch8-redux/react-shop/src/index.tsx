import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "redux";

import configureStore from "./store";
import { IApplicationState } from "./store";

import "./index.css";
import Routes from "./Routes";

interface IProps {
  store: Store<IApplicationState>;
}

const Root: React.FunctionComponent<IProps> = props => {
  return (
    <Provider store={props.store}>
      <Routes />
    </Provider>
  );
};

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById(
  "root"
) as HTMLElement);
