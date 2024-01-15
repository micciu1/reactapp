import { StyleSheet, Text, Dimensions } from 'react-native';
import TriangleBackground from './src/TriangleBackground';
import Navbar from './src/Navbar';
import SearchBar from './src/SearchBar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TriangleBackground>
        <Navbar />
        <SearchBar />
        <Text>sireanrnw</Text>
      </TriangleBackground>
      </SafeAreaView>
    </SafeAreaProvider>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
