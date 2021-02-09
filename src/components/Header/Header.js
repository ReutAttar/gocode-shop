import React from "react";
import "./Header.css";
import PropTypes from "prop-types";

const Header = ({ categories, selectFilter }) => {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select onChange={(event) => selectFilter(event.target.value)}>
            <option value="All">All</option>
            {categories.map((category) => (
              <option value={category} key={categories.indexOf(category)}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav>
  );
};
Header.propTypes = {
  categories: PropTypes.array,
  selectFilter: PropTypes.func,
};

export default Header;
