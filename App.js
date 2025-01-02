import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome_Popup from './components/welcome_popup';
import HomeScreen from './pages/Home';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Welcome_Popup/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
