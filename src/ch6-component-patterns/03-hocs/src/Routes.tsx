import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  RouteComponentProps
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AdminPage = React.lazy(() => import("./AdminPage"));
import ProductsPage from "./ProductsPage";
import Header from "./Header";
// import ProductPage from "./ProductPage";
const ProductPage: React.LazyExoticComponent<any> = React.lazy(() =>
  import("./ProductPage")
);
import LoginPage from "./LoginPage";
import NotFoundPage from "./NotFoundPage";

const Routes: React.FunctionComponent<RouteComponentProps> = props => {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <div>
      <Header title="My Little React Shop" />
      <TransitionGroup>
        <CSSTransition
          key={props.location.key}
          timeout={500}
          classNames="animate"
        >
          <Switch>
            <Redirect exact from="/" to="/products" />
            <Route path="/products/:id" render={routeRenderFunc(ProductPage)} />
            <Route exact={true} path="/products" component={ProductsPage} />
            <Route path="/admin">
              {loggedIn ? (
                <React.Suspense
                  fallback={<div className="page-container">Loading...</div>}
                >
                  <AdminPage />
                </React.Suspense>
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/login" component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

const RoutesWrap: React.FunctionComponent = () => {
  return (
    <Router>
      <Route component={Routes} />
    </Router>
  );
};

const routeRenderFunc = (
  Component: React.LazyExoticComponent<React.ComponentType<any>>
) => (props: RouteComponentProps<any>): any => {
  return (
    <React.Suspense fallback={<div className="page-container">Loading...</div>}>
      <Component {...props} />
    </React.Suspense>
  );
};

// export default Routes;

export default RoutesWrap;
