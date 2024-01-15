import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';


const Navbar = () => {
  return (
    <View style={styles.navbar}>
      {/* Logo */}
      <TouchableOpacity style={styles.logoContainer}>
      <Image source={require("../assets/logozut.png")} style={styles.logoImage}/>
      </TouchableOpacity>

      {/* Przycisk "Zaloguj" */}
      <TouchableOpacity onPress={() => console.log('Zaloguj')}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Zaloguj</Text>
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