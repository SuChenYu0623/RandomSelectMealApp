import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';

import meals from './meals';
import MealItem from './MealItem';

class LunchRandom extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      meals : meals,
      Result: '',
      output: '',
    };
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
    const { meals } = this.state;
    const lunch_meals = meals.filter((meal) => meal.lunch === true);
    return(
      <ScrollView>
        <Text>吃{this.state.output}</Text>
        <Button title="抽籤" onPress={() => this.RandomMeal(this.state.meals)}/>
        <Button title="重設" onPress={() => this.Reset()}/>
        {lunch_meals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ScrollView>
    )
  }
}


export default LunchRandom;
