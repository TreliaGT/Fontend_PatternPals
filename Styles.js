import { StyleSheet } from 'react-native';

/**
 * Cream: FFFAEC
 * Dark Cream: F5ECD5
 * Green: 578E7E
 * Black: 3D3D3D
 */

// Create a basic stylesheet
export default StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
        backgroundColor: "#FFFAEC"
    },
    title: {
        fontSize: 24,
        color: "#3D3D3D",
    },
    container: {
        flex: 1,
        paddingBlock: 20,
      },
      nameContainer: {
        flexDirection: 'row',            // Align items horizontally in a row
        justifyContent: 'space-between', // Space between the items (left and right)
        alignItems: 'center',           // Vertically center the items
        paddingHorizontal: 20,          // Optional: add horizontal padding for spacing
      },
      tagContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        flexWrap: 'wrap',
      },
      tag: {
        padding: 10,
        backgroundColor: '#3D3D3D',
        marginRight: 10,
        borderRadius: 5,
        marginBottom:10,
        alignSelf: 'flex-start',
      },

      selectedTag: {
        backgroundColor: '#578E7E',
      },
      tagText: {
        color: '#fff',
      },
      contentContainer: {
        flex: 1,
      },
      contentItem: {
        fontSize: 16,
        marginVertical: 10,
      },
      imagePreview: {
        width: 100,
        height: 100,
        marginVertical: 10,
      },
      input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
      },
});
