import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const HomeProduct = ({ image, text1, text2, price }) => {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    const ratingsData = [
        {
            name: "star"
        },
        {
            name: "star"
        },
        {
            name: "star"
        },
        {
            name: "star"
        }
    ];
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.imageStyle} />
            <View style={{ marginTop: 10 }}>
                <Text style={styles.imageText}>{text1}</Text>
                <Text style={styles.imageText}>{truncate(text2, 55)}</Text>
                <View style={styles.ratingContainer}>
                    {ratingsData.map((rating, index) => (
                        <FontAwesome name={rating.name} size={18} color="gold" key={index} />
                    ))}
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.priceText}>{"\u20B9"}{price}</Text>
                    <Image source={{ uri: "https://www.pngplay.com/wp-content/uploads/3/Amazon-Prime-Logo-PNG-HD-Quality.png" }} style={styles.primeStyle} />
                </View>
            </View>
        </View>
    );
}

export default HomeProduct;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    imageStyle: {
        marginTop: 5,
        height: 150,
        width: 190,
        alignSelf: "center"
    },
    imageText: {
        fontWeight: "700"
    },
    ratingContainer: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    bottomContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    priceText: {
        fontSize: 23,
        fontWeight: "500",
        color: "#c60000"
    },
    primeStyle: {
        marginLeft: -5,
        width: 75,
        height: 30,
        resizeMode: "contain"
    }
});