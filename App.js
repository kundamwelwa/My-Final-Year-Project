import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Checkout from "./screens/Checkout";
import Cart from "./screens/Cart";
import Verification from "./screens/Verification";
import OrderComplete from "./screens/OrderComplete";
import Biometric from "./screens/Biometric";
import Item from "./components/Item";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Order Complete" component={OrderComplete} />
        <Stack.Screen name="Biometric" component={Biometric} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
