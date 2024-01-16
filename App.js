import {View, StyleSheet, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import TriangleBackground from './src/TriangleBackground';
import Navbar from './src/Navbar';
import SearchBar from './src/SearchBar';
import EventList from './src/EventList';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import AppScreen from './src/AppScreen'; 
import LoginScreen from './src/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={AppScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
