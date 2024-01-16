import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

const Navbar = () => {

  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login'); 
    
  };

  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.navbar}>
      {/* Logo */}
      <TouchableOpacity onPress={handleHomePress} style={styles.logoContainer}>
      <Image source={require("../assets/logozut.png")} style={styles.logoImage}/>
      </TouchableOpacity>

      {/* Przycisk "Zaloguj" */}
      <TouchableOpacity onPress={handleLoginPress}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>{'Zaloguj'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    left: 40
  },
  logoImage: {
    width: 60, // Dostosuj szerokość ikony według potrzeb
    height: 60, // Dostosuj wysokość ikony według potrzeb
  },
  loginButton: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Navbar;