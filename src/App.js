import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

class App extends React.Component {
  state = {
    products: [],
    categories: [],
    filter: "All",
  };
  async componentDidMount() {
    const res = await fetch("https://fakestoreapi.com/products");
    const json = await res.json();
    this.setState({ products: json });
    this.getCategories();
  }

  getCategories = () => {
    const groupBy = (xs, key) =>
      xs.reduce((rv, x) => {
        rv[x[key]] = true || [];
        return rv;
      }, {});
    this.setState({ categories: Object.keys(groupBy(this.state.products, "category")) });
  };

  render() {
    return (
      <React.Fragment>
        <Header selectFilter={(filter) => this.setState({ filter: filter })} categories={this.state.categories} />
        <Products filter={this.state.filter} products={this.state.products} />
      </React.Fragment>
    );
  }
}

export default App;
