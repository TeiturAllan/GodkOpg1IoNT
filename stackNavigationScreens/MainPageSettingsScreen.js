import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const MainPageSettingsScreen = () =>{
    return(
        <View>
            <Text>this is the page where you can tweak the settings/paramaters for artist that will show up on your feed</Text>
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

export default MainPageSettingsScreen;
