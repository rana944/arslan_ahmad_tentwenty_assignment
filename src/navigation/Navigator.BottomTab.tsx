import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenNames } from "utils/enums";
import DashboardNavigator from "./Navigator.Dashboard";
import WatchNavigator from "./Navigator.Watch";
import MediaLibraryNavigator from "./Navigator.MediaLibrary";
import SettingNavigator from "./Navigator.Settings";
import MyTabBar from "components/MyTabBar";
import Colors from "theme/Colors";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBar={props => <MyTabBar {...props} />}
            initialRouteName={ScreenNames.WATCH}
            screenOptions={{
                header: undefined,
                headerShown: false,
                tabBarHideOnKeyboard: true,
            }}>
            <Tab.Screen name={ScreenNames.DASHBORAD} component={DashboardNavigator} />
            <Tab.Screen name={ScreenNames.WATCH} component={WatchNavigator} />
            <Tab.Screen name={ScreenNames.MEDIA_LIBRARY} component={MediaLibraryNavigator} />
            <Tab.Screen name={ScreenNames.MORE} component={SettingNavigator} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;