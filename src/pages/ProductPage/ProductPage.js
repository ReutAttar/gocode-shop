import React, { useEffect, useState } from "react";
import "./ProductPage.css";

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://fakestoreapi.com/products/${match.params.productId}`);
      const json = await res.json();
      setProduct(json);
    }

    fetchData();
  }, [match.params.productId]);

  //   return <div>Product Details: {product ? product.description : ""}</div>;
  return product ? (
    // <div classNameName="product-page">
    //   <div classNameName="product-page-image">
    //     <img src={product.image} alt="productImg" />
    //   </div>
    //   <div classNameName="product-page-info">
    //     <p>{product.description}</p>
    //     <h5>{product.title}</h5>
    //     <h6>{product.price}$</h6>
    //   </div>
    // </div>
    <div className="container">
      <div className="left">
        <div className="images">
          <img src={product.image} alt="productImg" />
        </div>
        <div className="slideshow-buttons">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
        </div>
        {(product.category === "women clothing" || product.category === "men clothing") && (
          <React.Fragment>
            <p className="pick pTitle">choose size</p>
            <div className="sizes">
              <div className="size">5</div>
              <div className="size">6</div>
              <div className="size">7</div>
              <div className="size">8</div>
              <div className="size">9</div>
              <div className="size">10</div>
              <div className="size">11</div>
              <div className="size">12</div>
            </div>
          </React.Fragment>
        )}
      </div>
      <div className="right">
        <div className="product">
          <p className="pCategory pTitle">{product.category}</p>
          <h1 id="productTitle">{product.title}</h1>
          <h2>{product.price}$</h2>
          <p className="desc">{product.description}</p>

          <div className="buttons">
            <button className="add">Add to Cart</button>
            <button className="like">
              <span>♥</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ProductPage;
