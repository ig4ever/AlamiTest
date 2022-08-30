import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import Label from '../components/atoms/Label';
import Button from '../components/atoms/Button';
import {Colors} from '../styles/Colors';

type NavigationProp = StackNavigationProp<RootStackParamList, 'MainScreen'>;

type Props = {
  navigation: NavigationProp;
};

const Main = (props: Props) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', marginBottom: 20}}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Label text={'Test'} size={36} weight={'bold'} />
          <Label
            text={'Alami'}
            size={36}
            weight={'bold'}
            color={Colors.BLUE_DARK}
          />
        </View>
        <Label
          text={'by Rakhmat S'}
          size={14}
          weight={'400'}
          color={Colors.BLACK}
        />
      </View>
      <Button
        style={{marginBottom: 16, width: '50%'}}
        onPress={() => navigation.navigate('DeviceIDScreen')}>
        <Label text={'Task 1: Get Device ID'} size={16} weight={'500'} />
      </Button>
      <Button
        style={{marginBottom: 16, width: '50%'}}
        onPress={() => navigation.navigate('CartScreen')}>
        <Label text={'Task 2: Cart'} size={16} weight={'500'} />
      </Button>
      <Button
        style={{marginBottom: 16, width: '50%'}}
        onPress={() => navigation.navigate('ProgressBarScreen')}>
        <Label text={'Task 3: Progress Bar'} size={16} weight={'500'} />
      </Button>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
