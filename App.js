import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserContextProvider } from "./Context/UserContext";
import { CartContextProvider } from "./Context/CartContext";
import Navigation from "./components/Navigation/Navigation";

export default function App() {
  // const
  return (
    <UserContextProvider>
      <CartContextProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </CartContextProvider>
    </UserContextProvider>
  );
}
