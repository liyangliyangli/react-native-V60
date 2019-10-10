// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   TextInput
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import {getPixel,allPost} from './common/common/getPixel';
// // const App: () => React$Node = () => {
//   const App=function(React$Node){   
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
          
//             <View style={styles.yangyang}>
//               <Text>小羊羊来料，哈哈哈哈，天下最帅的RR  {allPost()}</Text>
//             </View>
//             <View  style={styles.yangyang} >
//              <View>
//                   <View style={{width:50, height: 50, backgroundColor: 'powderblue'}} />
//                   <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//                   <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//               </View>
//               <View><Text>弹性布局</Text></View>
//               <View style={{flex: 1, height:300}}>
//                 <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//                 <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//                 <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//               </View>
//           </View>
//           <View style={{width:getPixel(375),height:getPixel(375),backgroundColor:'#796'}}>
//             <View style={{padding: 10}}>
//               <TextInput
//                 style={{height:48,fontSize:getPixel(16),color:'#ddd',borderWidth:getPixel(2),borderColor:'#ddd',borderStyle:'solid'}}
//                 placeholder="Type here to translate!" placeholderTextColor='#ddd'  />
//               <Text style={{padding: 10, fontSize: 42}}>
              
//               </Text>
//             </View>
//           </View>

//           <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//           </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
//   yangyang:{
//     paddingHorizontal:24,
//     fontSize:getPixel(18),
//     textAlign:"center"
//   }
// });

// export default App;
/**************************demo2*************************** */
// import React, { Component } from 'react'
// import {getPixel,allPost} from './common/common/getPixel';
// import {
//   Button,
//   View,
//   StyleSheet,
//   DrawerLayoutAndroid,
//   Text,
//   FlatList
// } from 'react-native'
// var data=[{key: 'a'}, {key: 'b'},{key:'hha'},{key: 'a'}, {key: 'b'},{key:'hha'},{key: 'a'}, {key: 'b'},{key:'hha'}];
// function onPressLearnMore(){
//   alert('lall');
//   data=data.reverse();
//   alert(JSON.stringify(data));
// }
// var navigationView = (
//   <View style={{flex: 1, backgroundColor: '#fff'}}>
//     <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
//   </View>
// );

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { chosenDate: new Date() };

//     this.setDate = this.setDate.bind(this);
//   }

//   setDate(newDate) {
//     this.setState({chosenDate: newDate})
//   }

//   render() {
//     return (
//       <View>
//       <View style={styles.container}>
//          <View style={{flex:1,backgroundColor:'#578' }}><Text>hahhahahh</Text></View>
//          <View style={{backgroundColor:'#679',flex:1}}>
//          <Button  onPress={onPressLearnMore} title="Learn More" color="#acaca2"/>
//          <Text>列表组件  可以下拉刷新加载</Text>
//          <FlatList
//             data={data}
//             renderItem={({item}) => <Text>{item.key}</Text>}
//           />
//          </View>
//          <DrawerLayoutAndroid backgroundColor='#996'
//             drawerWidth={300}
//             drawerPosition={DrawerLayoutAndroid.positions.Left}
//             renderNavigationView={() => navigationView}>
//             <View style={{flex: 1, alignItems: 'center'}}>
//               <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
//               <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
//             </View>
//             </DrawerLayoutAndroid>
//       </View>
//       <View style={{height:getPixel(200),backgroundColor:'#996',marginTop:getPixel(100), flexDirection:'row',}}>
//       <View style={{width:getPixel(100),backgroundColor:'#578' }}><Text>hahhahahh</Text></View>
//           <DrawerLayoutAndroid backgroundColor='#996'
//             drawerWidth={300}
//             drawerPosition={DrawerLayoutAndroid.positions.Left}
//             renderNavigationView={() => navigationView}>
//             <View style={{flex: 1, alignItems: 'center'}}>
//               <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
//               <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
//             </View>
//             </DrawerLayoutAndroid> 
//       </View>
//       </View>

//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//       flexDirection:'row',
//       backgroundColor:'#966',
//       color:'#fff',
//       height:200
//   },
// })

/******************************demo3************************************************ */
import React from 'react';
import { View, Text,SafeAreaView,Button,Animated} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {getPixel} from './common/common/getPixel';
import DetailScreen from  './pages/Details'
import MyWeb from './pages/web'

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // 透明度初始值设为0
  }

  componentDidMount() {
    Animated.timing(                  // 随时间变化而执行动画
      this.state.fadeAnim,            // 动画中的变量值
      {
        toValue: 1,                   // 透明度最终变为1，即完全不透明
        duration: 10000,              // 让动画持续一段时间
      }
    ).start();                        // 开始执行动画
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View                 // 使用专门的可动画化的View组件
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // 将透明度指定为动画变量值
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

class HomeScreen extends React.Component {
  //   constructor(props) {
//     super(props);
//     this.state = { chosenDate: new Date() };

//     this.setDate = this.setDate.bind(this);
//   }
    constructor(props){
      super(props);
      this.state={
        title:'首页!!!!'
      };
    }
  render() {
    return (
     
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen!!1231</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('detail')}
        />
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
        </FadeInView>
        <Button
          title="Go to web"
          onPress={() => this.props.navigation.navigate('web')}
        />
      </View>
    
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: `首页`,
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="哈哈"
          color="#ddd"
        />
      ),
      headerLeft: (
       <Text style={{color:'#fff'}}>返回</Text>
      ),
      headerTitleContainerStyle:{//首页样式设置
        justifyContent:'center'
      },
      headerLeftContainerStyle:{
         padding:10,
         backgroundColor:'#3ad'
      },
      headerRightContainerStyle:{
        padding:10,
        backgroundColor:'#396'
     },
      headerBackTitle:false,
      headerStyle: {
        backgroundColor: '#f1f2f3',
        height:getPixel(50),
        shadowColor:'#fff'

      },
      headerTintColor: '#333',
      headerTitleStyle: {
        fontWeight: '400',
      },
    }),
  },
  detail:{
    screen:DetailScreen,
    title:'详情'
  },
  web:{
    screen:MyWeb,
    title:'网页demo'
  }
},
{
  initialRouteName: 'Home',
}
);

export default createAppContainer(AppNavigator);