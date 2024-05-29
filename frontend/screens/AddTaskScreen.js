import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';

const AddTaskScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low');
  const [category, setCategory] = useState('Personal');

  const addTask = async () => {
    try {
      const newTask = {
        title: title,
        priority: priority,
        category: category,
      };

      const response = await fetch('http://192.168.217.76:8000/tasks/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        navigation.goBack();
      } else {
        console.error('Error adding task:', response.status);
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/123.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Add New Task</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter task title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter task priority"
          value={priority}
          onChangeText={(text) => setPriority(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter task category"
          value={category}
          onChangeText={(text) => setCategory(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    fontSize: 18,
    color: '#333',
  },
  addButton: {
    width: '100%',
    backgroundColor: '#3498db',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddTaskScreen;
