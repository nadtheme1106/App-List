import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ImageBackground, ScrollView } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const profiles = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Doe', email: 'jane@example.com' },
    { name: 'Alice Smith', email: 'alice@example.com' },
    { name: 'Bob Johnson', email: 'bob@example.com' },
    { name: 'Emily Brown', email: 'emily@example.com' },
    // Add more profiles as needed
  ];

  const handleEditProfile = () => {
    navigation.navigate('EditProfile'); // Navigate to the edit profile screen
  };

  const handleLogout = () => {
    // Placeholder for handling user logout
    Alert.alert('Logout', 'Implement logic to handle user logout');
  };

  return (
    <ImageBackground
      source={require('../assets/11.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollView} scrollEnabled={true}>
        {profiles.map((profile, index) => (
          <View key={index} style={styles.profileContainer}>
            <Text style={styles.title}>User Profile</Text>
            <View style={styles.profileInfo}>
              <Text style={styles.label}>Name:</Text>
              <Text style={styles.value}>{profile.name}</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{profile.email}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#FF5733' }]} onPress={handleLogout}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    width: '100%',
    padding: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
