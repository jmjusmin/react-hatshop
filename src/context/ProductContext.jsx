import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data.json";

//as the actual value you want to access
export const ProductContext = createContext({
  products: [],
});

//the actual component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};