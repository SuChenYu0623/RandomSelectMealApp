import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';



const lunch = './image/sun.png';
const dinner = './image/night.png';

const MealImage = (lunch, dinner) => {
  const k = 0;
  if(lunch === true && dinner === true){
    k = 1;
  }else if(lunch === true){
    k = 2;
  }else if(lunch === false){
    k = 3;
  }
}

const MealItem = (props) => {
  const { meal} = props;
  return(
    <TouchableOpacity onPress={() => props.onPress(meal.id)} onLongPress={() => props.onLongPress(meal)} >
      <View style={styles.item_view}>
        <Text style={styles.text_name}>{meal.name}</Text>
        <View style={{flexDirection: 'row'}}>
          {meal.lunch === true 
            ? <View style={[styles.view2, {borderLeftWidth: 1}]}>
                <Image style={styles.image} source={require(lunch)}/>
                <Text>午餐</Text>
              </View>
            : <View></View>
          }
          {meal.dinner === true 
            ? <View style={[styles.view2, {backgroundColor: 'black'}]}>
                <Image style={styles.image} source={require(dinner)}/>
                <Text style={{color: 'white'}}>晚餐</Text>
              </View>
            : <View></View>
          }
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  image: {
    width: 40,
    height: 40,
    margin: 5,
  },
  text_name:{
    fontSize: 20,
  },
})

export default MealItem;


