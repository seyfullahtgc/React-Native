import {View, Text} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';

const FavScreen = props => {
  return (
    <View>
      <Text>{props.favorite.length}</Text>
      {props.favorite.map(item => (
        <Text>{item.title}</Text>
      ))}
    </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(FavScreen);
