import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const artists = require ('../developementResources/JSON files/artists.json')
let indexOfLikedArtistsArray = require('../developementResources/likedArtistArray')
import ArtistPage from '../views/ArtistPage'; <ArtistPage/>




const SeeLikedArtistsScreen = ({navigation}) =>{
  //const navigation = useNavigation()
  const viewsForLikedArtists = []
    function artistsThatUserHasLiked(arrayOfArtistsInfo){ 
      indexOfLikedArtistsArray.forEach(likedArtistIndex => {
        console.log(arrayOfArtistsInfo[0].artists[likedArtistIndex])
        viewsForLikedArtists.push(
          <View key={likedArtistIndex} style={styles.individualArtistBlock}>
            <View style={styles.individualArtistBlockInfoContainer}>
              <Text>the artists name is {arrayOfArtistsInfo[0].artists[likedArtistIndex].artistName} </Text>
            </View>
            <View style={styles.viewArtistPageButtonContainer}>
              <Button title='View artist page' style={styles.viewArtistPageButton} onPress={()=>{
                console.log(likedArtistIndex)
                navigation.navigate('ArtistPage', {indexOfClickedArtist : likedArtistIndex})
              }}></Button>
            </View>
            
          </View>
        );
      });
      console.log(viewsForLikedArtists)
    }


    artistsThatUserHasLiked(artists)
    return(
        <View>
          <Text>this is the page where you will be able to see which artists you have liked</Text>
            <View style={styles.likedArtistBlockContainer}>
              {viewsForLikedArtists}
            </View>
          
        </View>
        
    );
};

const styles = StyleSheet.create({
  likedArtistBlockContainer: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  individualArtistBlock:{
    marginBottom: '1%',
    width:'100%',
    height: '5%',
    backgroundColor: '#d2691e',
    justifyContent:'center',
    flexDirection: 'row'
  },
  individualArtistBlockInfoContainer:{
    width:'60%',
    justifyContent:'center'
    
  },
  viewArtistPageButtonContainer:{
    width:'35%',
    justifyContent: 'center'
  },
  viewArtistPageButton:{
    
  }
});

export default SeeLikedArtistsScreen;


