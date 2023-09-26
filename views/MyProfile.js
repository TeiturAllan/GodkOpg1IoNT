import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//start of navigation imports
//import NavigationBottomTab from '../components/BottomTabNavigator'; <NavigationBottomTab/>
//end of navigation imports


const MyProfileView = (props) =>{
    return(
        <View>
            <Text>This is you Profile Screen</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyProfileView;