import { StackNavigator } from 'react-navigation';
import { Easing, Animated } from 'react-native';
import Splash from './Splash';
import Home from './Home';

const MainNavigator = StackNavigator({
  Splash: { screen: Splash },
  Home: { screen: Home },
},
  {
    headerMode: 'none',
    title: 'main',
    initialRouteName: 'Splash',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
    })
  });

export default MainNavigator;
