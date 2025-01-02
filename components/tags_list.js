import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from '../Styles';

export default function TagsList({ order = "" }) {
    const [selectedTags, setSelectedTags] = useState([]); // Array to store selected tags

    // Sample content for each tag
    const items = [
        {
            id: '1',
            title: 'Crochet for Beginners',
            label: 'Craft',
            image: 'https://via.placeholder.com/150',
            tags: ['Beginner', 'Crochet', 'Handmade'],
        },
        {
            id: '2',
            title: 'Advanced Knitting Techniques',
            label: 'Craft',
            image: 'https://via.placeholder.com/150',
            tags: ['Advanced', 'Knitting', 'Patterns'],
        },
        {
            id: '3',
            title: 'Sewing Basics',
            label: 'Craft',
            image: 'https://via.placeholder.com/150',
            tags: ['Sewing', 'Beginner', 'DIY'],
        },
        {
            id: '4',
            title: 'Tech Trends 2025',
            label: 'Technology',
            image: 'https://via.placeholder.com/150',
            tags: ['Technology', 'Trends', 'Future'],
        },
    ];

    // Filter the items based on the selected tags
    const filterItems = () => {
        if (selectedTags.length === 0) return items; // If no tags selected, show all items
        return items.filter(item =>
            item.tags.some(tag => selectedTags.includes(tag)) // Show items that match selected tags
        );
    };

    // Handle tag selection
    const handleTagPress = (tag) => {
        setSelectedTags(prevTags =>
            prevTags.includes(tag)
                ? prevTags.filter(t => t !== tag) // If tag is already selected, deselect it
                : [...prevTags, tag] // Else, add the tag to selected tags
        );
    };

    // Render the item list based on selected tags
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.label}>{item.label}</Text>
        </View>
    );

    // Create unique sorted list of tags from all items
    const uniqueTags = [...new Set(items.flatMap(item => item.tags))].sort();

    return (
        <View style={styles.container}>
            {/* Render filter tags */}
            <View style={styles.tagContainer}>
                {uniqueTags.map(tag => (
                    <TouchableOpacity
                        key={tag}
                        style={[styles.tag, selectedTags.includes(tag) && styles.selectedTag]}
                        onPress={() => handleTagPress(tag)}
                    >
                        <Text style={styles.tagText}>{tag}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Display filtered items */}
            <FlatList
                data={filterItems()}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}
