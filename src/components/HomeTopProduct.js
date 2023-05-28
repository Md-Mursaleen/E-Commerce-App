import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeTopProduct = ({ image, title }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.titleStyle, { marginTop: 10, }]}>{title}</Text>
            <Image source={{ uri: image }} style={styles.imageStyle} />
        </View>
    );
}

export default HomeTopProduct;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    titleStyle: {
        fontSize: 18.5,
        fontWeight: "bold"
    },
    imageStyle: {
        marginTop: 8,
        width: "100%",
        height: 380,
        borderRadius: 5
    }
});