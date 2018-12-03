import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
let ripplePic = require('./public/img/ripple.png');
let shapeBack = require('./public/img/shapeBack.png');
let musicLogo = require('./public/img/musicLogo.png')

export default class App extends Component {
  render() {
    return (
        <ScrollView style={styles.body}>
            <Text style={styles.span_top}>你可以</Text>
            <Text style={styles.span_mid}>双击左耳耳机</Text>
            <Text style={styles.span_bottom}>唤醒语音助手</Text>
            <View style={styles.ripple}>
                <Image source={ripplePic} style={styles.rippleImg}/>
                <View class="voice">
                  <Image source={require('./public/img/voice.png')} style={styles.voiceImg}/>
                </View>
            </View>
            <Text style={styles.span_bar}>听到“嘀”声后，再说出以下话术</Text>
            <View style={styles.center}>
                <View style={styles.box1}>
                  <Image source={shapeBack} style={styles.shapeBack}/>
                </View>
                <Image source={musicLogo} style={styles.musicLogo} style={styles.logo}/>
                <Text style={styles.word}>“打电话给张三”</Text>
            </View>
            <View style={styles.center}>
                <View style={styles.box1}>
                  <Image source={shapeBack} style={styles.shapeBack}/>
                </View>
                <Image source={musicLogo} style={styles.musicLogo} style={styles.logo}/>
                <Text style={styles.word}>“打电话给张三”</Text>
            </View>
             <View style={styles.over}></View>
            <View roundAsCircle={true} style={styles.btnBottom}>
              <Text style={styles.btnWord}>开始使用</Text>
            </View>

        </ScrollView>
    );
  }}

const styles = StyleSheet.create({
    body: {
      backgroundColor: '#ff00ff',
      flex:1,
      height: 2000,
//      marginBottom: 200
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
    center :{
      alignItems: 'center',

    },
    shapeBack : {
      alignItems: 'center',
      width: 263.65,
      height: 75,
      marginTop: 17
    },
    logo : {
      position: 'absolute',
      width: 40,
      height:40,
      left: 100,
      top: 35,
    },
    word: {
      position: 'absolute',
      fontSize:20,
      color: '#FFFFFF',
      top: 45,
      left: 150
      // marginLeft: 10,
    },
    btnBottom : {
      position: 'absolute',
      left:30,
      bottom: 30,
      width: 355,
      height: 40,
      backgroundColor: '#637EF8',
      fontSize: 15,
      lineHeight: 40,
      color: '#FFFFFF',
      textAlign: 'center',
      borderRadius: 8,
    },
    btnWord: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontSize: 20,
      marginTop:8,
    },
    over: {
      width: 200,
      height: 200,
     backgroundColor: 'FF0000'
    }
  });

AppRegistry.registerComponent('application', () => App);