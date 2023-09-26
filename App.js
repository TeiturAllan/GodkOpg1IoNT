import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Constants from 'expo-constants';
//start of view importations
import MainScreenView from './views/MainPage'; <MainScreenView/>
import MyProfileView from './views/MyProfile'; <MyProfileView/>
//end of view importations

//start of stack screen importations
import MainPageSettingsScreen from './stackNavigationScreens/MainPageSettingsScreen'; <MainPageSettingsScreen/>
import SeeLikedArtistsScreen from './stackNavigationScreens/SeeLikedArtistsScreen'; <SeeLikedArtistsScreen/>
import ArtistPage from './views/ArtistPage'; <ArtistPage/>;
//end of stack screen importations


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackScreen = () =>{
  return(
  <Stack.Navigator>
    <Stack.Screen name='Main Screen' 
    component={MainScreenView}/>
    <Stack.Screen name='MainPageSettings' 
    component={MainPageSettingsScreen}/>
    <Stack.Screen name='ArtistPage'
    component={ArtistPage}/>
    <Stack.Screen name='SeeLikedArtists'
     component={SeeLikedArtistsScreen}/>
  </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Main Page'
        component={StackScreen}
        options={{headerShown: false}}/>
        <Tab.Screen name='My Profile' component={MyProfileView}/>
      </Tab.Navigator>
    </NavigationContainer>

    
  );
}



//the code below might be used
/*
<View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>

<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main Page' component={MainScreenView}/>
        <Stack.Screen name='Main Page Settings' component={MainPageSettingsScreen}/>
        <Stack.Screen name='See Liked Artists' component={SeeLikedArtistsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

    */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
