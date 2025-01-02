import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome_Popup from './components/welcome_popup';
import HomeScreen from './pages/Home';
import FooterMenu from './components/footer';
import CreateScreen from './pages/Create';

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
            options={{ title: 'Patterns' ,
              headerStyle: {
                backgroundColor: '#578E7E', // Set background color for the top bar
              },
              headerTintColor: '#FFFAEC',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
            <Stack.Screen
            name="Create"
            component={CreateScreen}
            options={{ title: 'Create Pattern' ,
              headerStyle: {
                backgroundColor: '#578E7E', // Set background color for the top bar
              },
              headerTintColor: '#FFFAEC',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
        <FooterMenu/>
      </NavigationContainer>
    </>
  );
}
