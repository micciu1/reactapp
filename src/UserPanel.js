// UserPanel.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserPanel = () => {
  return (
    <View style={styles.container}>
      <Text>User Panel</Text>
      {/* Tutaj można dodać więcej elementów interfejsu */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserPanel;
