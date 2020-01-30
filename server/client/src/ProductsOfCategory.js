import React, { Component } from 'react';

class ProductsOfCategory extends Component {
    render() {
        const elements = this.props.productsOfCategor.map(product =><p>{product.name}</p>)

        return (
            <div>
                {elements}
            </div>
        );
    }
}

export default ProductsOfCategory;
  
