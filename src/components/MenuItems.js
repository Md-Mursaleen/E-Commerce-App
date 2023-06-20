import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const images = {
    Deals: require("../../assets/images/deals.png")
};

const MenuItems = ({ title, image, width, height, marginTop }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleText}>{title === "Deals" ? "Deals and Savings" : title}</Text>
                <Image source={title === "Deals" ? images[title] : { uri: image }} style={[styles.imageStyle, { width: width, height: height }, marginTop && { marginTop: marginTop }]} />
            </View>
        </View>
    );
}

export default MenuItems;

const styles = StyleSheet.create({
    container: {
        padding: 5,
        marginHorizontal: -5,
        marginVertical: 5,
        margin: 8,
        width: 175,
        height: 165,
        backgroundColor: "white",
        shadowColor: "#99a5b2",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 3,
        borderWidth: 1,
        borderColor: "#99a5b2",
        borderRadius: 10
    },
    titleText: {
        paddingLeft: 8,
        paddingTop: 5,
        fontSize: 14.8,
        fontWeight: "400"
    },
    imageStyle: {
        alignSelf: "center",
        resizeMode: "contain"
    }
});