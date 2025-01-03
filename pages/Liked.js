import React from 'react';
import { View } from 'react-native';
import styles from '../Styles'; // Assuming this is your Styles.js file
import TagsList from '../components/tags_list';

export default function LikedScreen() {


  return (
    <View style={styles.main}> {/* Correct usage of style */}
      <View style={styles.nameContainer}>
      </View>
      <TagsList order="liked"/>
    </View>
  );
}
