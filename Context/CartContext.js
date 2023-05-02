import React, { useState, createContext } from "react";

const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [cartCost, setCartCost] = useState(0);
  const [cartCounter, setCartCounter] = useState(0);
  const [currentCartID, setCurrentCartId] = useState(0);
  //
  const checkIfCartExist = (item) => {
    const itemIndex = cartList.findIndex(
      (cartItem) => cartItem?.id === item?.id
    );
    if (itemIndex === -1) {
      // // item does not exist in cart, add it to the cart
      // setCartList([...cartList, item]);
      // incrementCartCost(item)
      return true;
    } else {
      return false;
    }
  };
  //
  const addToCart = (item) => {
    // setCartList([...cartList, { ...item, inCart: true }]);
    //
    checkIfCartExist(item)
      ? setCartList([...cartList, item])
      : console.log("Already Exist in Cart!!");
    // setCurrentCartId(item.id);
  };
  //

  //
  const incrementCartCost = (item) => {
    checkIfCartExist(item)
      ? setCartCost(cartCost + item?.pricePerKg)
      : console.log("Already Exist in Cart!!");
  };
  console.log(cartCost);
  //
  const decrementCartCost = (item) => {};
  //
  const removeFromCart = (item) => {};
  //
  const clearCart = () => {
    setCartList([]);
    setCartCost(0);
  };
  //
  const carContextData = {
    addToCart: (item) => {
      addToCart(item);
    },
    incrementCartCost: (item) => {
      incrementCartCost(item);
    },
    clearCart: () => {
      clearCart();
    },
    cartList: cartList,
    currentCartID: currentCartID,
    cartCounter: cartCounter,
    cartCost: cartCost,
  };
  return (
    <CartContext.Provider value={carContextData}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
