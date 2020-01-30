import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Categories extends Component {
  // ---- array of name , img
  state = { categories: [], redirectToCategory: false };
  getCategoriesFromServer = () => {
    axios
      .get("/categories")
      .then(res => {
        if (res.status === 200) {
          this.setState({ categories: res.data });
        } else {
          console.log(`error code : ${res.status}`);
        }
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getCategoriesFromServer();
  }

  render() {
    if (this.state.redirectToCategory) {
      return <Redirect to="/ProductsOfCategory" />;
    }

    const elements = this.state.categories.map(category => (
      <div
        onClick={() => {
          this.props.setCategoryName(category.name);
          this.setState({ redirectToCategory: true });
        }}
      >
        <h3>{category.name}</h3>
        <img src={category.img}/>
      </div>
    ));
    return (
      <div>
        <h2>Categories</h2>
        {elements}
      </div>
    );
  }
}

export default Categories;
