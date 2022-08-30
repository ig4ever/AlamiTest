import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import Button from '../components/atoms/Button';
import Label from '../components/atoms/Label';
import {Colors} from '../styles/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListCart from '../components/organisms/ListCart';

type NavigationProp = StackNavigationProp<RootStackParamList, 'CartScreen'>;

type Props = {
  navigation: NavigationProp;
};

const Cart = (props: Props) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'flex-start', marginBottom: 20}}>
        <Button
          style={{
            marginBottom: 16,
            backgroundColor: Colors.BLUE,
            borderRadius: 100,
            width: 50,
            height: 50,
            paddingHorizontal: 0,
          }}
          onPress={() => navigation.goBack()}>
          <Ionicons name={'chevron-back'} size={26} color={Colors.WHITE} />
        </Button>
      </View>
      <View style={{marginBottom: 60}}>
        <Label text={'Task 2'} size={36} weight={'bold'} color={Colors.WHITE} />
        <Label
          text={'Cart. Hooks 1 Render.'}
          size={20}
          weight={'400'}
          color={Colors.WHITE}
        />
      </View>
      <ListCart />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLUE_DARK,
    padding: 16,
  },
});
