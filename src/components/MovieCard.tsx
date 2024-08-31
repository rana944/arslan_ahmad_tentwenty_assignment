import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import FastImage from "react-native-fast-image";
import Colors from "theme/Colors";
import ApiUrls from "services/ApiUrls";

const MovieCard = (props: MovieCardComponentProps) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={1} onPress={props.onPress}>
            <FastImage
                source={{
                    uri: props.uri,
                    headers: { Authorization: `api_key=${ApiUrls.API_KEY}` },
                    priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
                style={styles.imageContainer}
            />
            <CustomText fontVariant="medium" size="heading5" style={styles.title}>
                {props.title}
            </CustomText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 180,
        borderRadius: 15,
        overflow: "hidden",
    },
    imageContainer: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    linearGradient: {
        flex: 1,
    },
    title: {
        left: 20,
        right: 20,
        bottom: 20,
        color: Colors.white,
        position: "absolute",
    }
});

export default MovieCard;