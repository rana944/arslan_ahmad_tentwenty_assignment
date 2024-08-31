import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Dashboard from "screens/Dashboard";
import { ScreenNames } from "utils/enums";

const NativeStack = createNativeStackNavigator();

const DashboardNavigator = () => {
    return (
        <NativeStack.Navigator screenOptions={{ headerShown: false, header: undefined }}>
            <NativeStack.Screen name={ScreenNames.DASHBOARD_NAVIGATOR} component={Dashboard} />
        </NativeStack.Navigator>
    )
}

export default DashboardNavigator;