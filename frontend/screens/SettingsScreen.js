import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert, ImageBackground } from 'react-native';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [language, setLanguage] = useState('English');
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(prevState => !prevState);
  };

  const handleLanguageChange = () => {
    setLanguage(language === 'English' ? 'Spanish' : 'English');
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(prevState => !prevState);
    Alert.alert(
      'Dark Mode',
      darkModeEnabled ? 'Dark mode is now enabled' : 'Dark mode is now disabled',
    );
  };

  return (
    <ImageBackground
      source={require('../assets/1221.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Enable Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
            trackColor={{ false: '#ccc', true: '#007bff' }}
            thumbColor={notificationsEnabled ? '#007bff' : '#f4f3f4'}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Change Language</Text>
          <TouchableOpacity onPress={handleLanguageChange}>
            <Text style={styles.languageText}>{language}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Switch
            value={darkModeEnabled}
            onValueChange={toggleDarkMode}
            trackColor={{ false: '#ccc', true: '#007bff' }}
            thumbColor={darkModeEnabled ? '#007bff' : '#f4f3f4'}
          />
        </View>
        {/* Add more settings items here */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  settingLabel: {
    fontSize: 18,
    color: '#fff',
  },
  languageText: {
    fontSize: 18,
    color: '#007bff',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingsScreen;
