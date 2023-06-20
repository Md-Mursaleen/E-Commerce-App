import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./BottomTabNavigation";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="BottomTab">
                <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
                <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;