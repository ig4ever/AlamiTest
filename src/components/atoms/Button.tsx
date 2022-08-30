import {StyleSheet, TouchableOpacity, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {Colors} from '../../styles/Colors';

type Props = {
  style?: StyleProp<TextStyle>;
  children: any;
  onPress?: (data?: any) => void;
  onPressIn?: (data?: any) => void;
  onPressOut?: (data?: any) => void;
};

const Button = (props: Props) => {
  const {children, style, onPress, onPressIn, onPressOut} = props;

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      {children}
    </TouchableOpacity>
  );
};

export default React.memo(Button);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    elevation: 2,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
  },
});
