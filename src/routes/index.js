import { 
  createStackNavigator, 
  createAppContainer,
} from 'react-navigation';

// Components
import Initial from '../containers/Initial';

const NotAuthNavigator = createStackNavigator({
  Initial: {
    screen: Initial,
    navigationOptions: {
      header: null
    }
  }
}, { initialRouteName: 'Initial' });

export default createAppContainer(NotAuthNavigator);