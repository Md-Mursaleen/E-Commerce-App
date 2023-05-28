import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HomeDealProducts = ({ title1, title2, dealProducts }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.titleText, { marginTop: 10 }]}>{title1}</Text>
            {title2 !== "" && (
                <Text style={styles.titleText}>{title2}</Text>
            )}
            <View style={styles.subContainer}>
                <View>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: dealProducts[0].image }} style={styles.imageStyle} />
                    </View>
                    <View style={styles.offerContainer}>
                        <View style={styles.offerTextContainer}>
                            <Text style={styles.offerText}>{dealProducts[0].dealText}% off</Text>
                        </View>
                        <Text style={styles.dealText}>Deal of the Day</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: dealProducts[1].image }} style={styles.imageStyle} />
                    </View>
                    <View style={styles.offerContainer}>
                        <View style={styles.offerTextContainer}>
                            <Text style={styles.offerText}>{dealProducts[1].dealText}% off</Text>
                        </View>
                        <Text style={styles.dealText}>Deal of the Day</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.subContainer, { marginTop: 8 }]}>
                <View>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: dealProducts[2].image }} style={styles.imageStyle} />
                    </View>
                    <View style={styles.offerContainer}>
                        <View style={styles.offerTextContainer}>
                            <Text style={styles.offerText}>{dealProducts[2].dealText}% off</Text>
                        </View>
                        <Text style={styles.dealText}>Deal of the Day</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: dealProducts[3].image }} style={styles.imageStyle} />
                    </View>
                    <View style={styles.offerContainer}>
                        <View style={styles.offerTextContainer}>
                            <Text style={styles.offerText}>{dealProducts[3].dealText}% off</Text>
                        </View>
                        <Text style={styles.dealText}>Deal of the Day</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default HomeDealProducts;

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
        marginLeft: 3,
        flexDirection: "row",
        alignItems: "center"
    },
    imageContainer: {
        marginRight: 8,
        height: 170,
        width: 170,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f8f8",
        borderRadius: 5
    },
    imageStyle: {
        height: 155,
        width: 165,
        resizeMode: "contain"
    },
    offerContainer: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    offerTextContainer: {
        width: 55,
        height: 25,
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