import React from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class Details extends React.Component {
    //   constructor(props) {
  //     super(props);
  //     this.state = { chosenDate: new Date() };
  
  //     this.setDate = this.setDate.bind(this);
  //   }
      constructor(props){
        super(props);
        this.state={
          title:'首页'
        };
      }
    render() {
      return (
       
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen!!</Text>
        </View>
      
      );
    }
  }
  
  export default Details;