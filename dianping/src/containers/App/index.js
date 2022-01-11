import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import ErrorToast from "../../components/ErrorToast";
import { actions as appActions, getError } from "../../redux/modules/app";
import AsyncComponent from "../../utils/AsyncComponent";
import PrivateRoute from "../PrivateRoute";

const Home = AsyncComponent(() => import("../Home"));
const ProductDetail = AsyncComponent(() => import("../ProductDetail"));
const Search = AsyncComponent(() => import("../Search"));
const SearchResult = AsyncComponent(() => import("../SearxhResult"));
const Login = AsyncComponent(() => import("../Login"));
const User = AsyncComponent(() => import("../Urser"));
const Purchase = AsyncComponent(() => import("../Purchase"));

class App extends Component {
  render() {
    const {
      error,
      appActions: { clearError }
    } = this.props;
    return (
      <div className="App">
        <Router basename="/dianping">
          <Routes>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/user" component={User} />
            <Route path="/detail/:id" component={ProductDetail} />
            <Route path="/search" component={Search} />
            <Route path="/search_result" component={SearchResult} />
            <PrivateRoute path="/purchase/:id" component={Purchase} />
            <Route path="/" component={Home} />
          </Routes>
        </Router>
        {error ? <ErrorToast msg={error} clearError={clearError} /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    error: getError(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);