import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();
      setProducts(json);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const getCategories = () => {
      const groupBy = (xs, key) =>
        xs.reduce((rv, x) => {
          rv[x[key]] = true || [];
          return rv;
        }, {});
      setCategories(Object.keys(groupBy(products, "category")));
    };

    getCategories();
  }, [products]);

  return (
    <React.Fragment>
      <Header selectFilter={(filter) => setFilter(filter)} categories={categories} />
      <Products filter={filter} products={products} />
    </React.Fragment>
  );
};

export default App;
