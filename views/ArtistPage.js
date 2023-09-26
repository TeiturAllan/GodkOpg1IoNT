import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const artists = require('../developementResources/JSON files/artists.json')

const ArtistPage = ({navigation, route}, props) =>{
    const artistIndex = route.params.indexOfClickedArtist
    const artistName = artists[0].artists[artistIndex].artistName
    const artistInformation = artists[0].artists[artistIndex].artistInformation
    return(
        <View>
            <View>
                <Text>This is the artist page for {artistName} </Text>
                <Text>Below you can read a little bit about {artistName}</Text>
            </View>
            <View style={{marginTop: '3%'}}>
                <Text>{artistInformation} </Text>
            </View>
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

export default ArtistPage;
