import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const EditProjectScreen = ({ route, navigation }) => {
  const { projectId } = route.params;
  const [project, setProject] = useState({
    name: '',
    description: '',
    created_at: '', // Assuming this field is updated automatically on the server
  });

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(`http://192.168.105.76:8000/projects/${projectId}/`);
        if (!response.ok) {
          throw new Error('Failed to fetch project details');
        }
        const projectData = await response.json();
        setProject(projectData);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProjectDetails();
  }, [projectId]);

  const handleUpdateProject = async () => {
    try {
      const response = await fetch(`http://192.168.217.76:8000/projects/${projectId}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: project.name,
          description: project.description,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update project');
      }

      const updatedProjectData = await response.json();
      console.log('Updated project:', updatedProjectData);

      navigation.goBack();
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  return (
    <ImageBackground source={require('../assets/1111.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.label}>Project Name</Text>
        <TextInput
          style={styles.input}
          value={project.name}
          onChangeText={text => setProject({ ...project, name: text })}
          placeholder="Enter project name"
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>Project Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          multiline
          numberOfLines={4}
          value={project.description}
          onChangeText={text => setProject({ ...project, description: text })}
          placeholder="Enter project description"
          placeholderTextColor="#999"
        />
        <Button title="Update Project" onPress={handleUpdateProject} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    color: '#333',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', // For multiline TextInput
  },
});

export default EditProjectScreen;
