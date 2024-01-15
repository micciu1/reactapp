// GuestView.js
import React from 'react';
import TriangleBackground from './TriangleBackground';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import EventItem from './EventItem';
import { View, Text, Button, StyleSheet } from 'react-native';

const eventsData = [
    { id: '1', title: 'Event 1', date: '2024-01-15' },
    { id: '2', title: 'Event 2', date: '2024-01-20' },
    
  ];

const GuestView = ({ onNavigateToLogin }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TriangleBackground>
        <Navbar />
        <SearchBar />
        </TriangleBackground>
        <FlatList
        data={eventsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={require("../assets/imagetest1.png")} style={styles.eventImage}/>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
        style={styles.eventList}
      />
      
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    eventList: {
      flex: 1,
      height:800,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      alignSelf:'center',
      width: '80%', // Set the width as needed
      borderRadius: 10, // Add borderRadius if you want rounded corners
      overflow: 'hidden',
      marginTop:-400,
      marginBottom:100,
      alignContent: 'center'
    },
  
    eventItem: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    eventImage: {
      alignItems:'stretch',
      width: 40,
      height: 40,
    },
  
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    date: {
      color: '#555',
      marginTop: 8, // Add spacing between title and date if needed
    },
  });
  

export default GuestView;
