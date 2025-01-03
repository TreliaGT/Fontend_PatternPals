import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from '../Styles';

export default function FriendPage() {
  const [friendCode, setFriendCode] = useState(''); // State for the friend code input
  const [friends, setFriends] = useState([]); // State for the list of friends

  // Function to add friend by friend code
  const addFriend = () => {
    if (friendCode.trim() !== '') {
      setFriends([...friends, { id: Date.now().toString(), code: friendCode }]);
      setFriendCode(''); // Clear the input after adding the friend
    }
  };

  // Function to render each friend item in the list
  const renderFriend = ({ item }) => (
    <View>
      <Text>Friend Code: {item.name}</Text>
    </View>
  );

  return (
    <View style={styles.main}>
      {/* Friend Code Input */}
      <TextInput
        placeholder="Enter Friend Code"
        value={friendCode}
        onChangeText={setFriendCode}
      />

      {/* Add Friend Button */}
      <TouchableOpacity onPress={addFriend} style={styles.tag}>
        <Text style={styles.tagText}>Add Friend</Text>
      </TouchableOpacity>

      {/* Friends List */}
      <Text>Your Friends</Text>
      <FlatList
        data={friends}
        renderItem={renderFriend}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}