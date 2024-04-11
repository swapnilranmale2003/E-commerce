import React from "react";
import { PRODUCTS } from "../../product";
import Product from "./Product";
import './Shop.css'
const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-title">
        <h1>Crowd Shoppy!</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => {
          return <Product data={product} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
