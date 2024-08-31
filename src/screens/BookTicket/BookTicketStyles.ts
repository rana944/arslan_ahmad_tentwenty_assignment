import { StyleSheet } from "react-native";
import Colors from "theme/Colors";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 0,
    },
    header: {
        paddingHorizontal: 20,
    },
    movieTime: {
        color: Colors.buttonColor,
    },
    headerInnerContainer: {
        flex: 1,
        alignItems: "center",
    },
    cinemaHallContainer: {
        backgroundColor: Colors.secondaryBg,
    },
    hallImage: {
        alignSelf: "center"
    },
    stepper: {
        marginRight: 20,
        alignSelf: "flex-end",
        justifyContent: "flex-end",
    },
    divider: {
        height: 5,
        width: "90%",
        borderRadius: 5,
        alignSelf: "center",
        backgroundColor: Colors.tabIcon,
    },
    seatStatus: {
        color: Colors.paragraph,
    },
    seatStatusRow: {
        paddingHorizontal: 20,
        justifyContent: "flex-start",
    },
    seatRowSelection: {
        marginHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignSelf: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: Colors.stepper,
    },
    totalPriceButton: {
        borderRadius: 10,
        alignSelf: "center",
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: Colors.stepper,
    },
    totalPriceText: {
        textAlign: "center",
        color: Colors.fontColor,
    },
    footer: {
        width: "100%",
        position: "absolute",
        paddingHorizontal: 20,
    }
});

export default styles;