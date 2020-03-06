import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home'
import Second from './Second';

const Navigator = createStackNavigator({
  Home : {screen : Home},
  Second: { screen: Second },
});

const Nav = createAppContainer(Navigator)


const App = () => {
  return <Nav></Nav>
}

export default App;
