import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../styles/Colors';
import Label from '../components/atoms/Label';
import Button from '../components/atoms/Button';
import AnimatedProgressBar from 'react-native-animated-progress';

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProgressBarScreen'
>;

type Props = {
  navigation: NavigationProp;
};

const ProgressBar = (props: Props) => {
  const {navigation} = props;

  const [isPause, setPause] = React.useState(false);
  const [loadingProgress, setLoadingProgress] = React.useState(0);
  const loadingProgressRef = React.useRef(loadingProgress);

  const resetCounter = () => {
    loadingProgressRef.current = 0;
    setLoadingProgress(loadingProgressRef.current);
    setPause(false);
  };

  React.useEffect(() => {
    const progressId = setInterval(() => {
      if (!isPause) loadingProgressRef.current += 1;
      if (loadingProgressRef.current > 100) {
        clearInterval(progressId);
        setPause(true);
      } else {
        setLoadingProgress(loadingProgressRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(progressId);
    };
  }, [isPause]);

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
        <Label text={'Task 3'} size={36} weight={'bold'} color={Colors.WHITE} />
        <Label
          text={'Progress Bar with animation process.'}
          size={20}
          weight={'400'}
          color={Colors.WHITE}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Label
          style={{marginBottom: 16}}
          text={`Click Bar to Pause.`}
          size={16}
          weight={'500'}
        />
        <Button
          style={{
            marginBottom: 16,
            backgroundColor:
              loadingProgressRef.current >= 100
                ? Colors.GREEN
                : isPause
                ? Colors.RED
                : Colors.BLUE,
          }}
          onPressIn={() => setPause(true)}
          onPressOut={() => setPause(false)}>
          <View style={{flex: 1}}>
            <AnimatedProgressBar
              progress={loadingProgress}
              height={20}
              backgroundColor={Colors.WHITE}
            />
          </View>
        </Button>
        <Label text={`${loadingProgress} %`} size={16} weight={'500'} />
        {loadingProgress >= 100 && (
          <Button
            style={{marginTop: 16, backgroundColor: Colors.BLUE}}
            onPress={resetCounter}>
            <Label
              text={'Reset'}
              adjustsFontSizeToFit={true}
              size={16}
              weight={'500'}
              color={Colors.WHITE}
            />
          </Button>
        )}
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLUE_DARK,
    padding: 16,
  },
});
