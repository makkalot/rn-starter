import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GettingStartedScreen = () => {
  const myname = 'makkalot';

  return (
    <View>
      <Text style={styles.text}>GettingStarted with react native !</Text>
      <Text style={styles.textSubHeader}>My name is : {myname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  textSubHeader: {
    fontSize: 20
  }
});

export default GettingStartedScreen;
