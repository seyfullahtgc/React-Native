import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';

const FlatListSample = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(err => console.log(err.message));
  }, []);

  const RenderItem = ({item}) => {
    return <Text>{item.name}</Text>;
  };
  return (
    <View>
      <FlatList data={products} renderItem={RenderItem}></FlatList>
    </View>
  );
};

export default FlatListSample;
