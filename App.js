import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import fonts from './constant/fonts';
import TabNavigation from './navigation/TabNavigation';

import { useFonts } from '@use-expo/font';
import AppLoading from 'expo-app-loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform, UIManager } from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

function RootApp() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const customFonts = {
  [fonts.PRIMARY]: require("./assets/fonts/JosefinSlab-Regular.ttf"),
  [fonts.PRIMARY_BOLD]: require("./assets/fonts/JosefinSlab-Bold.ttf"),
};

export default function App() {
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <RootApp />
  );
}