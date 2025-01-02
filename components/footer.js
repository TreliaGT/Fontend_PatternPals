import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FooterMenu() {
    const navigation = useNavigation();
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('Home')}>
                <Image  source={require('../assets/icons/knitting.png')}  style={[
                    styles.icon,
                ]} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/icons/knitting_heart.png')} style={[
                    styles.icon,
                ]} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/icons/two-friends.png')} style={[
                    styles.icon,
                ]} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/icons/tape-measure.png')} style={[
                    styles.icon,
                ]} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/icons/settings.png')} style={[
                    styles.icon,
                ]} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',         // Arrange menu items horizontally
    justifyContent: 'space-around', // Distribute space evenly
    alignItems: 'center',         // Vertically center items
    backgroundColor: '#578E7E',   // Footer background color
    paddingVertical: 10,          // Padding for better touch targets
    position: 'absolute',         // Fix the footer at the bottom of the screen
    bottom: 0,
    left: 0,
    right: 0,
  },
  menuItem: {
    flex: 1,                      // Each menu item takes equal width
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 40,  // Icon width
    height: 40, // Icon height
    resizeMode: 'contain', // Ensure image is not stretched
    tintColor: '#FFFAEC', 
  },
});
