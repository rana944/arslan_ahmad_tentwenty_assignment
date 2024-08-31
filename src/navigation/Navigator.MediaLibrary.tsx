import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ScreenNames } from "utils/enums";
import MediaLibrary from "screens/MediaLibrary";

const NativeStack = createNativeStackNavigator();

const MediaLibraryNavigator = () => {
    return (
        <NativeStack.Navigator screenOptions={{ headerShown: false, header: undefined }}>
            <NativeStack.Screen name={ScreenNames.MEDIA_LIBRARY_NAVIGATOR} component={MediaLibrary} />
        </NativeStack.Navigator>
    )
}

export default MediaLibraryNavigator;