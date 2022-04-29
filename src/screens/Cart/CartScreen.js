import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import CartContext from '../../store/CartContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NumericInput from 'react-native-numeric-input';
const CartScreen = () => {
  const {cart, setCart, totalPrice, setTotalPrice} = useContext(CartContext);

  const DeleteCart = item => {
    if (cart.length == 1) {
      setTotalPrice(0);
    }
    var index = cart.indexOf(item);
    cart.splice(index, 1);
    setCart([...cart]);
  };
  function ChangeQuantity(item, value) {
    var findedProduct = cart.find(x => x.id == item.id);
    findedProduct.quantity = value;
    setCart([...cart]);
  }
  var total = 0;
  const renderItem = ({item}) => {
    total = total + item.quantity * item.price;
    setTotalPrice(total.toFixed(2));
    return (
      <View style={styles.itemGroup}>
        <View style={styles.itemPhotobox}>
          <Image style={styles.itemPhoto} source={{uri: item.image}}></Image>
        </View>
        <View style={styles.itemContent}>
          <View style={styles.itemContentHeader}>
            <Text style={styles.itemContentHeaderTitle}>
              {item.title.substring(0, 20)}
            </Text>
            <TouchableOpacity
              style={styles.itemContentHeaderDelete}
              onPress={() => DeleteCart(item)}>
              <MaterialCommunityIcons
                name="trash-can-outline"
                size={26}></MaterialCommunityIcons>
            </TouchableOpacity>
          </View>
          <View style={styles.itemContentPrice}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                flex: 1,
                alignSelf: 'center',
              }}>
              {item.price.toFixed(2)}
            </Text>
            <Text style={{flex: 0.5, alignSelf: 'center'}}> x </Text>
            {/* <Text style={{fontSize: 20, fontWeight: '600'}}>
              {item.quantity}
            </Text> */}
            <View style={{flex: 2}}>
              <NumericInput
                totalWidth={80}
                totalHeight={40}
                initValue={item.quantity}
                value={item.quantity}
                onChange={value => ChangeQuantity(item, value)}
                minValue={0}
              />
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '800',
                flex: 1,
                alignSelf: 'center',
              }}>
              {item.quantity * item.price.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={cart}
        renderItem={renderItem}></FlatList>
      <View style={styles.cartdetail}>
        <Text>Sepet Toplamı: {totalPrice}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  flatlist: {
    flex: 15,
  },
  cartdetail: {
    flex: 0.3,
  },
  itemGroup: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#8a7d7e',
    borderRadius: 10,
    paddingRight: 15,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    height: 150,
    marginBottom: 10,
  },
  itemPhotobox: {
    flex: 1,
    marginRight: 10,
  },
  itemPhoto: {
    flex: 1,
    resizeMode: 'contain',
  },
  itemContent: {
    flex: 4,
  },
  itemContentHeader: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  itemContentHeaderTitle: {
    flex: 2,
    fontSize: 20,
    fontWeight: '600',
  },
  itemContentHeaderDelete: {
    backgroundColor: '#db1a1e',
    borderRadius: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  itemContentPrice: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
});

export default CartScreen;
