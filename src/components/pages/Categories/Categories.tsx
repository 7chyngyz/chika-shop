import React from "react";
import scss from "./Categories.module.scss";

const Categories = () => {
  return (
    <section className={scss.Categories}>
      <div className="container">
        <div className={scss.content}>
          <select>
            <option>Woman’s Fashion</option>
          </select>
          <select >
            <option>Men’s Fashion</option>
          </select>
          <ul>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Categories;
