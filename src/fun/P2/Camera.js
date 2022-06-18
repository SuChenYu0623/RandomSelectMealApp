import React from 'react';
import { StyleSheet, View, TextInput, Image, Button, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


export default class Camera extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url: null,
    };
  }

  handleOpenCamera = () => {
    launchCamera({}, this.handleSelectMealImage);
  };

  handleOpenImageLibrary = () => {
    launchImageLibrary({}, this.handleSelectMealImage);
    //launchImageLibrary({}, console.log({}));
  };

  handleSelectMealImage = (result) => {
    if(!result.didCancel){
      this.setState({
        url: result.uri,
      })
    }
  };

  render(){
    return(
      <View>
        <Button title='1' onPress={this.handleOpenCamera} />
        <Button title='2' onPress={this.handleOpenImageLibrary} />
        <Image source={{uri: this.state.url}} style={{width: 100, height: 100,}} />
      </View>
    );
  }
}