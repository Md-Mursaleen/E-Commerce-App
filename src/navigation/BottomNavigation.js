import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import MenuScreen from "../screens/MenuScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const BottomTab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <NavigationContainer>
            <BottomTab.Navigator screenOptions={
                {
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#017d8b",
                    tabBarInactiveTintColor: "black",
                    headerShown: false
                }
            }>
                <BottomTab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-outline" size={30} color={color} />
                    )
                }} />
                <BottomTab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-outline" size={30} color={color} />
                    )
                }} />
                <BottomTab.Screen name="Cart" component={CartScreen} options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cart-outline" size={30} color={color} />
                    )
                }} />
                <BottomTab.Screen name="Menu" component={MenuScreen} options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="menu" size={30} color={color} />
                    )
                }} />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}

export default BottomNavigation;