import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


//currently the navigation on this component does not work. for some unknown reason the navigation variable 
//(that is used as an input on the MainPageStack Navigation function) is undefined in this file, while it works as intended in the MainPage.js file




const MainPageStackNavigation = () =>{
    const navigation = useNavigation()
    return(
        
            <View style={styles.buttonContainer}>
                <Button title='See liked Artists' onPress={()=> navigation.navigate('SeeLikedArtists')}></Button>
                <Button title='Main Page Settings' onPress={()=> navigation.navigate('MainPageSettings')}></Button>
            </View>
        
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: '#5f9ea0',
        justifyContent: 'center'
    },
    button: {
        
    }
});

export default MainPageStackNavigation;
