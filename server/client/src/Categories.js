import React, { Component } from "react";
import axios from "axios";

class Categories extends Component {
  // ---- array of name , img
  state = { categories: [] };
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
    const elements = this.state.categories.map(category => (
      <p onClick={() => this.props.setCategory(category)}>{category.name}</p>
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
