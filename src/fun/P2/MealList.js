import React from 'react';
//Picker快被刪除了 可以從@react-native-community/picker 安裝和導入它
import { ScrollView, View, Text, Picker, Button, Linking, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';


import meals from './meals';
import MealItem from './MealItem';
import Item from './Item';

class MealList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      meals: meals,
      selectedValue: 'all',
      url: '123',
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      leftTitle: '1106104210\n蘇禎佑',
      rightTitle: '新增',
      onRight: () => {
        Actions.MealForm({ handleAddMeal: this.handleAddMeal,});
      },
    });
  }

  handlePicker = (itemvalue) => {
    this.setState({
      selectedValue: itemvalue,
    })
  }

  handleAddMeal = (meal) => {
    this.setState({
      meals: [...this.state.meals, 
              { id: this.state.meals.length + 1, ...meal, },
             ],
    });
  }

  handleRedirectMealDetail = (id) => {
    const { meals } = this.state;
    const meal = meals.find((meal) => meal.id === id);

    //Actions.push(sceneKey, props)
    //sceneKey: 前往頁面識別值
    //props: 傳入參數
    Actions.push('MealDetail', { meal: meal, 
                                 checkagain: this.checkagain,
                                 handleModifyImage: this.handleModifyImage, 
                                 handleSaveDetail: this.handleSaveDetail, 
                                 handleOpenURL: this.handleOpenURL,
                                 handleLunchDetail: this.handleLunchDetail,
                                 handleDinnerDetail: this.handleDinnerDetail});
  };

  //頭尾互換(這個沒有使用)
  deleteMeal222 = (id) => {
    const temp = this.state.meals[this.state.meals.length-1];
    const NewMeeals = this.state.meals.map((meal) => {
      let newmeal = '';
      if(meal.id === id) {
        newmeal = {id: id,...temp};
      }else{
        newmeal = meal;
      }
      return newmeal;
    })
    NewMeeals.pop();
    this.setState({
      meals: NewMeeals,
    })
    Actions.pop();
  }

  deleteMeal = (id) => {
    const NewMeals = [];
    for(let i=1; i <= this.state.meals.length; i++){
      const meal = this.state.meals[i-1];
      const newmeal = null;
      if(meal.id < id){
        newmeal = meal;
      }else if(meal.id > id){
        newmeal = { id: meal.id-1, name: meal.name, uri: meal.uri, lunch: meal.lunch, dinner: meal.dinner };
      }else{
        continue;
      }
      NewMeals.push(newmeal);
    }
    alert('已成功刪除'+this.state.meals[id-1].name);
    this.setState({
      meals: NewMeals, 
    })
    Actions.popTo('MealList');
  }
  
  handleModifyImage = (id) => {
    const p = 'https://hoolee.tw/wp-content/uploads/20200414152201_56.jpg';
    const Newmeals = this.state.meals.map((meal)=> {
      return meal.id !== id ? meal : { ...meal, uri: p, }
    });
    this.setState({
      meals: Newmeals,
    });
    Actions.refresh({ meal: Newmeals[id-1] });
  }

  handleLunchDetail = (id) => {
    const NewLunch = this.state.meals[id-1].lunch === true ? false : true;
    const Newmeals = this.state.meals.map((meal) => {
      return meal.id === id ? {...meal, lunch: NewLunch} : meal
    });
    this.setState({
      meals: Newmeals,
    });
    Actions.refresh({ meal: Newmeals[id-1] });
  }

  handleDinnerDetail = (id) => {
    const NewDinner = this.state.meals[id-1].dinner === true ? false : true;
    const Newmeals = this.state.meals.map((meal) => {
      return meal.id === id ? {...meal, dinner: NewDinner} : meal
    });
    this.setState({
      meals: Newmeals,
    });
    Actions.refresh({ meal: Newmeals[id-1] });
  }

  handleSaveDetail = () => {
    Actions.popTo('MealList');
  }

  handleOpenURL = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert('不明的 URL 連結:' + url + '，請重新確認');
      }
    });
  };

  handleClose = (meal) => {
    Alert.alert(meal.name, '選擇您的工作', 
      [ { text: '取消', onPress: () => alert('已取消') },
        { text: '刪除', onPress: () => this.checkagain(meal.id) },
      ],
    )
  }

  checkagain = (id) => {
    Alert.alert('警告', '是否確定刪除', 
      [ { text: '取消', onPress: () => alert('已取消!') },
        { text: '確定', onPress: () => this.deleteMeal(id) },
      ],
    )
  }

  
  render(){
    const { meals, selectedValue } = this.state;
    const Newmeals = selectedValue === 'all' 
              ? meals 
              : selectedValue === 'lunch' ? meals.filter((meal) => meal.lunch === true) : meals.filter((meal) => meal.dinner === true)
    return(
      <ScrollView style={{flex: 1,}}>
        <Picker
          mode="dialog"
          selectedValue={selectedValue}
          onValueChange={(itemvalue) => this.handlePicker(itemvalue)}
          style={{ height: 50, width: 100, borderWidth:1 }}>
          <Picker.Item label="全部" value="all" />
          <Picker.Item label="午餐" value="lunch" />
          <Picker.Item label="晚餐" value="dinner" />
        </Picker>
        
        {Newmeals.map((meal) => (
          <Item key={meal.id} meal={meal} onPress={this.handleRedirectMealDetail} onLongPress={this.handleClose} disabled={false}/>
        ))}
      </ScrollView>
    )
  }
}

export default MealList;


