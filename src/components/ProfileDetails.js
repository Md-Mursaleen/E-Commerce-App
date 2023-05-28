import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const dimensions = Dimensions.get("window").width;

const ProfileDetails = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{title}</Text>
        </View>
    );
}

export default ProfileDetails;

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        paddingVertical: 10,
        width: (dimensions / 2) - 23,
        height: 49,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fafafa",
        borderWidth: 1,
        borderColor: "#d8d8d8",
        borderRadius: 50
    },
    textStyle: {
        fontSize: 15,
        fontWeight: "400"
    }
});