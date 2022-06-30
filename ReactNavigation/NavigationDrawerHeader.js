import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const NavigationDrawerHeader = props => {
  console.log('NavigationDrawerHeader: enter');

  const toggleDrawer = () => {
    console.log('NavigationDrawerHeader.toggleDrawer: enter');
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={require('./images/home_menu.png')}
          style={{width: 24, height: 24, margin: 8}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavigationDrawerHeader;
