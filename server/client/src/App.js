import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import ProductsOfCategory from "./ProductsOfCategory";
class App extends Component {
  state = { categoryName: null };

  setCategoryName = categoryName => {
    this.setState({ categoryName });
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
                setCategoryName={this.setCategoryName}
                />
              )}
            />
            <Route
              exact
              path="/ProductsOfCategory"
              render={() => (
                <ProductsOfCategory
                  categoryName={this.state.categoryName}
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
