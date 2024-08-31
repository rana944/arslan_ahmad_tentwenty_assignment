import React from "react";
import { View } from "react-native";

const Spacer = (props: SpacerComponentProps) => {
    return (
        <View style={{ width: props.width || 20, height: props.height || 20 }} />
    );
}

export default Spacer;