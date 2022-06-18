import React from 'react';
import { StyleSheet, View, Switch, TextInput, Picker, Button, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default class MealForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      store: null,
      url: null,
      lunch: false,
      dinner: false,
      phone: '',
      googleMapURL: '',
    }
  }

  handleText = (key, text) => {
    this.setState({
      [key]: text,
    })
  }


  handleSwitch = (key ,value) => {
    this.setState({
      [key]: value,
    })
  }


  handleFormSubmit = () => {
    const { name, lunch, dinner, url, phone, googleMapURL } = this.state;
    //回到上一頁面 不知道為什麼要加才會立刻更改state
    Actions.pop();
    const meal = { name: name, uri: url, lunch: lunch, dinner: dinner, phone: phone, googleMapURL: googleMapURL};
    const { handleAddMeal } = this.props;
    //handleAddMeal(this.state);
    //回傳值
    handleAddMeal(meal);
    this.setState({
      name: '',
      lunch: false,
      dinner: false,
      phone: '',
      googleMapURL: '',
    })
  }

  handleOpenCamera = () => {
    launchCamera({}, this.handleSelectMealImage);
  };

  handleOpenImageLibrary = () => {
    launchImageLibrary({}, this.handleSelectMealImage);
  };

  handleSelectMealImage = (result) => {
    if(!result.didCancel){
      this.setState({
        url: result.uri,
      })
    }
    console.log('handleSelectMealImage');
  };

  render(){
    const { name, lunch, dinner, url, phone, googleMapURL } = this.state;
    return(
      <View style={{flex: 1}}>
        <View style={[styles.formView, ]}>
          <View style={[styles.titleView, {flex: 0.4}]}>
            <Text style={styles.titleText}>餐廳名稱</Text>
          </View>
          <View style={{flex: 0.6, backgroundColor: '#ECECFF'}}>
            <TextInput
              value={name}
              onChangeText={(value) => this.handleText('name', value)}
              style={styles.textInput}
            />
          </View>
        </View>

        <View style={[styles.formView, ]}>
          <View style={[styles.titleView, {flex: 0.4}]}>
            <Text style={styles.titleText}>菜單照片</Text>
          </View>
          <View style={{flex: 0.6, backgroundColor: '#ECECFF', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <View>
              <Image source={{uri: url}} style={styles.image} />
            </View>
            <View>
              <TouchableOpacity style={styles.titleView} onPress={this.handleOpenCamera}>
                <Text style={styles.textTouch}>拍照</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.titleView} onPress={this.handleOpenImageLibrary}>
                <Text style={styles.textTouch}>相簿</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={[styles.formView,]}>
          <View style={[styles.titleView, {flex: 0.4}]}>
            <Text style={styles.titleText}>營業時段</Text>
          </View>
          <View style={{flex: 0.6, flexDirection: 'row', backgroundColor: '#ECECFF'}}>
            <Text style={[styles.titleText,{backgroundColor: '#0066CC'}]}>午餐</Text>
            <Switch 
              value={lunch}
              onValueChange={(value) => this.handleSwitch('lunch', value)}
            />
            <Text style={[styles.titleText,{backgroundColor: '#0066CC'}]}>晚餐</Text>
            <Switch 
              value={dinner}
              onValueChange={(value) => this.handleSwitch('dinner', value)}
            />
          </View>
        </View>
        <View style={[styles.formView, ]}>
          <View style={[styles.titleView, {flex: 0.4}]}>
            <Text style={styles.titleText}>電話</Text>
          </View>
          <View style={{flex: 0.6, backgroundColor: '#ECECFF'}}>
            <TextInput
              value={phone}
              onChangeText={(value) => this.handleText('phone', value)}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={[styles.formView, ]}>
          <View style={[styles.titleView, {flex: 0.4}]}>
            <Text style={styles.titleText}>Google Map</Text>
          </View>
          <View style={{flex: 0.6, backgroundColor: '#ECECFF'}}>
            <TextInput
              value={googleMapURL}
              onChangeText={(value) => this.handleText('googleMapURL', value)}
              style={styles.textInput}
            />
          </View>
        </View>
        <TouchableOpacity style={[styles.titleView, {backgroundColor: '#0066CC', }]} onPress={() => this.handleFormSubmit()}>
          <Text style={styles.titleText}>送出</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
  },
  titleView: {
    justifyContent: 'center',
    backgroundColor: '#00AEAE',
    borderRadius: 5,
  },
  titleText: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 50,
  },
  textTouch: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
  },
  textInput: {
    flex: 1,
    fontSize: 20,
  },
  switch: {
    //marginLeft: 10,
  },
  image: {
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').width / 5,
    backgroundColor: '#C0C0C0',
  },

});




