import { View, Text, StyleSheet } from 'react-native';

const EventItem = ({ title, date }) => {
  return (
    <View style={styles.eventItem}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: '#555',
  },
});

export default EventItem;