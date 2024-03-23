/*
**************************************************************************
We can have all our authentication and user specific related context here
***************************************************************************
*/

import { useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLogging, setIsLoggin] = useState(false);
  const [user, setUser] = useState(null);

  /*
****************************

****************************
*/
  const getUser = async () => {
    try {
      const userJson = await AsyncStorage.getItem("user");
      const user = userJson !== null ? JSON.parse(userJson) : null;

      user !== null ? (setUser(user), setIsLogged(true)) : setIsLogged(false);
    } catch (err) {}
  };

  /*
****************************

****************************
*/
  const submit = async (values) => {
    setIsLoggin(true);
    // const { fullName, phone, email, password } = values;
    try {
      await AsyncStorage.setItem("user", JSON.stringify(values));
      setUser(values);
      setIsLogged(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoggin(false);
    }
  };
  const logoutUser = async () => {
    try {
      await AsyncStorage.removeItem("user");
      // setloggingIn(true);

      setIsLogged(false);

      // return true;
    } catch (err) {
      return false;
    }
  };
  /*
****************************

****************************
*/
  const contextData = {
    submit: (values) => submit(values),
    isLogged: isLogged,
    isLogging,
    user: user,
    getUser: () => getUser(),
    logoutUser: () => logoutUser(),
  };
  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
