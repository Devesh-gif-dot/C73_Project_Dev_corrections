import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TransactionScreen from './screen/WriteStory';
import SearchScreen from './screen/ReadStory';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: TransactionScreen},
  Read: {screen: SearchScreen},
},
{
  defaultNavigationOptions:({navigation})=>({
  tabBarIcon:()=>{
    const routeName = navigation.state.routeName
    if(routeName==='Write'){
      return(<Image style={styles.imge} 
      source={require('./assets/write.png')}/>)
    } else if(routeName==='Read'){
      return(<Image style={styles.imge}
      source={require('./assets/read.png')}/>)
    }
  }
})
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imge:{
    width:30,
    height:30
  }
});
