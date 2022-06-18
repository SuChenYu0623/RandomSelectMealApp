import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import DeviceInfo from 'react-native-device-info';

const DeviceContent = (props) => {
  return(
    <View style={styles.content}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

export default class DeviceFeedback extends React.Component {
  
  render(){
    return(
      <View>
        <DeviceContent title='手機品牌' text={DeviceInfo.getBrand()}/>
        <DeviceContent title='裝置類型' text={DeviceInfo.getDeviceType()}/>
        <DeviceContent title='裝置名稱' text={DeviceInfo.getSystemName()}/>
        <DeviceContent title='裝置版本' text={DeviceInfo.getSystemVersion()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    marginRight: 15,
    fontSize: 15,
    backgroundColor: '#C1D0D0',
  },
  text: {
    fontSize: 15,
  },
})
