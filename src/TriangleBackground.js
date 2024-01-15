import { View, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native';


const { width, height } = Dimensions.get('window');

const TriangleBackground = ({ children }) => {
  
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={[styles.triangle, styles.greenTriangle]} />
      <View style={[styles.triangle, styles.blueTriangle]} />
      <View>{children}</View>
    </KeyboardAvoidingView>
    
  );
};

const styles = StyleSheet.create({
    testy: {
      backgroundColor: 'black'
    },
    container: {
        flex: 1,
        position: 'relative',
        //justifyContent: 'center',
        //alignItems: 'center',
        
      },
    triangle: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        position: 'absolute',
      },
    greenTriangle: {
        borderLeftWidth: width-10,
        borderBottomWidth: height-10,
        borderLeftColor: 'transparent',
        borderBottomColor: 'green',
        top: 0,
        left: 0,
        transform: [{ rotate: '180deg' }],
      },
    blueTriangle: {
        
        borderLeftWidth: width-10,
        borderBottomWidth: height-10,
        borderLeftColor: 'transparent',
        borderBottomColor: 'blue',
        top:10,
        left:10,
        bottom: 0,
        right: 0,
        //transform: [{ rotate: '180deg' }],
      },

  });
  
  export default TriangleBackground;