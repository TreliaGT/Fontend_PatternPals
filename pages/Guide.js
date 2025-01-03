import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const crochetStitches = [
  { id: '1', us: 'Chain Stitch (ch)', uk: 'Chain Stitch (ch)' },
  { id: '2', us: 'Slip Stitch (sl st)', uk: 'Slip Stitch (sl st)' },
  { id: '3', us: 'Double Crochet (dc)', uk: 'Treble Crochet (tr)' },
  { id: '4', us: 'Half Double Crochet (hdc)', uk: 'Half Treble Crochet (htr)' },
];

const knittingStitches = [
  { id: '1', us: 'Knit (k)', uk: 'Knit (k)' },
  { id: '2', us: 'Purl (p)', uk: 'Purl (p)' },
  { id: '3', us: 'Knit 2 Together (k2tog)', uk: 'Knit 2 Together (k2tog)' },
  { id: '4', us: 'Yarn Over (yo)', uk: 'Yarn Over (yo)' },
];

export default function StitchesScreen() {
  const [activeCategory, setActiveCategory] = useState('crochet'); // Default to Crochet

  const renderStitches = (category) => {
    const stitches = category === 'crochet' ? crochetStitches : knittingStitches;
    return (
      <FlatList
        data={stitches}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 15 }}>
            <Text><Text style={{ fontWeight: 'bold' }}>US:</Text> {item.us}</Text>
            <Text><Text style={{ fontWeight: 'bold' }}>UK:</Text> {item.uk}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    );
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Buttons to switch between Crochet and Knitting */}
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <TouchableOpacity
          onPress={() => setActiveCategory('crochet')}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: activeCategory === 'crochet' ? '#3b82f6' : '#ddd',
            borderRadius: 5,
            marginRight: 10,
          }}
        >
          <Text style={{ color: activeCategory === 'crochet' ? '#fff' : '#000' }}>Crochet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveCategory('knitting')}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: activeCategory === 'knitting' ? '#3b82f6' : '#ddd',
            borderRadius: 5,
          }}
        >
          <Text style={{ color: activeCategory === 'knitting' ? '#fff' : '#000' }}>Knitting</Text>
        </TouchableOpacity>
      </View>

      {/* Display stitches based on the selected category */}
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        {activeCategory === 'crochet' ? 'Crochet Stitches' : 'Knitting Stitches'}
      </Text>

      {renderStitches(activeCategory)}
    </View>
  );
}
