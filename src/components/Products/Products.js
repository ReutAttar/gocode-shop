import React from "react";
import SaleCountDown from "../SaleCountDown/SaleCountDown";
import Product from "../Product/Product";
import "./Products.css";
import PropTypes from "prop-types";

class Products extends React.Component {
  state = {
    sale: false,
  };
  productsItems;
  createProduct = (listOfProducts) => {
    return listOfProducts.map(({ title, image, price, id }) => (
      <Product sale={this.state.sale} title={title} price={price} image={image} key={id} />
    ));
  };

  render() {
    if (this.props.filter === "All")
      //the default filter
      this.productsItems = this.createProduct(this.props.products);
    //If the user selected a category to filter
    else {
      // const filteredProducts = this.props.products.filter(({ category }) => {
      //   return category === this.props.filter;
      // });
      this.productsItems = this.createProduct(
        this.props.products.filter(({ category }) => category === this.props.filter)
      );
    }

    return (
      <section className="products">
        <SaleCountDown
          isSale={(isSale) => {
            this.setState({ sale: isSale });
          }}
          sale={this.state.sale}
        />
        {this.productsItems}
      </section>
    );
  }
}

Products.propTypes = {
  products: PropTypes.array,
  filter: PropTypes.string,
};

export default Products;
