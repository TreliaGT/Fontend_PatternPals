import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker'; // For image picking
import styles from '../Styles'; // Your custom styles

export default function EditScreen({ route, navigation }) {
  const { featureImage, name, materials, steps, youtubeLink, pdfLink, tags } = route.params;

  // State variables initialized with the passed-in data
  const [newFeatureImage, setNewFeatureImage] = useState(featureImage);
  const [newName, setNewName] = useState(name);
  const [newMaterials, setNewMaterials] = useState(materials.join(', '));
  const [newSteps, setNewSteps] = useState(steps);
  const [newYoutubeLink, setNewYoutubeLink] = useState(youtubeLink);
  const [newPdfLink, setNewPdfLink] = useState(pdfLink);
  const [newTags, setNewTags] = useState(tags);

  // Predefined tags
  const predefinedTags = ['Crochet', 'Knitting', 'Sewing', 'DIY', 'Craft', 'Technology', 'Patterns'];

  // Function to handle image selection
  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setNewFeatureImage(response.assets[0].uri);
      }
    });
  };

  // Function to handle tag selection/deselection
  const handleTagPress = (tag) => {
    if (newTags.includes(tag)) {
      setNewTags(newTags.filter((t) => t !== tag)); // Deselect the tag
    } else {
      setNewTags([...newTags, tag]); // Select the tag
    }
  };

  // Function to handle form submission
  const handleSubmit = () => {
    const updatedData = {
      featureImage: newFeatureImage,
      name: newName,
      materials: newMaterials.split(',').map((material) => material.trim()),
      steps: newSteps,
      youtubeLink: newYoutubeLink,
      pdfLink: newPdfLink,
      tags: newTags,
    };

    console.log('Updated Form Data:', updatedData); // You can send updated data to your backend or perform other actions
    navigation.goBack(); // Go back to the previous screen after saving the updated data
  };

  return (
    <View style={styles.main}>
      {/* Feature Image Picker */}
      <TouchableOpacity onPress={pickImage} style={styles.tag}>
        <Text style={styles.tagText}>Pick Feature Image</Text>
      </TouchableOpacity>
      {newFeatureImage && <Image source={{ uri: newFeatureImage }} style={styles.imagePreview} />}

      {/* Pattern Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Pattern Name"
        value={newName}
        onChangeText={setNewName}
      />

      {/* Materials List Input */}
      <TextInput
        style={styles.input}
        placeholder="Materials (comma separated)"
        value={newMaterials}
        onChangeText={setNewMaterials}
      />

      {/* Steps Input */}
      <TextInput
        style={[styles.input, { height: 100 }]} // Multiline input for steps
        placeholder="Steps"
        value={newSteps}
        onChangeText={setNewSteps}
        multiline
      />

      {/* YouTube Link Input */}
      <TextInput
        style={styles.input}
        placeholder="YouTube Link"
        value={newYoutubeLink}
        onChangeText={setNewYoutubeLink}
      />

      {/* PDF Link Input */}
      <TextInput
        style={styles.input}
        placeholder="PDF Link"
        value={newPdfLink}
        onChangeText={setNewPdfLink}
      />

      {/* Tags Input */}
      <Text style={styles.tagTitle}>Select Tags</Text>
      <View style={styles.tagContainer}>
        {predefinedTags.map((tag) => (
          <TouchableOpacity
            key={tag}
            style={[styles.tag, newTags.includes(tag) && styles.selectedTag]}
            onPress={() => handleTagPress(tag)}
          >
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Save Button */}
      <TouchableOpacity onPress={handleSubmit} style={styles.tag}>
        <Text style={styles.tagText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}
