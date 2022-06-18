import React from 'react';
import { ScrollView, View, Text, Button, Picker, TouchableOpacity, StyleSheet } from 'react-native';

import meals from './meals';
import MealItem from './MealItem'
import Item from './Item';

class Random extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      meals: meals,
      selectedValue: 'all',
      Result: '',
      output: '',
      a: '',
    }
  }

  handlePicker = (itemvalue) => {
    this.setState({
      selectedValue: itemvalue,
    })
  }

  RandomMeal = (meals) => {
    let arr = meals.filter((meal) => meal.lunch === true);
    let ran = Math.floor(Math.random() * (arr.length-1)); //隨機
    let tmp = []; //抽中的
    
    for(let i=0; i<arr.length; i++){
      if(i == ran){
        tmp = arr[i];
        arr[i] = arr[arr.length-1];
        arr[arr.length-1] = tmp;
        break;
      }
    }
    arr.pop();
    this.setState({
      Result: ran,
      meals: arr,
      output: tmp.name,
    })
  }

  Reset = () => {
    this.setState({
      meals: meals,
    })
  }

  render(){
    const { meals, selectedValue, output } = this.state;
    const Newmeals = selectedValue === 'all' 
              ? meals 
              : selectedValue === 'lunch' ? meals.filter((meal) => meal.lunch === true) : meals.filter((meal) => meal.dinner === true)
    return(
      <ScrollView>
        <View style={styles.randomView}>
          <Text style={styles.eatView}>吃</Text>
          <Text style={styles.outputView}>{output}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity style={styles.Touch} onPress={() => this.RandomMeal(Newmeals)}>
            <Text style={styles.touchText}>抽籤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Touch} title='重設' onPress={() => this.Reset()}>
            <Text style={styles.touchText}>重設</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line}></View>
        <Picker
          mode="dialog"
          selectedValue={selectedValue}
          onValueChange={(itemvalue) => this.handlePicker(itemvalue)}
          style={{ height: 50, width: 100 }}>
          <Picker.Item label="全部" value="all" />
          <Picker.Item label="午餐" value="lunch" />
          <Picker.Item label="晚餐" value="dinner" />
        </Picker>
        
        
        <View style={styles.line}></View>
        {Newmeals.map((meal) => (
          <Item key={meal.id} meal={meal} disabled={true}/>
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  Touch: {
    width: 80,
    height: 30,
    backgroundColor: '#C0C0C0',
    borderRadius: 5,
  },
  touchText: {
    textAlign: 'center',
    fontSize: 20,
  },
  line: {
    borderWidth: 0.5, 
    borderColor: '#C0C0C0', 
    marginTop: 10,
    marginBottom: 10,
  },
  randomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 0,
  },
  eatView: {
    fontSize: 20,
  },
  outputView: {
    fontSize: 25,
  },
})

export default Random;