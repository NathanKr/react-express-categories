import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import ProductsOfCategory from "./ProductsOfCategory";
class App extends Component {
  state = { category: null };

  setCategory = category => {
    this.setState({ category });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/Categories">Categories</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/Categories"
              render={() => (
                <Categories
                  setCategory={this.setCategory}
                />
              )}
            />
            <Route
              exact
              path="/ProductsOfCategory"
              render={() => (
                <ProductsOfCategory
                  productsOfCategory={this.state.productsOfCategory}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
