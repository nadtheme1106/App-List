// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import EditTaskScreen from './screens/EditTaskScreen';
import TaskDetailsScreen from './screens/TaskDetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import AboutScreen from './screens/AboutScreen';
import ProjectsListScreen from './screens/ProjectsListScreen';
import EditProjectScreen from './screens/EditProjectScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Pluto"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007bff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <TouchableOpacity style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Logout</Text>
            </TouchableOpacity>
          ),
        }}
      >
        <Stack.Screen name="Pluto" component={HomeScreen} options={{ title: 'Pluto' }} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} options={{ title: 'Add Game' }} />
        <Stack.Screen name="EditTask" component={EditTaskScreen} options={{ title: 'Edit Game' }} />
        <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} options={{ title: 'Game Details' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Gamer Profile' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
        <Stack.Screen name="ProjectsList" component={ProjectsListScreen} options={{ title: 'Projects List' }} />
        <Stack.Screen name="EditProject" component={EditProjectScreen} options={{ title: 'Edit Project' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    marginRight: 15,
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
