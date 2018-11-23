import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class ScoresView extends React.Component {
    render() {
      var contents = this.props['scores'].map((score) => (
        <Text key={score.name}>
          {score.name}:{score.value}
          {'\n'}
        </Text>
      ));
      return (
        <View style={styles.container}>
          <Text style={styles.highScoresTitle}>2048 High Scores!</Text>
          <Text style={styles.scores}>{contents}</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    highScoresTitle: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    scores: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  
// 注册组件，程序入口
// 第一个参数：注册模块名称,这里亲测不和项目名一致也可以，但是好多资料说名字要和项目名一致
// 第二个参数：函数，此函数返回组件类名，程序启动就会自动去加载这个组件
AppRegistry.registerComponent('App', () => ScoresView);
