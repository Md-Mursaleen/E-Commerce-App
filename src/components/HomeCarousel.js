import React from "react";
import { View, StyleSheet } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { carouselData } from "../data/HomeScreenData";

const HomeCarousel = () => {
    return (
        <View style={{ marginTop: 3 }}>
            <SliderBox
                images={carouselData}
                dotColor="#017d8b"
                inactiveDotColor="white"
                autoplay={true}
                circleLoop={true}
                resizeMethod={"resize"}
                resizeMode={"cover"}
                autoPlayInterval={100}
                dotStyle={styles.carouselDotStyle}
                ImageComponentStyle={styles.carouselImageStyle} />
        </View>
    );
}

export default HomeCarousel;

const styles = StyleSheet.create({
    carouselDotStyle: {
        width: 10,
        height: 10,
        backgroundColor: "rgba(128,128,128,0.92)",
        borderColor: "lightgrey",
        borderRadius: 5
    },
    carouselImageStyle: {
        width: "100%",
        height: 235
    }
});