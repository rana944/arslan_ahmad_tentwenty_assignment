import React from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "theme/Colors";

const MainContainer = (props: MainContainerProps) => {
    const insets = useSafeAreaInsets();
    if (props.safeArea) {
        return (
            <SafeAreaView style={[styles.container, { paddingBottom: -insets.bottom }, props.style]}>
                {props.isLoading && (
                    <View style={styles.spinnerContainer}>
                        <ActivityIndicator size="large" />
                    </View>
                )}
                {props.hideViewOnLoading ? null : props.children}
            </SafeAreaView>
        )
    }

    return (
        <View style={[styles.container, props.style]}>
            {props.isLoading && (
                <View style={styles.spinnerContainer}>
                    <ActivityIndicator size="large" />
                </View>
            )}
            {props.hideViewOnLoading ? null : props.children}
        </View>
    )
}

export default MainContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.white,
    },
    spinnerContainer: {
        width: "100%",
        height: "100%",
        zIndex: 1,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    }
})