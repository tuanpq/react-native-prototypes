/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, View} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreens({navigation}) {
  console.log('HomeScreens: enter');
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Classes" component={ClassesScreen} />
    </Stack.Navigator>
  );
}

function ClassesScreen({navigation}) {
  console.log('ClassesScreen: enter');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Go to Home"
      />
    </View>
  );
}

function HomeScreen({navigation}) {
  console.log('HomeScreen: enter');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Classes')}
        title="Go to Classes"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  console.log('NotificationsScreen: enter');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function ProfileScreen({}) {
  console.log('ProfileScreen: enter');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} />
  );
}

function SettingsScreen({}) {
  console.log('SettingsScreen: enter');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} />
  );
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreens" screenOptions={{headerShown: false}}>
        <Drawer.Screen name="HomeScreens" component={HomeScreens} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
