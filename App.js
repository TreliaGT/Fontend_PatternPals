import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome_Popup from './components/welcome_popup';
import HomeScreen from './pages/Home';
import FooterMenu from './components/footer';
import CreateScreen from './pages/Create';
import ShowScreen from './pages/Single';
import EditScreen from './pages/Edit';
import StitchesScreen from './pages/Guide';
import FriendPage from './pages/Friends';
import LikedScreen from './pages/Liked';
import SettingsPage from './pages/Settings';

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
          <Stack.Screen
            name="Pattern"
            component={ShowScreen}
            options={{ title: 'Pattern' ,
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
            name="Edit"
            component={EditScreen}
            options={{ title: 'Edit Pattern' ,
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
            name="Liked"
            component={LikedScreen}
            options={{ title: 'Liked Patterns' ,
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
            name="Guide"
            component={StitchesScreen}
            options={{ title: 'Guide' ,
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
            name="Friend"
            component={FriendPage}
            options={{ title: 'Friends' ,
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
            name="Settings"
            component={SettingsPage}
            options={{ title: 'Settings' ,
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
