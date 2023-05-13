import React, { useState, createContext } from "react";

const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [cartCost, setCartCost] = useState(0.0);
  const [numberOfKilos, setNumberOfKilos] = useState(1);
  const [currentCartID, setCurrentCartId] = useState(0);
  //
  const checkIfCartExist = (item) => {
    const itemIndex = cartList.findIndex(
      (cartItem) => cartItem?.id === item?.id
    );
    if (itemIndex === -1) {
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
      ? setCartCost((prev) => prev + item.pricePerKg)
      : console.log("Already Exist in Cart!!");
  };
  //
  const incrementNumberOfKilos = (item) => {
    cartList?.map((cart) => {
      cart.id === item.id ? (cart.numberOfKilos += 1) : cart.numberOfKilos;
    });
    setCartCost((prev) => item?.pricePerKg + prev);
  };
  //
  const removeFromListIfNumberOfKilosIsZero = () => {
    const filterOutItemsWithZeroKilo = cartList.filter(
      (cart) => cart.numberOfKilos !== 0
    );
    setCartList([...filterOutItemsWithZeroKilo]);
  };
  //
  const decrementNumberOfKilos = (item) => {
    cartList.map((cart) => {
      cart.id === item.id ? (cart.numberOfKilos -= 1) : cart.numberOfKilos;
    });
    setCartCost((prev) => prev - item?.pricePerKg);
    removeFromListIfNumberOfKilosIsZero();
  };
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
    incrementNumberOfKilos: (item) => {
      incrementNumberOfKilos(item);
    },
    decrementNumberOfKilos: (item) => {
      decrementNumberOfKilos(item);
    },
    clearCart: () => {
      clearCart();
    },
    cartList: cartList,
    currentCartID: currentCartID,
    cartCost: cartCost,
  };
  return (
    <CartContext.Provider value={carContextData}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
