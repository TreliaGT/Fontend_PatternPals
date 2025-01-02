
import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Styles';

export default function HomeScreen() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchUserName = async () => {
        const storedName = await AsyncStorage.getItem('userName'); // Get the user's name from AsyncStorage
        if (storedName) {
          setUserName(storedName); // Set the name in state
        }
    };

      fetchUserName(); // Call the function to fetch the name when the component mounts
    }, []);
    return(
        <View className={styles.main}>
            <View>
                {userName ? (
                    <Text className={styles.title}>Welcome, {userName}!</Text> // Display the user's name
                ) : (
                    <Text className={styles.title}>Welcome, Guest!</Text> // If no name is found, show a fallback message
                )}
            </View>
        </View>
    )
}