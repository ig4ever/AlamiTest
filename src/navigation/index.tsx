import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackParamList';
import Main from '../containers/Main';
import Cart from '../containers/Cart';
import DeviceID from '../containers/DeviceID';
import ProgressBar from '../containers/ProgressBar';

const Stack = createStackNavigator<RootStackParamList>();

type Props = {};

const index = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainScreen" component={Main} />
        <Stack.Screen name="CartScreen" component={Cart} />
        <Stack.Screen name="DeviceIDScreen" component={DeviceID} />
        <Stack.Screen name="ProgressBarScreen" component={ProgressBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
