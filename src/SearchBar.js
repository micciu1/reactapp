import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.searchContainer}>
      <View style={styles.barContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    alignItems: 'center',
  },
  barContainer: {
    width: width/2,
    height: 30,
    backgroundColor: 'rgba(211, 211, 211, 0.7)',
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
});

export default SearchBar;