import { View, Text, StyleSheet } from 'react-native';
import TriangleBackground from './TriangleBackground';
import Navbar from './Navbar';
import EventList from './EventList';
import SearchBar from './SearchBar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const AppScreen = () => {
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default AppScreen;