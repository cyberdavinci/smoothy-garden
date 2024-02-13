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
      ? (setCartList([...cartList, item]), incrementCartCost(item))
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
    const indexofItemToIncrement = cartList.findIndex(
      (cart) => cart?.id === item?.id
    );

    if (indexofItemToIncrement !== -1) {
      // Create a shallow copy of the cartList
      const updatedCartList = [...cartList];
      const itemToIncrement = updatedCartList[indexofItemToIncrement];

      // Update the kilos for the specific item
      itemToIncrement.numberOfKilos += 1;

      // Calculate the new cart cost
      const newCartCost = item.pricePerKg + cartCost;
      setCartCost(newCartCost);

      // Update the state with the new cartList
      setCartList(updatedCartList);
    } else {
      console.log("Item not found");
    }
  };

  //
  // const removeFromListIfNumberOfKilosIsZero = (item) => {
  //   const newList = cartList.filter((cart) => item?.id != cart?.id);
  //   setCartList([...newList]);
  // };
  //
  const decrementNumberOfKilos = (item) => {
    cartList?.map((cart) => {
      cart.id === item.id
        ? cart?.numberOfKilos >= 2
          ? ((cart.numberOfKilos -= 1),
            setCartCost((prev) => prev - cart?.pricePerKg))
          : console.log("Cannot go down!")
        : cart.numberOfKilos;
    });
    // setCartList([...newCartList]);
    // setCartCost((prev) => prev - item?.pricePerKg);
    // removeFromListIfNumberOfKilosIsZero();
  };
  //
  const decrementCartCost = (item) => {};
  //
  const removeFromCart = (item) => {
    const newList = cartList.filter((cart) => item?.id != cart?.id);
    setCartList([...newList]);
  };
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
    removeFromCart: (item) => {
      removeFromCart(item);
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
