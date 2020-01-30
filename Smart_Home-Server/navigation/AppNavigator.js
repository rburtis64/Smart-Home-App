import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from './HomeScreen'
import SensorsPage from './SensorsPage';  

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  })
);

const AppNavigator = createStackNavigator(  
    {  
        Home: HomeScreen,  
        Profile: SensorsPage  
    },  
    {  
        initialRouteName: "Home"  
    }  
);  
export default createAppContainer(AppNavigator);  