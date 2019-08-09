import React from 'react';
import {
  View
} from 'react-native';
import Routes from './routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </Provider>
  );
};

export default App;
