import {StyleSheet, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {Colors} from '../../styles/Colors';

type Props = {
  style?: StyleProp<TextStyle>;
  text: string;
  adjustsFontSizeToFit?: boolean | undefined;
  color?: string;
  size?: number;
  numberOfLines?: number | undefined;
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
};

const Label = (props: Props) => {
  const {
    style,
    text,
    adjustsFontSizeToFit,
    color,
    size,
    numberOfLines,
    weight,
  } = props;

  const styles = StyleSheet.create({
    text: {
      fontWeight: weight ?? 'normal',
      fontSize: size ?? 14,
      color: color ?? Colors.BLUE,
    },
  });

  return (
    <Text
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      numberOfLines={numberOfLines}
      style={[styles.text, style]}>
      {text}
    </Text>
  );
};

export default React.memo(Label);
