import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const eventsData = [
  { id: '1', title: 'Event 1', startDate: '2024-01-15' ,endDate: '2025-01-15',savedMembers: "10",allMembers: "30", imagege: require("../assets/imagetest1.png")},
  { id: '2', title: 'Event 2', startDate: '2024-01-20' ,endDate: '2025-01-20',savedMembers: "15",allMembers: "35", imagege: require("../assets/favicon.png")},
  
];

const EventList = () => {
  return (
    <FlatList
          data={eventsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
          <View style={styles.eventItemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.eventItemDetailsContainer}>
              <View style={styles.imageContainer}>
                <Image source={item.imagege} style={styles.eventImage} />
              </View>
            
              <View style={styles.textContainer}>
                <Text style={styles.textContent}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....
                  "
                </Text>
                <View style={styles.iconDateContainer}>
                  <View style={styles.dateContainer}>
                    <Text style={styles.startDate}>{item.startDate}</Text>
                    <Text style={styles.endDate}>{item.endDate}</Text>
                  </View>
                <View style={styles.eventIconContainer}>
                  <TouchableOpacity>
                    <Image source={require("../assets/oko.png")} style={styles.eventIcon} />
                  </TouchableOpacity>
                  <Text style={styles.textMember}>{item.savedMembers}/{item.allMembers}</Text>
                  <TouchableOpacity>
                  <Image source={require("../assets/usericon.png")} style={styles.eventIcon} />
                  </TouchableOpacity>
                </View>
                </View>
              </View>

            </View>
          </View>
        )}
        style={styles.eventList}
      />
  );
};

const styles = StyleSheet.create({
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

  eventItemContainer: {
    alignItems: 'center',
    //flexDirection: 'column', 
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  eventItemDetailsContainer: {
    flexDirection: 'row', 
  },

  imageContainer: {
    marginRight: 16, 
  },


  eventImage: {
    width: 100,
    height: 100,
  },

  eventIconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20, // Push the icon to the right
  },

  eventIcon: {
    width: 40,
    height: 40,
  },

  textContainer: {
    flex: 1, 
    flexDirection: 'column', 
  },

  textContent: {
    color: '#888',
    marginLeft: 10,
  },

  textMember: {
    color: 'black',
    marginLeft: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    //marginBottom: 8,
  },

  iconDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Distribute items horizontally
    width: '100%', // Occupy the entire width of the container
    marginTop: 8,
    marginLeft:-50, // Add margin between text and icon/date container
  },

  dateContainer: {
    alignItems: 'center',
  },

  startDate: {
    color: '#00eb14',
    marginTop: 8, 
  },
  endDate: {
    color: 'black',
    marginTop: 8, 
  },
});

export default EventList;