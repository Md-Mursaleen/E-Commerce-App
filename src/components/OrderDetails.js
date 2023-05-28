import { View, Image, StyleSheet } from "react-native";
import React from "react";

const OrderDetails = ({ image }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.imageStyle} />
        </View>
    );
}

export default OrderDetails;

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        marginBottom: 10
    },
    imageStyle: {
        width: 180,
        height: 120,
        resizeMode: "contain",
        backgroundColor: "white",
        borderColor: "#b8baba",
        borderWidth: 1,
        borderRadius: 10
    }
});