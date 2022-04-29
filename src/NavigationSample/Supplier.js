import {View, Text, Button} from 'react-native';
import React from 'react';

const Supplier = ({navigation}) => {
  return (
    <View>
      <Text>NavigationSample</Text>
      <Button
        title="Supplier Detail"
        onPress={() => navigation.navigate('SupplierDetail')}></Button>
    </View>
  );
};

export default Supplier;
