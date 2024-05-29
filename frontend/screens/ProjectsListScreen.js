import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, ImageBackground, TouchableOpacity } from 'react-native';

const ProjectsListScreen = ({ navigation }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://192.168.217.76:8000/projects/');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const projectsData = await response.json();
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleEditProject = (projectId) => {
    navigation.navigate('EditProject', { projectId });
  };

  const renderProjectItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleEditProject(item.id)} style={styles.projectItem}>
        <Text style={styles.projectName}>{item.name}</Text>
        <Text style={styles.projectDescription}>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground source={require('../assets/123.jpg')} style={styles.background}>
      <View style={styles.container}>
        <FlatList
          data={projects}
          renderItem={renderProjectItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {
    paddingBottom: 50, // Adjust padding bottom to prevent content from being hidden behind the navigation bar
  },
  projectItem: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '90%', // Take 90% of the container's width
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ProjectsListScreen;
