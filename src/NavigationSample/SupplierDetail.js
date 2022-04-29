import {View, Text, Button} from 'react-native';
import React from 'react';

const SupplierDetail = ({navigation}) => {
  return (
    <View>
      <Text>SupplierDetail</Text>
      <Button onPress={() => navigation.goBack()} title="Go Back!">
        {' '}
      </Button>
    </View>
  );
};

export default SupplierDetail;
