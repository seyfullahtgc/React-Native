import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useEffect, useState, useContext} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartContext from '../../store/CartContext';
import {AddFav} from '../../store/action/fav.action';
import {connect} from 'react-redux';
const HomeScreen = props => {
  const [products, setProducts] = useState([]);
  const {cart, setCart, setTotalPrice, totalPrice} = useContext(CartContext);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);
  const AddToFav = item => {
    props.onCreate(item);
  };
  const AddCart = item => {
    var findedProduct = cart.find(x => x.id == item.id);

    if (findedProduct == undefined) {
      item.quantity = 1;
      setCart([...cart, item]);
    } else {
      findedProduct.quantity = findedProduct.quantity + 1;
      setCart([...cart]);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemGroup}>
        <View style={styles.itemPhotobox}>
          <Image
            style={styles.itemPhoto}
            source={{
              uri: item.image,
            }}
          />
        </View>
        <View style={styles.itemContent}>
          <Text style={styles.itemContentTitle}>
            {item.title.substring(0, 20)}
          </Text>
          <Text style={styles.itemContentPrice}>{item.price.toFixed(2)}₺</Text>
        </View>
        <View style={styles.itemButtons}>
          <TouchableOpacity
            style={styles.itemButtonsFav}
            onPress={() => AddToFav(item)}>
            <MaterialCommunityIcons
              name="cards-heart"
              size={20}></MaterialCommunityIcons>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => AddCart(item)}
            style={styles.itemButtonsCart}>
            <MaterialCommunityIcons
              name="cart"
              size={20}></MaterialCommunityIcons>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchButton}>
        <Text>search</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Products</Text>
      </View>
      <View style={styles.buttons}>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
      </View>
      <View style={styles.flatlistbox}>
        <FlatList
          style={styles.flatlist}
          data={products}
          renderItem={renderItem}></FlatList>
      </View>
    </SafeAreaView>
  );
};
const mapStateToProps = state => {
  return {
    favorite: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreate: data => {
      dispatch(AddFav(data));
    },
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  searchButton: {
    flex: 1,
  },
  header: {
    flex: 2,
  },
  headerText: {
    fontSize: 26,
    fontWeight: '600',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flatlistbox: {
    flex: 6,
    backgroundColor: '#c5c9d1',
    borderRadius: 10,
  },
  flatlist: {
    flex: 1,
    backgroundColor: '#c5c9d1',
    borderRadius: 10,
  },
  itemGroup: {
    flex: 1,
    padding: 12,
    backgroundColor: '#FFFFFF',
    margin: 15,
    borderRadius: 10,
  },
  itemPhotobox: {
    flex: 3,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#FDFDFD',
  },
  itemPhoto: {
    flex: 1,
    width: 300,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  itemContent: {
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  itemContentTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemContentPrice: {
    fontSize: 20,
    fontWeight: '800',
    color: '#4ea65d',
  },
  itemButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  itemButtonsCart: {
    flex: 1,
    backgroundColor: '#bd2828',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    maxWidth: 50,
    minHeight: 50,
  },
  itemButtonsFav: {
    flex: 1,
    backgroundColor: '#3e68c9',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    maxWidth: 50,
    minHeight: 50,
    marginRight: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
