import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/searchScreen';
import ResultShowScreen from './src/screens/resultsShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  result: ResultShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    headerTitleAlign:"center",
    headerTitleStyle:{fontSize:30,fontWeight:'bold'},
    title: 'Business Search'
  }
});


export default createAppContainer(navigator);
