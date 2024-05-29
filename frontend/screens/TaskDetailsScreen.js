import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';

const TaskDetailsScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://192.168.217.76:8000/tasks/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTasks(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      Alert.alert('Error', 'Failed to fetch tasks. Please check your network connection and try again.');
      setLoading(false);
    }
  };

  const handleEditTask = (task) => {
    navigation.navigate('EditTask', { task });
  };

  const renderTaskItem = ({ item }) => (
    <TouchableOpacity style={styles.taskItem} onPress={() => handleEditTask(item)}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.priority}>Priority: {item.priority}</Text>
        <Text style={styles.category}>Category: {item.category}</Text>
      </View>
      <Text style={styles.edit}>Edit</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/122.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <FlatList
          data={tasks}
          renderItem={renderTaskItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.taskList}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
    borderRadius: 8,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Adjust text color if necessary
  },
  priority: {
    fontSize: 16,
    marginBottom: 3,
    color: '#666', // Adjust text color if necessary
  },
  category: {
    fontSize: 16,
    color: '#666',
  },
  edit: {
    fontSize: 16,
    color: '#3498db',
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskList: {
    paddingHorizontal: 10,
  },
});

export default TaskDetailsScreen;
