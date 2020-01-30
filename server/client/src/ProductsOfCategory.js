import React, { Component } from "react";
import axios from "axios";

class ProductsOfCategory extends Component {
  // ---- array of name , img
  state = { productsOfCategory: [] };

  getProductsOfCategoryFromServer = () => {
    axios
      .get(`/products/${this.props.categoryName}`)
      .then(res => {
        if (res.status === 200) {
          this.setState({ productsOfCategory: res.data });
        } else {
          console.log(`error code : ${res.status}`);
        }
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getProductsOfCategoryFromServer();
  }

  render() {
    const elements = this.state.productsOfCategory.map((product, index) => (
      <div key={index}>
        <p>{product.name}</p>
        <img src={product.img} />
      </div>
    ));

    return (
      <div>
        <h2>{this.props.categoryName}</h2>
        {elements}
      </div>
    );
  }
}

export default ProductsOfCategory;
