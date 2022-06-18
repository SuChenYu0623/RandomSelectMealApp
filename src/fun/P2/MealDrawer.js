import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class MealDrawer extends React.Component {

  handleRedirect = (key) => {
    Actions.currentScene !== key ? Actions.push(key) : Actions.drawerClose();
  }

  handleRedirectMealList = () => {
    // 若已於餐點列表畫面但再次點擊則僅關閉 Drawer 視窗
    Actions.currentScene !== 'MealList' ? Actions.push('MealList') : Actions.drawerClose();
  };
  handleRedirectLunchList = () => {
    // 若已於餐點列表畫面但再次點擊則僅關閉 Drawer 視窗
    Actions.currentScene !== 'LunchList' ? Actions.push('LunchList') : Actions.drawerClose();
  };

  handleRedirectDinnerList = () => {
    // 若已於餐點列表畫面但再次點擊則僅關閉 Drawer 視窗
    Actions.currentScene !== 'DinnerList' ? Actions.push('DinnerList') : Actions.drawerClose();
  };

  handleRedirectRandom = () => {
    // 若已於餐點列表畫面但再次點擊則僅關閉 Drawer 視窗
    Actions.currentScene !== 'Random' ? Actions.push('Random') : Actions.drawerClose();
  };

  handleRedirectLunchRandom = () => {
    // 若已於餐點列表畫面但再次點擊則僅關閉 Drawer 視窗
    Actions.currentScene !== 'LunchRandom' ? Actions.push('LunchRandom') : Actions.drawerClose();
  };

  handleRedirectDinnerRandom = () => {
    // 若已於餐點列表畫面但再次點擊則僅關閉 Drawer 視窗
    Actions.currentScene !== 'DinnerRandom' ? Actions.push('DinnerRandom') : Actions.drawerClose();
  };

  handleRedirectDeviceFeedback = () => {
    // 若已於餐點列表畫面但再次點擊則僅關閉 Drawer 視窗
    Actions.currentScene !== 'DeviceFeedback' ? Actions.push('DeviceFeedback') : Actions.drawerClose();
  };
  

  render() {
    return (
      <View style={styles.drawer}>
        <View style={styles.drawTitleView}>
          <Text style={styles.drawTitleText}>餐廳選擇 APP</Text>
          <TouchableOpacity onPress={() => Actions.drawerClose()}>
            <Image source={{ uri: 'https://i.imgur.com/7TQkIts.png' }} style={styles.cancelImage} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.handleRedirectMealList} style={styles.drawerItemView}>
          <Text style={styles.drawerItemText}>餐廳列表</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleRedirectRandom} style={styles.drawerItemView}>
          <Text style={styles.drawerItemText}>餐廳隨機</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleRedirectDeviceFeedback} style={styles.drawerItemView}>
          <Text style={styles.drawerItemText}>裝置</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawer: {
    margin: 10,
  },
  drawTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  drawTitleText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  cancelImage: {
    width: 20,
    height: 20,
    backgroundColor: '#C0C0C0'
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  drawerItemView: {
    marginVertical: 10,
  },
  drawerItemText: {
    fontSize: 16,
  },
});

export default MealDrawer;

