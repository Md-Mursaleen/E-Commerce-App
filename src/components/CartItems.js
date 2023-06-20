import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const CartItems = ({ title, image, price, border }) => {
    return (
        <View style={[styles.container, border && { borderBottomWidth: 10 }]}>
            <View style={styles.subContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={styles.imageStyle} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.titleText} numberOfLines={3}>{title}</Text>
                    <Text style={styles.priceText}>₹{price}</Text>
                    <Text style={styles.deliveryText}>Eligible for FREE Shipping</Text>
                </View>
            </View>
            <View style={styles.addremoveContainer}>
                <View style={styles.quantityContainer}>
                    <MaterialIcons name="delete-outline" size={22} style={styles.deleteiconContainer} />
                    <Text style={styles.quantityText}>1</Text>
                    <MaterialIcons name="add" size={22} style={styles.addiconContainer} />
                </View>
                <View style={styles.actionContainer}>
                    <Pressable style={styles.buttonContainer}>
                        <Text>Delete</Text>
                    </Pressable>
                    <Pressable style={styles.buttonContainer}>
                        <Text>Save for later</Text>
                    </Pressable>
                    <Pressable style={styles.buttonContainer}>
                        <Text>See more like this</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default CartItems;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderBottomColor: "#ededed"
    },
    subContainer: {
        padding: 10,
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    imageContainer: {
        flex: 1
    },
    infoContainer: {
        flex: 2,
        marginLeft: 10,
        padding: 5
    },
    titleText: {
        flex: 1,
        fontWeight: "600"
    },
    priceText: {
        flex: 1,
        marginVertical: 5,
        fontSize: 24,
        fontWeight: "bold"
    },
    deliveryText: {
        marginTop: 5,
        color: "grey"
    },
    addremoveContainer: {
        flex: 1,
        padding: 10,
        flexDirection: "row"
    },
    quantityContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    quantityText: {
        paddingHorizontal: 15,
        paddingVertical: 3,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#c9c9c9"
    },
    actionContainer: {
        flex: 2,
        padding: 5,
        paddingLeft: 10,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    buttonContainer: {
        marginRight: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#c9c9c9",
        borderRadius: 5
    },
    deleteiconContainer: {
        paddingHorizontal: 5,
        paddingVertical: 4,
        backgroundColor: "#e6e5e3",
        borderWidth: 1,
        borderColor: "#c9c9c9",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    addiconContainer: {
        paddingHorizontal: 5,
        paddingVertical: 4,
        backgroundColor: "#e6e5e3",
        borderWidth: 1,
        borderColor: "#c9c9c9",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    imageStyle: {
        height: "100%",
        width: "100%",
        resizeMode: "contain"
    }
}); 