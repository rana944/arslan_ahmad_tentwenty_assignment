import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "navigation/Navigator.BottomTab";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;