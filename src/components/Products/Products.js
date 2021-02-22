import React, { useEffect, useState } from "react";
import SaleCountDown from "../SaleCountDown/SaleCountDown";
import Product from "../Product/Product";
import "./Products.css";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const Products = ({ products, filter, priceRange }) => {
  const [sale, setSale] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [byPriceProducts, setByPriceProducts] = useState(products);

  useEffect(() => {
    filter === "All"
      ? setFilteredProducts(products)
      : setFilteredProducts(products.filter(({ category }) => category === filter));
  }, [filter, products]);

  useEffect(() => {
    // console.log(priceRange);
    const [min, max] = priceRange;
    // console.log(min + " " + max);
    console.log(products.filter(({ price }) => price >= min && price <= max));
    setFilteredProducts(products.filter(({ price }) => price >= min && price <= max));
  }, [priceRange, products]);

  // let unique = byPriceProducts.concat(filteredProducts);
  // unique = [...new Set([...byPriceProducts, ...filteredProducts])];
  const productsItems = filteredProducts.map(({ title, image, price, id }) => (
    <Product sale={sale && price > 60} title={title} price={price} image={image} key={id} id={id} />
  ));

  return (
    <section className="products">
      <SaleCountDown onFinish={setSale} />
      {productsItems}
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.array,
  filter: PropTypes.string,
};

export default Products;
