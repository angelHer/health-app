import React from 'react';
import {TouchableHighlight, Text, View, StyleSheet} from 'react-native';

const RoundedButon = () => {
  const onPress = () => console.log('hola');

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.button}>
        <Text>Ingresar</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default RoundedButon;
