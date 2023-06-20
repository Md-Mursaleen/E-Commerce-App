import React from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { menuData } from "../data/MenuScreenData";
import MenuItems from "../components/MenuItems";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MenuScreen = () => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={["rgba(29,201,192,255)", "rgba(125,221,216,255)"]} locations={[0.5, 1.0]}>
                <View style={styles.headerContainer}>
                    <View style={styles.searchContainer}>
                        <MaterialIcons name="search" size={23} />
                        <TextInput placeholder="Search Amazon.in" placeholderTextColor="#939393" style={styles.textinputStyle} />
                        <MaterialCommunityIcons name="google-lens" size={23} color="#a7a7a7" style={{ marginLeft: "auto" }} />
                    </View>
                    <View style={styles.micStyle}>
                        <MaterialCommunityIcons name="microphone" size={23} color="black" />
                    </View>
                </View>
            </LinearGradient>
            <ScrollView showsVerticalScrollIndicator={false}>
                <LinearGradient colors={["rgba(125,221,216,255)", "#ffffff"]}>
                    <View style={styles.itemContainer}>
                        {menuData.map((data, index) => (
                            <MenuItems key={index} title={data.text} image={data.image} width={data.width} height={data.height} marginTop={data.marginTop} />
                        ))}
                    </View>
                </LinearGradient>
            </ScrollView>
        </View>
    );
}

export default MenuScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(125,221,216,255)"
    },
    headerContainer: {
        height: 100,
        flexDirection: "row",
        alignItems: "center"
    },
    searchContainer: {
        marginTop: 34,
        marginLeft: 15,
        padding: 7.5,
        width: "84%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#99a5b2",
        borderRadius: 8
    },
    textinputStyle: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: "500"
    },
    micStyle: {
        marginTop: 35,
        marginRight: 10,
        marginLeft: "auto"
    },
    itemContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    }
});