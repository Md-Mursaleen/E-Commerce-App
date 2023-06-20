import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const categoriesData = {
    Appliances: require("../../assets/images/appliances.jpeg"),
    Books: require("../../assets/images/books.jpeg"),
    Electronics: require("../../assets/images/electronics.jpeg"),
    Essentials: require("../../assets/images/essentials.jpeg"),
    Fashion: require("../../assets/images/fashion.jpeg"),
    Mobiles: require("../../assets/images/mobiles.jpeg")
};

const HomeCategories = ({ text }) => {
    return (
        <View style={styles.container}>
            <Image source={categoriesData[text]} style={styles.imageStyle} />
            <Text style={styles.textStyle}>{text}</Text>
        </View>
    );
}

export default HomeCategories;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flexDirection: "column",
        alignItems: "center"
    },
    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    textStyle: {
        marginBottom: 5,
        fontSize: 12,
        fontWeight: "500"
    }
});