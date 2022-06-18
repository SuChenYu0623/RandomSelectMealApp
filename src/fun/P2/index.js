import React from 'react';
import { Router, Stack, Scene, Drawer } from 'react-native-router-flux';

import MealList from './MealList';
import MealDrawer from './MealDrawer';
import MealForm from './MealForm';
import MealDetail from './MealDetail';

import Random from './Random';
import DeviceFeedback from './DeviceFeedback';
import Camera from './Camera';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }; 
  }
  
  render(){
    return(
      <Router>
        <Drawer contentComponent={MealDrawer} >
          <Stack  headerLayoutPreset="center">
            <Scene key="MealList" title="餐廳列表" component={MealList} initial/>
            <Scene key='MealDetail' title='餐廳明細' component={MealDetail} />
            <Scene key="Random" title="餐廳隨機" component={Random} />
            <Scene key="MealForm" title="餐廳表單" component={MealForm} />
            <Scene key="DeviceFeedback" title="裝置" component={DeviceFeedback} />
            <Scene key="Camera" title="相機" component={Camera} />
          </Stack>
        </Drawer>
      </Router>
    )
  }
}

export default App;


