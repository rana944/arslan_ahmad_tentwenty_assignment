import React from "react";
import { StyleSheet, View } from "react-native";

const Row = (props: RowComponentProps) => {
    return (
        <View style={[styles.main, props.style]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
});

export default Row;