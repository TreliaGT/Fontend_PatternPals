import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Styles'; // Assuming this is your Styles.js file
import TagsList from '../components/tags_list';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [userName, setUserName] = useState('');
    const navigation = useNavigation();
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

  useEffect(() => {
    const fetchUserName = async () => {
      const storedName = await AsyncStorage.getItem('userName'); // Get the user's name from AsyncStorage
      if (storedName) {
        setUserName(storedName); // Set the name in state
      }
    };

    fetchUserName(); // Call the function to fetch the name when the component mounts
  }, []);

  return (
    <View style={styles.main}> {/* Correct usage of style */}
      <View style={styles.nameContainer}>
        {userName && <Text style={styles.title}>Welcome, {userName}!</Text>}
            <TouchableOpacity
                style={styles.tag}
                onPress={() => navigateToScreen('Create')}
            >
            <Text style={styles.tagText}>Create Pattern</Text>
        </TouchableOpacity>
      </View>
      <TagsList/>
    </View>
  );
}
