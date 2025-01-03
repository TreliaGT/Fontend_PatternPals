import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity , Alert } from 'react-native';
import styles from '../Styles'; // Your custom styles
import { useNavigation } from '@react-navigation/native';

export default function ShowScreen({ route }) {
    const { featureImage, name, materials, steps, youtubeLink, pdfLink, tags } = route.params;

    const navigation = useNavigation();
    const handleEdit = () => {
        navigation.navigate('EditScreen', {
          featureImage,
          name,
          materials,
          steps,
          youtubeLink,
          pdfLink,
          tags,
        });
      };
    
    const handleDelete = () => {
        Alert.alert(
        'Delete Confirmation',
        'Are you sure you want to delete this pattern?',
        [
            {
            text: 'Cancel',
            style: 'cancel',
            },
            {
            text: 'Delete',
            style: 'destructive',
            onPress: () => {
                // Here, you would remove the item either from a backend or local storage
                console.log('Item deleted:', id); // You can send the item ID to the backend to delete it
                navigation.goBack(); // Navigate back after deletion
            },
            },
        ],
        { cancelable: true }
        );
    };

    return (
        <View style={styles.main}>
        <View style={styles.nameContainer}>
            <TouchableOpacity onPress={handleEdit} style={styles.tag}>
                <Text style={styles.tagtext}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
                <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
        </View>
        <ScrollView style={styles.main}>
            {/* Feature Image */}
            {featureImage && (
                <Image source={{ uri: featureImage }} style={styles.imagePreview} />
            )}

            {/* Pattern Name */}
            <Text style={styles.title}>{name}</Text>

            {/* Materials */}
            <Text style={styles.subtitle}>Materials:</Text>
            <Text style={styles.text}>{materials.join(', ')}</Text>

            {/* Steps */}
            <Text style={styles.subtitle}>Steps:</Text>
            <Text style={styles.text}>{steps}</Text>

            {/* YouTube Link */}
            {youtubeLink && (
                <View style={styles.linkContainer}>
                    <Text style={styles.linkTitle}>Watch on YouTube:</Text>
                    <TouchableOpacity onPress={() => Linking.openURL(youtubeLink)}>
                        <Text style={styles.link}>{youtubeLink}</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* PDF Link */}
            {pdfLink && (
                <View style={styles.linkContainer}>
                    <Text style={styles.linkTitle}>Download PDF:</Text>
                    <TouchableOpacity onPress={() => Linking.openURL(pdfLink)}>
                        <Text style={styles.link}>{pdfLink}</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Tags */}
            {tags.length > 0 && (
                <>
                    <Text style={styles.subtitle}>Tags:</Text>
                    <View style={styles.tagContainer}>
                        {tags.map((tag, index) => (
                            <View key={index} style={styles.tag}>
                                <Text style={styles.tagText}>{tag}</Text>
                            </View>
                        ))}
                    </View>
                </>
            )}
        </ScrollView>
        </View>
    );
}
