import { StyleSheet, View, Image } from "react-native";
import React from "react";

const HomeTopProducts = ({ image }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.imageStyle} />
            </View>
        </View>
    );
}

export default HomeTopProducts;

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    imageContainer: {
        marginHorizontal: 15
    },
    imageStyle: {
        marginRight: -8,
        marginLeft: -8,
        width: 170,
        height: 240,
        borderRadius: 5
    }
});