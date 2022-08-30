import {StyleSheet, FlatList, View, Alert} from 'react-native';
import React from 'react';
import Label from '../atoms/Label';
import RenderItem from '../molecules/RenderItem';
import useCart from '../../hooks/useCart';
import Button from '../atoms/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../styles/Colors';

type Props = {};

const ListCart = (props: Props) => {
  const {burgers, cart, addToCart, removeFromCart} = useCart();

  const addRandomBurger = () => {
    if (burgers.length > 0) {
      addToCart(burgers[Math.floor(Math.random() * burgers.length)]);
    } else {
      Alert.alert('Attention', 'Please wait, burgers data not fetched yet.');
    }
  };

  const renderItem = ({item}: any) => (
    <RenderItem data={item} onPress={() => removeFromCart(item)} />
  );

  const keyExtractor = (item: any, index: number) => item?.id + index;

  const ListEmptyComponent = () => (
    <View style={{alignSelf: 'center', marginTop: 16}}>
      <Label text={'No Data'} />
    </View>
  );

  return (
    <View>
      <View style={{alignItems: 'center', marginBottom: 16}}>
        <Button
          style={{
            marginBottom: 16,
            width: '50%',
            backgroundColor: Colors.BLUE,
            flexDirection: 'row',
          }}
          onPress={addRandomBurger}>
          <Label
            style={{marginRight: 5}}
            text={'Add Random Burger'}
            size={16}
            weight={'500'}
            color={Colors.WHITE}
          />
          <Ionicons name={'cart'} size={20} color={Colors.WHITE} />
        </Button>
      </View>
      <FlatList
        data={cart}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default React.memo(ListCart);

const styles = StyleSheet.create({});
