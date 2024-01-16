import {View, StyleSheet, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import TriangleBackground from './src/TriangleBackground';
import Navbar from './src/Navbar';
import SearchBar from './src/SearchBar';
import EventList from './src/EventList';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TriangleBackground>
          <Navbar />
          <SearchBar />
        </TriangleBackground>
        <EventList />
      
      </SafeAreaView>
    </SafeAreaProvider>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
