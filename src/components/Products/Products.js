import React, { useState } from "react";
import SaleCountDown from "../SaleCountDown/SaleCountDown";
import Product from "../Product/Product";
import "./Products.css";
import PropTypes from "prop-types";

const Products = ({ products, filter }) => {
  const [sale, setSale] = useState(true);
  let filteredProducts;

  filter === "All"
    ? (filteredProducts = products)
    : (filteredProducts = products.filter(({ category }) => category === filter));

  const productsItems = filteredProducts.map(({ title, image, price, id }) => (
    <Product sale={sale} title={title} price={price} image={image} key={id} />
  ));

  return (
    <section className="products">
      <SaleCountDown
        isSale={(isSale) => {
          setSale(isSale);
        }}
        sale={sale}
      />
      {productsItems}
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.array,
  filter: PropTypes.string,
};

export default Products;
