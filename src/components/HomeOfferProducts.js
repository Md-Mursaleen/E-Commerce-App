import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HomeOfferProducts = ({ title1, title2, offerHomeProducts }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.titleText, { marginTop: 10 }]}>{title1}</Text>
            {title2 !== "" && (
                <Text style={styles.titleText}>{title2}</Text>
            )}
            <View style={styles.subContainer}>
                <View style={styles.itemContainer}>
                    <Image source={{ uri: offerHomeProducts[0].image }} style={styles.imageStyle} />
                    <Text style={styles.imageText}>{offerHomeProducts[0].text1}</Text>
                    {offerHomeProducts[0].text2 !== "" && (
                        <Text style={styles.imageText}>{offerHomeProducts[0].text2}</Text>
                    )}
                </View>
                <View style={styles.itemContainer}>
                    <Image source={{ uri: offerHomeProducts[1].image }} style={styles.imageStyle} />
                    <Text style={styles.imageText}>{offerHomeProducts[1].text1}</Text>
                    {offerHomeProducts[1].text2 !== "" && (
                        <Text style={styles.imageText}>{offerHomeProducts[1].text2}</Text>
                    )}
                </View>
            </View>
            <View style={[styles.subContainer, { marginTop: 8 }]}>
                <View style={styles.itemContainer}>
                    <Image source={{ uri: offerHomeProducts[2].image }} style={styles.imageStyle} />
                    <Text style={styles.imageText}>{offerHomeProducts[2].text1}</Text>
                    {offerHomeProducts[2].text2 !== "" && (
                        <Text style={styles.imageText}>{offerHomeProducts[2].text2}</Text>
                    )}
                </View>
                <View style={styles.itemContainer}>
                    <Image source={{ uri: offerHomeProducts[3].image }} style={styles.imageStyle} />
                    <Text style={styles.imageText}>{offerHomeProducts[3].text1}</Text>
                    {offerHomeProducts[3].text2 !== "" && (
                        <Text style={styles.imageText}>{offerHomeProducts[3].text2}</Text>
                    )}
                </View>
            </View>
        </View>
    );
}

export default HomeOfferProducts;

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
        marginLeft: -2,
        flexDirection: "row",
        alignItems: "center"
    },
    itemContainer: {
        marginRight: 8,
        flexDirection: "column",
        alignItems: "flex-start"
    },
    imageStyle: {
        height: 185,
        width: 180,
        borderRadius: 5
    },
    imageText: {
        fontSize: 14.5,
        fontWeight: "500"
    }
});