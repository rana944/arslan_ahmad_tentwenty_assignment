import { StyleSheet } from "react-native";
import Colors from "theme/Colors";

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 0,
        backgroundColor: Colors.white,
    },
    contentContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.secondaryBg
    },
    searchBar: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    }
});

export default styles;