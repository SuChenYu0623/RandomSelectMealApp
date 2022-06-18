import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Picker } from 'react-native';

const lunch = './image/sun.png';
const dinner = './image/night.png';
const closed = './image/closed.png';

const Item = (props) => {
  const { meal, disabled } = props;
  return(
    <TouchableOpacity onPress={() => props.onPress(meal.id)} onLongPress={() => props.onLongPress(meal)} disabled={disabled}>
      <View style={styles.AllView}>
        <View style={styles.ItemView}>
          <View style={styles.View1}>
            <View style={styles.nameView}>
              <Text style={styles.titleText}>餐廳</Text>
            </View>
          </View>
            
          <View style={styles.View2}>
            <View style={styles.contentView}>
              <View style={{paddingTop: 5}}>
                <Image style={styles.resImage} source={{uri: 'https://lh3.googleusercontent.com/proxy/lPeZTdboQbQmHdTdWTlxfvo-K92AUENZHlC_CXXCxL4nT_6oFcSYxqdrsfoL-PjxG7B6dezLtCw3kZrr19S8SQfN1-2_fjQTE3LdgeKs8NU'}} />
                <Text style={styles.nameText}>{meal.name}</Text>
              </View>
              <View>
                {meal.lunch === true 
                    ? <View style={[styles.TimeView, {backgroundColor: '#F9F9F9'}]}>
                        <Image style={styles.image} source={require(lunch)}/>
                        <Text>午餐時間</Text>
                      </View>
                    : <View style={[styles.TimeView, {backgroundColor: '#F9F9F9'}]}>
                        <Image style={styles.image} source={require(closed)}/>
                        <Text>中午打烊</Text>
                      </View>
                }
                {meal.dinner === true 
                    ? <View style={[styles.TimeView, {backgroundColor: 'black'}]}>
                        <Image style={styles.image} source={require(dinner)}/>
                        <Text style={{color: 'white'}}>晚餐時間</Text>
                      </View>
                    : <View style={[styles.TimeView, {backgroundColor: 'black'}]}>
                        <Image style={styles.image} source={require(closed)}/>
                        <Text style={{color: 'white'}}>晚上打烊</Text>
                      </View>
                }
              </View>
            </View>
          </View>
        </View>
       </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  AllView: {
    alignItems: 'center',
  },
  View1: {
    zIndex: 1,
  },
  View2: {
    width: 400, 
    marginBottom: 10, 
    zIndex: 0, 
    paddingTop: 10, 
    backgroundColor: '#0080FF', 
    borderRadius: 5,
  },
  ItemView: {
    alignItems: 'flex-start',
  },
  nameView: {
    width: 60,
    height: 30,
    backgroundColor: '#00AEAE',
    borderRadius: 5,
    margin: 8,
    marginBottom: -15,
  },
  contentView: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 10,
  },
  TimeView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    width: 40,
    height: 40,
    margin: 5,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20, 
    color: 'white',
  },
  nameText: {
    textAlign: 'center', 
    fontSize: 18, 
    color: 'white',
  },
  resImage: {
    width: 95, 
    height: 95, 
    backgroundColor: '#C0C0C0',
  },
})

export default Item;


