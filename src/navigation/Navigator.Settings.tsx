import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SettingScreen from "screens/Settings";
import { ScreenNames } from "utils/enums";

const NativeStack = createNativeStackNavigator();

const SettingNavigator = () => {
    return (
        <NativeStack.Navigator screenOptions={{ headerShown: false, header: undefined }}>
            <NativeStack.Screen name={ScreenNames.MORE_NAVIGATOR} component={SettingScreen} />
        </NativeStack.Navigator>
    )
}

export default SettingNavigator;