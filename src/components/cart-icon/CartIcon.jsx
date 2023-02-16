import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIdCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIdCartOpen}>
      <ShoppingIcon className="shopping-icon" />{" "}
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
