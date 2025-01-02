import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Button, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker'; // Add this for image picking
import styles from '../Styles'; // Your custom styles


export default function CreateScreen(edit = null) {
    const [featureImage, setFeatureImage] = useState(null);
    const [name, setName] = useState('');
    const [materials, setMaterials] = useState('');
    const [steps, setSteps] = useState('');
    const [youtubeLink, setYoutubeLink] = useState('');
    const [pdfLink, setPdfLink] = useState('');
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');
  
    // Predefined tags
    const predefinedTags = ['Crochet', 'Knitting', 'Sewing', 'DIY', 'Craft', 'Technology', 'Patterns'];

    // Function to handle image selection
    const pickImage = () => {
      launchImageLibrary({ mediaType: 'photo' }, (response) => {
        if (response.assets && response.assets.length > 0) {
          setFeatureImage(response.assets[0].uri);
        }
      });
    };
  
      // Function to handle tag selection/deselection
    const handleTagPress = (tag) => {
        if (tags.includes(tag)) {
        setTags(tags.filter(t => t !== tag)); // Deselect the tag
        } else {
        setTags([...tags, tag]); // Select the tag
        }
    };
  
    const handleSubmit = () => {
      // Handle the form submission logic here
      const formData = {
        featureImage,
        name,
        materials: materials.split(',').map((material) => material.trim()),
        steps,
        youtubeLink,
        pdfLink,
        tags,
      };
      console.log('Form Data:', formData); // For now, just logging it
      // You can submit formData to an API or handle as needed
    };
  
    return (
      <View style={styles.main}>
        {/* Feature Image Picker */}
        <TouchableOpacity onPress={pickImage} style={styles.tag}>
          <Text style={styles.tagText}>Pick Feature Image</Text>
        </TouchableOpacity>
        {featureImage && <Image source={{ uri: featureImage }} style={styles.imagePreview} />}
  
        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Pattern Name"
          value={name}
          onChangeText={setName}
        />
  
        {/* Materials List Input */}
        <TextInput
          style={styles.input}
          placeholder="Materials (comma separated)"
          value={materials}
          onChangeText={setMaterials}
        />
  
        {/* Steps Input */}
        <TextInput
          style={[styles.input, { height: 100 }]} // Multiline input for steps
          placeholder="Steps"
          value={steps}
          onChangeText={setSteps}
          multiline
        />
  
        {/* YouTube Link Input */}
        <TextInput
          style={styles.input}
          placeholder="YouTube Link"
          value={youtubeLink}
          onChangeText={setYoutubeLink}
        />
  
        {/* PDF Link Input */}
        <TextInput
          style={styles.input}
          placeholder="PDF Link"
          value={pdfLink}
          onChangeText={setPdfLink}
        />
  
        {/* Tags Input */}
        <Text style={styles.tagTitle}>Select Tags</Text>
        <View style={styles.tagContainer}>
            {predefinedTags.map((tag) => (
            <TouchableOpacity
                key={tag}
                style={[styles.tag, tags.includes(tag) && styles.selectedTag]}
                onPress={() => handleTagPress(tag)}
            >
                <Text style={styles.tagText}>{tag}</Text>
            </TouchableOpacity>
            ))}
        </View>
  
        {/* Submit Button */}
        <TouchableOpacity onPress={handleSubmit} style={styles.tag}>
          <Text style={styles.tagText}>Add</Text>
        </TouchableOpacity>
      </View>
    );
}
