import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function welcome_popup(){
    const [userName, setUserName] = useState('');
    const [modalVisible, setModalVisible] = useState(true);

    useEffect(() => {
      const fetchUserName = async () => {
        const storedName = await AsyncStorage.getItem('userName'); // Get the user's name from AsyncStorage
        if (storedName) {
          setUserName(storedName); // Set the name in state
          setModalVisible(false);
        }
      };
  
      fetchUserName(); // Call the function to fetch the name when the component mounts
    }, []);
  
      // Handle the submit action when the user enters their name
  const handleNameSubmit = async () => {
    if (userName.trim()) {
      await AsyncStorage.setItem('userName', userName); // Store the name
      setModalVisible(false); // Hide the modal
    } else {
      alert('Please enter your name!');
    }
  };

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Enter Your Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={userName}
            onChangeText={setUserName}
          />
          <Button title="Submit" onPress={handleNameSubmit} />
        </View>
      </View>
    </Modal>
    )
}


const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      width: 300,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 18,
      marginBottom: 10,
    },
    input: {
      width: '100%',
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 20,
      borderRadius: 5,
    },
  });