import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocument } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../data/shop-data.js";

//as the actual value you want to access
export const ProductContext = createContext({
  products: [],
});

//the actual component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  // useEffect(() => {
  //   addCollectionAndDocument("categories", SHOP_DATA);
  // }, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
