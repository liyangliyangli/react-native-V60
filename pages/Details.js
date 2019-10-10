import React from 'react';
import { View, Text,SafeAreaView,Button } from 'react-native';
import {getPixel} from '../common/common/getPixel';

export default class DetailScreen extends React.Component{
    render() {
      return (
       
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>我是详情页面哦哦哦！！！</Text>
          <Button
          title="回到HOME页面"
          onPress={() => this.props.navigation.navigate('Home',{
            itemId: 86,
            otherParam: 'anything you want here',
          })}
        />
        <View style={{height:30,width:getPixel(375),backgroundColor:'#f2345f',alignContent:'center'}}>
            <Text style={{color:'#fff',}}>我来料！啊哈哈哈哈！！！</Text>
            </View>
         <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('detail')}
        />
         <View style={{height:30,width:getPixel(375),backgroundColor:'#f2345f',alignContent:'center'}}>
            <Text style={{color:'#fff'}}>走聊</Text>
            </View>
           <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        </View>
      
      );
    }
  }