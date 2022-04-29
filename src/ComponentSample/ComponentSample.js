import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import React from 'react';

const ComponentSample = () => {
  return (
    <View>
      <Text style={styles.header}>ComponentSample</Text>
      <TouchableOpacity
        onPress={() => {
          alert('Tıkladınız!');
        }}>
        <Text style={styles.text}>Click Me</Text>
      </TouchableOpacity>
      <TextInput keyboardType="numeric" style={styles.input}></TextInput>
      <Button title="Click Me!"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: '800',
  },
  text: {
    fontSize: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ComponentSample;
