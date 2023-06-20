import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { accountData, infoData, wishlistData } from "../data/ProfileScreenData";
import ProfileDetails from "../components/ProfileDetails";
import OrderDetails from "../components/OrderDetails";
import AccountDetails from "../components/AccountDetails";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
    const [signedUser, setSignedUser] = useState();
    const getSignedUserData = async () => {
        const signedUserData = await AsyncStorage.getItem("SignedUserData");
        setSignedUser(JSON.parse(signedUserData));
    };
    useEffect(() => {
        getSignedUserData();
    }, []);
    return (
        <View style={styles.container}>
            <LinearGradient colors={["rgba(29,201,192,255)", "rgba(125,221,216,255)"]}>
                <View style={styles.headerContainer}>
                    <View style={styles.itemsContainer}>
                        <Image source={require("../../assets/images/amazon.png")} style={styles.imageStyle} />
                        <View style={styles.iconContainer}>
                            <MaterialIcons name="notifications-none" size={26} style={{ marginRight: 15 }} />
                            <MaterialIcons name="search" size={26} />
                        </View>
                    </View>
                </View>
            </LinearGradient>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.accountContainer}>
                    <View style={styles.textContainer}>
                        <Text style={{ fontSize: 22 }}>Hello, </Text>
                        <Text style={styles.accountText}>{signedUser?.user?.displayName}</Text>
                    </View>
                    <View style={styles.userIconContainer}>
                        <Pressable style={styles.userIconStyle}>
                            {signedUser ? (
                                <Image source={{ uri: signedUser?.user?.photoURL }} style={styles.profileImageStyle} />
                            ) : (
                                <Entypo name="user" size={18} color="#cdcdcd" />
                            )}
                        </Pressable>
                    </View>
                </View>
                <View style={styles.detailsContainer}>
                    {infoData.map((data, index) => (
                        <ProfileDetails key={index} title={data.title} />
                    ))}
                </View>
                <View style={[styles.containerStyle, { borderBottomWidth: 4 }]}>
                    <Text style={styles.titleStyle}>Your Orders</Text>
                    <Text style={styles.textStyle}>Hi! You have no recent orders.</Text>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Return to the Homepage</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.containerStyle, { borderBottomWidth: 4 }]}>
                    <Text style={styles.titleStyle}>Your Wish List</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {wishlistData.map((data, index) => (
                            <OrderDetails key={index} image={data.image} />
                        ))}
                    </ScrollView>
                </View>
                <View style={[styles.containerStyle, { borderBottomWidth: 4 }]}>
                    <Text style={styles.titleStyle}>Buy Again</Text>
                    <Text style={styles.textStyle}>See what others are reordering on Buy Again</Text>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Visit Buy Again</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.containerStyle, { borderBottomWidth: 4 }]}>
                    <Text style={styles.titleStyle}>Your Account</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {accountData.map((data, index) => (
                            <AccountDetails key={index} title={data.title} />
                        ))}
                    </ScrollView>
                </View>
                <View style={{ height: 76 }} />
            </ScrollView>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    headerContainer: {
        height: 79,
        backgroundColor: "rgba(5,250,242,0.4)"
    },
    itemsContainer: {
        marginTop: 40,
        flexDirection: "row",
        alignItems: "center"
    },
    imageStyle: {
        marginLeft: 12,
        marginTop: 7,
        width: 80,
        height: 25
    },
    iconContainer: {
        marginLeft: "auto",
        marginRight: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    accountContainer: {
        marginTop: 10,
        marginLeft: 17,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    accountText: {
        fontSize: 22,
        fontWeight: "700"
    },
    detailsContainer: {
        marginTop: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    containerStyle: {
        marginTop: 15,
        paddingLeft: 10,
        paddingBottom: 14,
        borderBottomColor: "#e2e2e2"
    },
    titleStyle: {
        marginLeft: 7,
        marginBottom: 15,
        fontSize: 18.5,
        fontWeight: "600"
    },
    buttonContainer: {
        marginTop: 7,
        marginRight: 10,
        width: "95%",
        height: 56,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#d8d8d8",
        borderRadius: 10
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "400"
    },
    textStyle: {
        marginLeft: 7,
        fontSize: 15,
        color: "#6c6c6c"
    },
    userIconContainer: {
        width: 42,
        height: 42,
        marginRight: 13,
        marginBottom: 5,
        backgroundColor: "#eee",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    userIconStyle: {
        width: 37,
        height: 37,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f6f6",
        borderRadius: 50
    },
    profileImageStyle: {
        width: 42,
        height: 42,
        borderRadius: 50
    }
});