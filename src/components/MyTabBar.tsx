import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import CustomText from "./CustomText";
import Colors from "theme/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icons from "assets/icons"
import Spacer from "./Spacer";

const MyTabBar = ({ state, descriptors, navigation }: any) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                const RenderIcon = {
                    0: <Icons.DashboardIcon fill={isFocused ? Colors.white : Colors.tabIcon} />,
                    1: <Icons.WatchIcon fill={isFocused ? Colors.white : Colors.tabIcon} />,
                    2: <Icons.LibraryIcon fill={isFocused ? Colors.white : Colors.tabIcon} />,
                    3: <Icons.SettingIcon fill={isFocused ? Colors.white : Colors.tabIcon} />
                }

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tab}
                    >
                        <Spacer height={10} />
                        {RenderIcon[index]}
                        <Spacer height={10} />
                        <CustomText fontVariant="regular" size="heading2" style={{ color: isFocused ? Colors.white : Colors.tabIcon, textAlign: "center" }}>
                            {label}
                        </CustomText>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: "space-evenly",
        backgroundColor: Colors.bottomTab,
        position: "absolute",
        bottom: 0,
    },
    tab: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default MyTabBar;