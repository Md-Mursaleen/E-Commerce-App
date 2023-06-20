import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView } from "react-native";
import { cartData } from "../data/CartScreenData";
import { LinearGradient } from "expo-linear-gradient";
import HomeAddress from "../components/HomeAddress";
import CartItems from "../components/CartItems";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CartScreen = () => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={["rgba(29,201,192,255)", "rgba(110,221,216,255)"]} locations={[0.5, 1.0]}>
                <View style={styles.headerContainer}>
                    <View style={styles.searchContainer}>
                        <MaterialIcons name="search" size={23} />
                        <TextInput placeholder="Search Amazon.in" placeholderTextColor="#8f8f8f" style={styles.textinputStyle} />
                    </View>
                    <View style={styles.micStyle}>
                        <MaterialCommunityIcons name="microphone" size={23} color="black" />
                    </View>
                </View>
            </LinearGradient>
            <HomeAddress />
            <View style={styles.infoContainer}>
                <Text style={styles.textStyle}>Subtotal</Text>
                <Text style={styles.priceStyle}>₹948</Text>
            </View>
            <View style={styles.deliveryContainer}>
                <MaterialIcons name="verified" size={22} color="teal" style={{ marginRight: 5 }} />
                <Text style={styles.deliveryText}>Your order is eligible for FREE delivery</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.buttonSubContainer}>
                    <Text style={styles.buttonText}>Proceed to buy (2 items)</Text>
                </Pressable>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {cartData.map((data, index) => (
                    <CartItems key={index} title={data.title} image={data.image} price={data.price} border={data.border} />
                ))}
            </ScrollView>
        </View>
    );
}

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    headerContainer: {
        height: 100,
        flexDirection: "row",
        alignItems: "center"
    },
    searchContainer: {
        marginTop: 38,
        marginLeft: 15,
        padding: 7.5,
        width: "84%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#99a5b2",
        borderRadius: 8
    },
    textinputStyle: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: "500"
    },
    micStyle: {
        marginTop: 35,
        marginRight: 10,
        marginLeft: "auto"
    },
    infoContainer: {
        marginLeft: 10,
        marginTop: 8,
        flexDirection: "row",
        alignItems: "center"
    },
    textStyle: {
        fontSize: 22,
        fontWeight: "600"
    },
    priceStyle: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: "bold"
    },
    deliveryContainer: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    deliveryText: {
        marginLeft: 5,
        fontWeight: "500",
        color: "teal"
    },
    buttonContainer: {
        marginTop: 5,
        borderBottomWidth: 1,
        borderColor: "gray"
    },
    buttonSubContainer: {
        marginBottom: 10,
        marginHorizontal: "5%",
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gold",
        borderRadius: 5
    },
    buttonText: {
        fontWeight: "500"
    }
});