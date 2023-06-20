import React from "react";
import { Image, ScrollView, StyleSheet, TextInput, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { categoriesData, dealOfTheDayBag, dealOfTheDayPhone, offerKitchenProducts, topOfferMobilesProducts } from "../data/HomeScreenData";
import { topProductsData, offerHomeProducts, offerAppliancesProducts, offerBeautyProducts, dealElectronicsProducts } from "../data/HomeScreenData";
import { topOfferHeadphoneProducts, topOfferWatchesProducts, offerSmartPhones, offerDiningProducts, dealMobilesProducts } from "../data/HomeScreenData";
import HomeAddress from "../components/HomeAddress";
import HomeCategories from "../components/HomeCategories";
import HomeCarousel from "../components/HomeCarousel";
import HomeTopProducts from "../components/HomeTopProducts";
import HomeOfferProducts from "../components/HomeOfferProducts";
import HomeTopProduct from "../components/HomeTopProduct";
import HomeTopOfferProducts from "../components/HomeTopOfferProducts";
import HomeDealOfTheDayProduct from "../components/HomeDealOfTheDayProduct";
import HomeDealProducts from "../components/HomeDealProducts";
import HomeProduct from "../components/HomeProduct";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HomeScreen = () => {
    return (
        <>
            <StatusBar barStyle="light-content" hidden={false} translucent={true} />
            <View style={styles.container}>
                <LinearGradient colors={["rgba(29,201,192,255)", "rgba(110,221,216,255)"]} locations={[0.5, 1.0]}>
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
                    <HomeAddress />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer} >
                        {categoriesData.map((category, index) => (
                            <HomeCategories key={index} text={category.text} />
                        ))}
                    </ScrollView>
                    <HomeCarousel />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {topProductsData.map((product, index) => (
                            <HomeTopProducts key={index} image={product.image} />
                        ))}
                    </ScrollView>
                    <View>
                        <Image source={{ uri: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Xiaomi/RedmiA2/Launch_creatives/19thMay/Post_launch/D81179785_INWLD_Redmi_A2_NewLaunch_catpage_1400x800.jpg" }}
                            style={[styles.bannerStyle, { height: 230 }]} />
                    </View>
                    <View style={{ backgroundColor: "white" }}>
                        <View style={styles.dealOfTheDayContainer}>
                            <HomeDealOfTheDayProduct dealOfTheDayProduct={dealOfTheDayPhone} />
                            <Text style={styles.bottomText}>See all deals</Text>
                        </View>
                        <View style={styles.dealOfTheDayContainer}>
                            <HomeDealOfTheDayProduct dealOfTheDayProduct={dealOfTheDayBag} />
                            <Text style={styles.bottomText}>See all deals</Text>
                        </View>
                        <View style={styles.offerProductContainer}>
                            <HomeOfferProducts title1={"Starting \u20B9499 | Home, Gym and Cleaning essentials"} title2={""} offerHomeProducts={offerKitchenProducts} />
                            <Text style={styles.bottomText}>Shop all</Text>
                        </View>
                        <View style={styles.offerProductContainer}>
                            <HomeOfferProducts title1={"Beauty & make up | Top picks"} title2={""} offerHomeProducts={offerBeautyProducts} />
                            <Text style={styles.bottomText}>See all offers</Text>
                        </View>
                        <View style={styles.bannerContainer}>
                            <Image source={{ uri: "https://www.orangehealth.in/wp-content/uploads/2023/05/mobileHomePageHeroSectionAKImage.webp" }}
                                style={[styles.bannerStyle, { height: 280 }]} />
                        </View>
                        <View style={styles.offerProductContainer}>
                            <HomeOfferProducts title1={"Minimum 50% off | Water bottles, fans, "} title2={"coolers & more"} offerHomeProducts={offerHomeProducts} />
                            <Text style={styles.bottomText}>See all</Text>
                        </View>
                        <View style={styles.topProductContainer}>
                            <HomeTopProduct title="Look sharp with these grooming essentials | Explore more"
                                image="https://m.media-amazon.com/images/I/81jUGgWxHiL.jpg" />
                        </View>
                        <View style={styles.dealProductsContainer}>
                            <HomeDealProducts title1={"Deals for you in Cell Phones and Accessories"} title2={""} dealProducts={dealMobilesProducts} />
                            <Text style={styles.bottomText}>See all deals</Text>
                        </View>
                        <View style={styles.topProductContainer}>
                            <HomeTopProduct title="iQOO Neo 7 Pro 5G - World's Fastest Smartphone | Notify me"
                                image="https://cdn.zeebiz.com/sites/default/files/2023/06/13/246918-iqooneo7pro5g.jpg" />
                        </View>
                        <View style={styles.topOfferProductContainer}>
                            <HomeTopOfferProducts title1={"Up to 50% off | Watch straps, wireless"} title2={"doorbells & more"} topOfferProducts={topOfferWatchesProducts} />
                            <Text style={styles.bottomText}>View all</Text>
                        </View>
                        <View style={styles.offerProductContainer}>
                            <HomeOfferProducts title1={"Up to 50% off | Appliances that fit your budget"} title2={""} offerHomeProducts={offerAppliancesProducts} />
                            <Text style={styles.bottomText}>See all offers</Text>
                        </View>
                        <View style={styles.productContainer}>
                            <HomeProduct image="https://m.media-amazon.com/images/I/81OKsQt82CL._SX522_.jpg"
                                text1="TONY STARK Three Seater Sofa Cover Big Elasticity"
                                text2=" Sofa Slipcover with 1 Piece Cushion Cover (Three Seater, 185-230 cm, Dark Blue Lotus)" price="1,649" />
                        </View>
                        <View style={styles.topOfferProductContainer}>
                            <HomeTopOfferProducts title1={"Super sale offer | Up to 55% off on"} title2={"Electronics from shops near you"} topOfferProducts={topOfferHeadphoneProducts} />
                            <Text style={styles.bottomText}>Explore more</Text>
                        </View>
                        <View style={styles.productContainer}>
                            <HomeProduct image="https://m.media-amazon.com/images/I/81pFKjjWNHL._SY355_.jpg"
                                text1="HOKIPO Elastic Stretchable Universal Sofa Cover With" text2="Skirt 3 Seater (Ar-4604-B2), Brown" price="2,499" />
                        </View>
                        <View style={styles.offerProductContainer}>
                            <HomeOfferProducts title1={"Starting \u20B9399 | Kitchen & dining"} title2={"essentials"} offerHomeProducts={offerDiningProducts} />
                            <Text style={styles.bottomText}>Shop all</Text>
                        </View>
                        <View style={styles.topOfferProductContainer}>
                            <HomeTopOfferProducts title1={"Up to 30% off | Top selling mobiles &"} title2={"accessories"} topOfferProducts={topOfferMobilesProducts} />
                            <Text style={styles.bottomText}>See all offers</Text>
                        </View>
                        <View style={styles.productContainer}>
                            <HomeProduct image="https://m.media-amazon.com/images/I/71awwNqci1L._SX342_.jpg"
                                text1="Kinsco Aqua Punch 15 Litre Active Copper + RO + UV +" text2="(UF + TDS Adjuster Pure Copper Water Purifier Dispenser Machine(With Free Pre Filter)"
                                price="4,999" />
                        </View>
                        <View style={styles.offerProductContainer}>
                            <HomeOfferProducts title1={"Latest and upcoming smartphones"} title2={""} offerHomeProducts={offerSmartPhones} />
                            <Text style={styles.bottomText}>See more</Text>
                        </View>
                        <View style={[styles.dealProductsContainer, { borderBottomWidth: 1, borderBottomColor: "#eee" }]}>
                            <HomeDealProducts title1={"Deals for you in electronics"} title2={""} dealProducts={dealElectronicsProducts} />
                            <Text style={[styles.bottomText, { marginBottom: 15 }]}>See all deals</Text>
                        </View>
                    </View>
                </ScrollView>
            </View >
        </>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee"
    },
    headerContainer: {
        height: 100,
        flexDirection: "row",
        alignItems: "center"
    },
    searchContainer: {
        marginTop: 38,
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
    categoriesContainer: {
        padding: 5,
        backgroundColor: "white"
    },
    bannerStyle: {
        marginTop: 5,
        width: "100%"
    },
    offerProductContainer: {
        marginTop: 10,
        borderTopWidth: 3,
        borderTopColor: "#eee"
    },
    bottomText: {
        marginLeft: 15,
        marginTop: 15,
        fontSize: 15,
        fontWeight: "400",
        color: "#016b78"
    },
    topProductContainer: {
        marginTop: 10,
        borderTopWidth: 3,
        borderTopColor: "#eee"
    },
    topOfferProductContainer: {
        marginTop: 10,
        borderTopWidth: 3,
        borderTopColor: "#eee"
    },
    dealOfTheDayContainer: {
        marginTop: 10,
        borderTopWidth: 3,
        borderTopColor: "#eee"
    },
    bannerContainer: {
        marginTop: 10,
        borderTopWidth: 3,
        borderTopColor: "#eee"
    },
    dealProductsContainer: {
        marginTop: 10,
        borderTopWidth: 3,
        borderTopColor: "#eee"
    },
    productContainer: {
        marginTop: 10,
        borderTopWidth: 3,
        borderTopColor: "#eee"
    }
});