import {StyleSheet, View, NativeModules} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import Button from '../components/atoms/Button';
import Label from '../components/atoms/Label';
import {Colors} from '../styles/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

type NavigationProp = StackNavigationProp<RootStackParamList, 'DeviceIDScreen'>;

type Props = {
  navigation: NavigationProp;
};

const {DeviceModule} = NativeModules;

const DeviceID = (props: Props) => {
  const {navigation} = props;

  const [deviceID, setDeviceID] = React.useState('');

  const getDevice = async () => {
    const deviceID = await DeviceModule.getDeviceID();
    setDeviceID(deviceID);
  };

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
        <Label text={'Task 1'} size={36} weight={'bold'} color={Colors.WHITE} />
        <Label
          text={'Get Device ID using bridge native module.'}
          size={20}
          weight={'400'}
          color={Colors.WHITE}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Button
          style={{marginBottom: 16, width: '50%', backgroundColor: Colors.BLUE}}
          onPress={getDevice}>
          <Label
            text={'Get Device ID'}
            size={16}
            weight={'500'}
            color={Colors.WHITE}
          />
        </Button>
        {deviceID !== '' && (
          <Label text={`Your Device ID: ${deviceID}`} size={16} weight={'500'} />
        )}
      </View>
    </View>
  );
};

export default DeviceID;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLUE_DARK,
    padding: 16,
  },
});
