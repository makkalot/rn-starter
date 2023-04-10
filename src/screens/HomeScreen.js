import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'column' }}>
      <Text style={styles.text}>HomeScreen</Text>
      <View style={styles.buttons}>
        <Button 
          onPress={() => navigation.navigate('GettingStarted')}
          title="Go to Components Demo"
        />
      </View>

      <View style={styles.buttons}>
        <Button 
          style={styles.buttons}
          onPress={() => navigation.navigate('List')}
          title="Go to List Demo"
        />
      </View> 
      <View style={styles.buttons}>
        <Button 
          style={styles.buttons}
          onPress={() => navigation.navigate('ImageScreen')}
          title="Go to Images"
        />
      </View> 

    </View>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttons: {
    marginTop: 10
  }
});

export default HomeScreen;
