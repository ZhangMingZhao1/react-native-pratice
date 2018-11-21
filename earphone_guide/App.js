/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
// import ripplePic from './public/img/ripple.png';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
  
    return (
      <View style={styles.body}>
          <Text style={styles.span_top}>你可以</Text>
          <Text style={styles.span_mid}>双击左耳耳机</Text>
          <Text style={styles.span_bottom}>唤醒语音助手</Text>
          <View style={styles.ripple}>
              <Image source={require('./public/img/ripple.png')} style={styles.rippleImg}/>  
              <View class="voice">
                <Image source={require('./public/img/voice.png')} style={styles.voiceImg}/>  
              </View>
          </View>
          <Text style={styles.span_bar}>听到“嘀”声后，再说出以下话术</Text>
          <View style={styles.show1}>
              {/* <View style={style.box1}> */}
                <Image source={require('./public/img/shapeBack.png')} style={styles.shapeBack}/>
              {/* </View> */}
              
              {/* <Text>“打电话给张三”</Text> */}
         
          </View>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#5C628D',
    flex:1,
  },
  span_top: {
    marginTop: 100,
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  span_mid: {
    marginTop: 9,
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  span_bottom: {
    marginTop: 25,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  ripple: {
    alignItems: 'center',
    marginTop: 5
  },
  rippleImg: {
    width: 296,
    height: 189.5,
 
  },
  voice : {
    alignItems: 'center',
  },
  voiceImg: {
    width: 22.5,
    height: 31,
    marginTop: -106
  },
  span_bar: {
    marginTop: 25,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  show1 :{
    alignItems: 'center',
 
  },
  shapeBack : {
    alignItems: 'center',
    width: 263.65,
    height: 75,
    marginTop: 17
  }
});
