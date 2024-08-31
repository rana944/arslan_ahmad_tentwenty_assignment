import { StyleSheet } from "react-native";
import Colors from "theme/Colors";
import Metrics from "theme/Metrics";
import { fontVariantMap } from "theme/Typography";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 0,
    },
    header: {
        alignSelf: "flex-start",
        paddingHorizontal: 20,
    },
    movieImage: {
        width: Metrics.screenWidth * 0.33,
        height: Metrics.screenWidth * 0.3,
        borderRadius: 10,
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: Colors.secondaryBg,
    },
    movieTitleContainer: {
        flex: 3,
    }
});

export default styles;