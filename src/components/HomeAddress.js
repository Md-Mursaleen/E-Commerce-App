import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";

const HomeAddress = () => {
    return (
        <LinearGradient colors={["rgba(130,226,221,255)", "rgba(162,236,233,255)"]} locations={[0.5, 1.0]}>
            <View style={styles.container}>
                <Octicons name="location" size={18} />
                <Text style={styles.textStyle}>
                    Deliver to Md - New Delhi 110017
                </Text>
                <MaterialIcons name="keyboard-arrow-down" size={20} color="#3d3d3d" />
            </View>
        </LinearGradient>
    );
}

export default HomeAddress;

const styles = StyleSheet.create({
    container: {
        padding: 13,
        flexDirection: "row",
        alignItems: "center"
    },
    textStyle: {
        marginLeft: 10,
        fontSize: 13.5,
        fontWeight: "500"
    }
});