import React from 'react';
import { ScrollView ,View, Text, Image, StyleSheet, Dimensions, Button, TouchableOpacity } from 'react-native';

const restaurant_img = './image/restaurant.jpg';
const googleMapURL = 'https://goo.gl/maps/SccsyVdvCTmvQ2C4A';

const MealDetail = (props) => {
  const { meal } = props;
  return(
    <ScrollView>
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 0.5}}>
            <Text style={[styles.titleText, {backgroundColor: '#0066CC',}]}>{meal.name}</Text>
            <Image style={styles.res_image} source={require(restaurant_img)}/>
          </View>
          <View style={{flex: 0.5, justifyContent: 'space-between'}}>
            <View>
              <Text style={[styles.titleText, {backgroundColor: '#00AEAE',}]}>營業時段</Text>
              <TouchableOpacity onPress={() => props.handleLunchDetail(meal.id)}>
                <Text style={[styles.touchText, meal.lunch === true ? {backgroundColor: '#0066CC',} : {backgroundColor: '#CE0000', textDecorationLine: 'line-through'} ]}>午餐</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.handleDinnerDetail(meal.id)}>
                <Text style={[styles.touchText, meal.dinner === true ? {backgroundColor: '#0066CC',} : {backgroundColor: '#CE0000', textDecorationLine: 'line-through'} ]}>晚餐</Text>
              </TouchableOpacity>
            </View>
            
            <View>
              <Text style={[styles.titleText, {backgroundColor: '#00AEAE',}]}>聯絡方式</Text>
              <TouchableOpacity onPress={() => props.handleOpenURL(googleMapURL)}>
                <Text style={[styles.touch1Text, {backgroundColor: '#0066CC',}]}>地址</Text>
              </TouchableOpacity>
              <Text style={[styles.touch1Text, {backgroundColor: '#0066CC',}]}>電話{meal.phone}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={[styles.titleText, {backgroundColor: '#00AEAE',}]}>菜單</Text>
          <Image style={styles.image} source={{uri: meal.uri}}/>
        </View>
        <View>
          <Button title='更改照片' onPress={() => props.handleModifyImage(meal.id)}/>
          <View style={styles.lineView}></View>
          <Button title='送出' onPress={() => props.handleSaveDetail()}/>
          <View style={styles.lineView}></View>
          <Button title='刪除' onPress={() => props.checkagain(meal.id)}/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  res_image: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    resizeMode: 'cover',
    backgroundColor: '#C0C0C0',
    //width: 100,
    //height: 100,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    resizeMode: 'contain',
    backgroundColor: '#C0C0C0',
  },
  mealDetailView: {
    flex: 1,
  },
  titleText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  touchText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    //borderRadius: 5
  },
  touch1Text: {
    fontSize: 20,
    color: 'white',
    //borderRadius: 5,
  },
  
  lineView: {
    borderColor: 'white',
    borderWidth: 0.5,
  }
})

export default MealDetail;