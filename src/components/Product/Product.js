import React from "react";
import "./Product.css";
import PropTypes from "prop-types";

class Product extends React.Component {
  render() {
    const { sale, image, title, price } = this.props;
    return (
      <div className="product-card">
        {sale && price > 60 && <span className="onSale-label">SALE</span>}
        <div className="product-image">
          <img src={image} alt="productImg" />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          {sale && price > 60 ? (
            <div>
              <span className={"sale-price"}>{price * (50 / 100)}$</span>
              <span className={"normal-price"}>{price}$</span>
            </div>
          ) : (
            <h6>{price}$</h6>
          )}
        </div>
      </div>
    );
  }
}
Product.propTypes = {
  sale: PropTypes.bool,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default Product;
