import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

export default function Welcome(props) {
  const { navigation } = props;
  console.log('welcome')

  return (
    <View style={styles.container}>
      <Text> Welcome</Text>
      <Button title={"Tap To View Instructions"} onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#F5F5F5',
    justifyContent: "center", alignItems: "center"
  }
});

