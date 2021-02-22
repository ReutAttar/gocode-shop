import React, { useEffect, useState } from "react";
import Products from "../components/Products/Products";
import Header from "../components/Header/Header";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

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

  useEffect(() => {
    if (products.length > 0) {
      setMinPrice(Math.floor(Math.min(...products.map(({ price }) => price))));
      setMaxPrice(Math.ceil(Math.max(...products.map(({ price }) => price))));
    }
  }, [products]);

  // useEffect(() => {
  //   if ((minPrice !== 0) & (maxPrice !== 0)) {
  //     setPriceRange([minPrice, maxPrice]);
  //   }
  //   // console.log(priceRange);
  //   // console.log(minPrice);
  // }, [maxPrice, minPrice]);

  return (
    <React.Fragment>
      <Header
        selectedFilter={setFilter}
        categories={categories}
        selectedRange={setPriceRange}
        // priceRange={priceRange}
        MIN={minPrice}
        MAX={maxPrice}
      />
      <Products filter={filter} products={products} priceRange={priceRange} />
    </React.Fragment>
  );
};

export default Home;
