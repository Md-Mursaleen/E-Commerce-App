import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const HomeDealOfTheDayProduct = ({ dealOfTheDayProduct }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.titleText, { marginTop: 10 }]}>{dealOfTheDayProduct[0].title1}</Text>
            {dealOfTheDayProduct[0].title2 !== "" && (
                <Text style={styles.titleText}>{dealOfTheDayProduct[0].title2}</Text>
            )}
            <Image source={{ uri: dealOfTheDayProduct[0].image }} style={styles.imageStyle} />
            <View style={styles.offerContainer}>
                <View style={styles.offerTextContainer}>
                    <Text style={styles.offerText}>{dealOfTheDayProduct[0].offer}</Text>
                </View>
                <Text style={styles.dealText}>Deal of the Day</Text>
            </View>
            <Text style={styles.imageText}>{dealOfTheDayProduct[0].imageText1}</Text>
            {dealOfTheDayProduct[0].imageText2 !== "" && (
                <Text style={styles.imageText}>{dealOfTheDayProduct[0].imageText2}</Text>
            )}
        </View>
    );
}

export default HomeDealOfTheDayProduct;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    titleText: {
        fontSize: 18.5,
        fontWeight: "bold"
    },
    imageStyle: {
        marginTop: 8,
        height: 220,
        width: "100%",
        resizeMode: "contain"
    },
    imageText: {
        marginTop: 5,
        fontSize: 15.5,
        fontWeight: "500"
    },
    offerContainer: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    offerTextContainer: {
        width: 92,
        height: 27,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#c60000",
        borderRadius: 2
    },
    offerText: {
        fontSize: 12,
        color: "white"
    },
    dealText: {
        marginLeft: 8,
        fontSize: 13,
        color: "#c60000",
        fontWeight: "600"
    }
});