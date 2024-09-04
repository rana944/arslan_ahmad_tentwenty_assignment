import { StyleSheet } from "react-native";
import Colors from "theme/Colors";
import Metrics from "theme/Metrics";
import { fontVariantMap } from "theme/Typography";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 0,
    },
    searchBar: {
        height: 50,
        borderRadius: 30,
        paddingHorizontal: 15,
        backgroundColor: Colors.secondaryBg,
        marginHorizontal: 20,
    },
    searchInputContainer: {
        justifyContent: "flex-start"
    },
    searchInput: {
        flex: 0.9,
        color: Colors.fontColor,
        fontFamily: fontVariantMap["regular"],
    },
    movieImage: {
        width: Metrics.screenWidth * 0.33,
        height: Metrics.screenWidth * 0.3,
        borderRadius: 10,
    },
    contentContainer: {
        paddingHorizontal: 20,
    },
    movieTitleContainer: {
        flex: 3,
    },
    headerOuterContainer: {
        position: 'absolute',
        zIndex: 100,
    }
});

export default styles;