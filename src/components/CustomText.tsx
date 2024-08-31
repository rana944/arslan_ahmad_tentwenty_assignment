import React from "react";
import { StyleSheet, Text } from "react-native";
import { fontSize, fontVariantMap } from "theme/Typography";

const CustomText = (props: TextComponentProps) => {
    const defaultStyle = { fontSize: fontSize[props.size], fontFamily: fontVariantMap[props.fontVariant] }
    return (
        <Text style={[defaultStyle, styles.text, props.style]}>
            {props.children}
        </Text>
    )
}

export default CustomText;

const styles = StyleSheet.create({
    text: {
        color: "#000"
    }
});
