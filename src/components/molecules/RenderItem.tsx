import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Label from '../atoms/Label';
import {Colors} from '../../styles/Colors';
import Button from '../atoms/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  data: any;
  onPress: (data?: any) => void;
};

const RenderItem = (props: Props) => {
  const {data, onPress} = props;
  const countRender = React.useRef(0);

  countRender.current++;

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Label text={`${data?.name}`} size={20} color={Colors.WHITE} />
        <Label
          text={`Render count: ${countRender.current}`}
          size={10}
          color={Colors.WHITE}
        />
      </View>
      <Button
        style={{backgroundColor: Colors.RED, marginLeft: 16}}
        onPress={onPress}>
        <Ionicons name={'trash'} size={20} color={Colors.WHITE} />
      </Button>
    </View>
  );
};

export default React.memo(RenderItem, (prevProps: any, nextProps: any) => {
  return nextProps?.id === prevProps?.id;
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: Colors.BLUE,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
