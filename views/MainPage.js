import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//start of navigation imports
//import NavigationBottomTab from '../components/BottomTabNavigator'; <NavigationBottomTab/>
//end of navigation imports

//start of views importations
import MyProfileView from './MyProfile'; <MyProfileView/>
//end of views importations

//start of component importation
import MainPageStackNavigation from '../components/componentsUsedOnMainPage/MainPageStackNavigation'; <MainPageStackNavigation/>
import MainPageFunctionality from '../components/componentsUsedOnMainPage/MainPageFunctionality'; <MainPageFunctionality/>
//end of component importation


const MainScreenView = ({navigation}) =>{
    return(
      <SafeAreaView>
        <View>
          <MainPageStackNavigation/>
          <MainPageFunctionality/>
        </View>
        
      </SafeAreaView>
    );
};
// the code below currently work for navigating the screen stack that belongs to the mainpage. 
// the reason that it is "stored" here is that the buttons in the MainPageStackNavigation component do not currently work 
//however the code below works and I don't want to delete it in case i end up needing it
/*
<View>
        <Text> This is the main screen of the app</Text>
          <Text> You can click on the button below to change the settings for shown artists </Text>
          <Button title='Main Page settings/parameters' onPress={()=> navigation.navigate('MainPageSettings')}></Button>
          <Text>You can click on the button below to see the artists that have you have already liked</Text>
          <Button title='See like artists' onPress={()=>navigation.navigate('SeeLikedArtists')}></Button>
</View>
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreenView;
