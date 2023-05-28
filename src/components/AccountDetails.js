import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AccountDetails = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{title}</Text>
        </View>
    );
}

export default AccountDetails;

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        paddingHorizontal: 15,
        paddingVertical: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#d8d8d8",
        borderRadius: 10
    },
    textStyle: {
        fontSize: 15
    }
});