import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const HomeTopOfferProducts = ({ title1, title2, topOfferProducts }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.titleText, { marginTop: 10 }]}>{title1}</Text>
            <Text style={styles.titleText}>{title2}</Text>
            <View style={styles.subContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: topOfferProducts[0].image1 }} style={styles.imageStyle} />
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: topOfferProducts[0].image2 }} style={styles.imageStyle} />
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: topOfferProducts[0].image3 }} style={styles.imageStyle} />
                </View>
            </View>
            <View style={styles.subContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: topOfferProducts[0].image4 }} style={styles.imageStyle} />
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: topOfferProducts[0].image5 }} style={styles.imageStyle} />
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: topOfferProducts[0].image6 }} style={styles.imageStyle} />
                </View>
            </View>
            <View style={styles.subContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: topOfferProducts[0].image7 }} style={styles.imageStyle} />
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: topOfferProducts[0].image8 }} style={styles.imageStyle} />
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: topOfferProducts[0].image9 }} style={styles.imageStyle} />
                </View>
            </View>
        </View>
    );
}

export default HomeTopOfferProducts;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    titleText: {
        fontSize: 18.5,
        fontWeight: "bold"
    },
    subContainer: {
        marginTop: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    imageContainer: {
        marginLeft: 10,
        marginRight: 10,
        height: 115,
        width: 115,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f8f8",
        borderRadius: 5
    },
    imageStyle: {
        height: 98,
        width: 98,
        resizeMode: "contain"
    }
});