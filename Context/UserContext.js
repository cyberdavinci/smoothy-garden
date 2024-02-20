/*
***********************************************
We can have all our authentication and user specific related context here
Still thinking where to place the cart context!
***********************************************
*/

import { useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLogging, setIsLoggin] = useState(false);
  const submit = async (values) => {
    setIsLoggin(true);
    const { fullName, phone, email, password } = values;
    try {
      await AsyncStorage.setItem("user", JSON.stringify(values));
      setIsLogged(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoggin(false);
    }
  };

  const contextData = {
    submit: (values) => submit(values),
    isLogged,
    isLogging,
  };
  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
