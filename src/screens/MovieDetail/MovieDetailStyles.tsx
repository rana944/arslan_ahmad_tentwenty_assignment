import { StyleSheet } from "react-native";
import Colors from "theme/Colors";
import Metrics from "theme/Metrics";
import { fontSize } from "theme/Typography";

const IMG_HEIGHT = Metrics.screenHeight * 0.6;

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 0,
        backgroundColor: Colors.white,
    },
    movieImage: {
        height: IMG_HEIGHT,
        width: "100%",
    },
    imageContentStyle: {
        height: IMG_HEIGHT,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    header: {
        left: 20,
        position: "absolute",
        alignItems: "center",
        flexDirection: "row",
    },
    backButtonText: {
        color: Colors.white,
    },
    releaseDate: {
        color: Colors.white,
    },
    iconStyle: {
        marginRight: 10,
    },
    webViewStyle: {
        top: 0,
        zIndex: 100,
        position: "absolute",
        width: Metrics.screenWidth,
        height: Metrics.screenHeight,
        backgroundColor: Colors.black
    },
    doneButton: {
        width: 100,
        zIndex: 100,
        position: "absolute",
    },
    scrollContainer: {
        padding: 20,
    },
    genreButton: {
        marginRight: 5,
        borderRadius: 30,
        width: undefined,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    genreButtonTitle: {
        fontSize: fontSize.heading2
    },
    genreWrapper: {
        flexWrap: "wrap",
        flexDirection: "row",
    },
    divider: {
        height: 1.5,
        width: "100%",
        backgroundColor: Colors.secondaryBg,
    },
    overview: {
        color: Colors.paragraph,
    }
});

export default styles;