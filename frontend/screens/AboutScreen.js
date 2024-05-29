import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, ImageBackground } from 'react-native';

const AboutScreen = () => {
  const handleContactPress = () => {
    Linking.openURL('mailto:support@example.com');
  };

  return (
    <ImageBackground
      source={require('../assets/1111.jpg')} // Replace 'background_image.jpg' with your image file
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>About Screen</Text>
        <Text style={styles.paragraph}>
          Welcome to Pluto. An Application which is specifically built to provide a platform for 
          developers who categorize the global applications and update about their projects.This App is
          only for Developers.
        </Text>
        <View style={styles.section}>
          <Text style={styles.subheading}>Version 1.0.0</Text>
          <Text style={styles.notes}>
            - Added functionality to add tasks
            - Improved user interface
            - Bug fixes and performance improvements
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subheading}>Credits:</Text>
          <Text style={styles.credits}>- Developed by Nadeem</Text>
          <Text style={styles.credits}>- Icons provided by Icon Library</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subheading}>Contact Us:</Text>
          <Text style={styles.contact} onPress={handleContactPress}>support@example.com</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // Text color for heading
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
    color: '#fff', // Text color for paragraph
  },
  section: {
    marginBottom: 30,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // Text color for subheading
  },
  notes: {
    fontSize: 16,
    marginBottom: 20,
    color: '#fff', // Text color for notes
  },
  credits: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff', // Text color for credits
  },
  contact: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default AboutScreen;
