/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, View} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import CustomSidebarMenu from './CustomSidebarMenu';
import NavigationDrawerHeader from './NavigationDrawerHeader';
import Colors from './styles/Colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MaterialTab = createMaterialBottomTabNavigator();

function HomeScreens({navigation}) {
  console.log('HomeScreens: enter');
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.controlBackground,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Classes" component={ClassesScreen} />
    </Tab.Navigator>
  );
}

function ClassesScreen({navigation}) {
  console.log('ClassesScreen: enter');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.navigate('Home')} title="Go to Home" />
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

function NotificationScreens({navigation}) {
  console.log('NotificationScreens: enter');
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.controlBackground,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
      }}>
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
}

function NotificationScreen({navigation}) {
  console.log('NotificationScreen: enter');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function ProfileScreens({navigation}) {
  console.log('ProfileScreens: enter');
  return (
    <MaterialTab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.controlBackground,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
      }}>
      <MaterialTab.Screen name="Profile" component={ProfileScreen} />
      <MaterialTab.Screen name="Point" component={PointScreen} />
    </MaterialTab.Navigator>
  );
}

function ProfileScreen({navigation}) {
  console.log('ProfileScreen: enter');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} />
  );
}

function PointScreen({navigation}) {
  console.log('PointScreen: enter');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} />
  );
}

function SettingScreens({navigation}) {
  console.log('SettingScreens: enter');
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.controlBackground,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
      }}>
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
}

function SettingScreen({}) {
  console.log('SettingScreen: enter');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} />
  );
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeScreens"
        screenOptions={{
          headerShown: false,
          drawerLabelStyle: {color: 'white', fontSize: 16, fontWeight: 'bold'},
        }}
        drawerContent={CustomSidebarMenu}>
        <Drawer.Screen
          name="HomeScreens"
          component={HomeScreens}
          options={{drawerLabel: 'Home'}}
        />
        <Drawer.Screen
          name="Notifications"
          component={NotificationScreens}
          options={{drawerLabel: 'Notification'}}
        />
        <Drawer.Screen
          name="Profiles"
          component={ProfileScreens}
          options={{drawerLabel: 'Profile'}}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingScreens}
          options={{drawerLabel: 'Setting'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
