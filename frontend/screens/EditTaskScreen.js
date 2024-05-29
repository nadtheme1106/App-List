import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const EditTaskScreen = ({ navigation, route }) => {
  const { task } = route.params;
  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);
  const [category, setCategory] = useState(task.category);

  const editTask = async () => {
    try {
      const response = await fetch(`http://192.168.217.76:8000/tasks/${task.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, priority, category }),
      });

      if (!response.ok) {
        throw new Error('Failed to edit task. Please try again later.');
      }

      navigation.goBack();
    } catch (error) {
      console.error('Error editing task:', error);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
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
      <Button title="Save Changes" onPress={editTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default EditTaskScreen;
