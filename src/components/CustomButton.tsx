import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Colors from "theme/Colors";
import { fontSize, fontVariantMap } from "theme/Typography";
import CustomText from "./CustomText";

const CustomButton = (props: ButtonComponentProps) => {
    const defaultStyle = { backgroundColor: props.type == "filled" ? Colors.buttonColor : "transparent", borderColor: Colors.buttonColor }
    return (
        <TouchableOpacity style={[defaultStyle, styles.button, props.style]} onPress={props.onPress}>
            {props.icon && props.icon()}
            <CustomText fontVariant="semiBold" size="heading4" style={[styles.title, props.titleStyle]}>
                {props.title}
            </CustomText>
        </TouchableOpacity>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        width: "60%",
        paddingVertical: 12,
        borderRadius: 12,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
    },
    title: {
        color: Colors.white,
    }
});
