import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {TouchableOpacity,  ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native';

//start importation of artist data (this is a temporary JSON file for protyping, later additions will use a proper database)
const artists = require ('../../developementResources/JSON files/artists.json')
//end of importation of artist data

//start of likedArtistsArray import
let likedArtistsArray = require('../../developementResources/likedArtistArray')
//end of likedArtistArray import

function addArtistToLikedList(indexOfLikedArtist){//this function will add the liked artists id/index to an array contain the ids/indexes of already liked 
  likedArtistsArray.push(indexOfLikedArtist)
}


const MainPageFunctionality = (props) =>{
    const [artistIndex, setArtistIndex] = useState(0); 
    const [artistImageIndex, setArtistImageIndex] = useState(0);
    imageSource = {uri: artists[0].artists[artistIndex].artPieceImages[artistImageIndex].imageURL}//this uri refeers to the web based URLs for the image to be displayed
    
    console.log('artistImageIndex: ' + artistImageIndex)
    return(
        <SafeAreaView>
            <View>
              <View style={styles.artistImageContainer}>
                <ImageBackground
                  source={imageSource}
                  resizeMode='contain'
                  style={styles.ArtPieceImage}
                >
                  <View style={styles.imageNavigationButtonContainer}>
                    <TouchableOpacity style={{ height: '100%', width: '50%'}} 
                      onPress={()=>{ 
                        if(artistImageIndex <= artists[0].artists[artistIndex].artPieceImages.length -1 && artistImageIndex !== 0){
                          setArtistImageIndex(artistImageIndex - 1)
                        }
                      }}
                    ></TouchableOpacity> 
                    <TouchableOpacity style={{ height: '100%', width: '50%'}} 
                      onPress={()=>{
                        if(artistImageIndex < artists[0].artists[artistIndex].artPieceImages.length -1 && artistImageIndex !== -1){
                          setArtistImageIndex(artistImageIndex + 1)
                        }
                      }}
                    ></TouchableOpacity> 
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.artistInfoContainer}>
                <View style={styles.artistsInfoBar}>
                    <Text>The name of the artist is {artists[0].artists[artistIndex].artistName} </Text>
                    <Text>This art piece is called: '{artists[0].artists[artistIndex].artPieceImages[artistImageIndex].NameOfArtPiece}'</Text>   
                </View> 
              </View>
              
                <View style={styles.likeAndDislikeButtonContainer}>
                    <Button title='dislike artist' onPress={()=>{
                      if(artistIndex < artists[0].artists.length-1){
                        console.log('old image index: ' + artistImageIndex)
                        setArtistIndex(artistIndex + 1)
                        setArtistImageIndex(0)
                        console.log('new image index: ' + artistImageIndex)
                        console.log('newArtistIndex:' + artistIndex)

                      }
                      if(artistIndex >= artists[0].artists.length-1){
                        console.log('old image index: ' + artistImageIndex)
                        setArtistIndex(0)
                        setArtistImageIndex(0)
                        console.log('new image index: ' + artistImageIndex)
                        console.log('newArtistIndex:' + artistIndex)
                      }
                    }}>

                    </Button>
                    <Button title='like artist' onPress={()=>{
                      if(artistIndex < artists[0].artists.length-1){
                        if(likedArtistsArray.includes(artistIndex) === false){
                          likedArtistsArray.push(artistIndex)
                        }
                        
                        setArtistIndex(artistIndex + 1)
                        setArtistImageIndex(0)
                        
                      } 
                      if(artistIndex >= artists[0].artists.length-1){
                        if(likedArtistsArray.includes(artistIndex) === false){
                          likedArtistsArray.push(artistIndex)
                        }
                        setArtistIndex(0)
                        setArtistImageIndex(0)
                        
                      }
                      
                    }}>
                      
                    </Button>
                    
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  artistImageContainer: {
    height: '87%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#000000'
  },
  ArtPieceImage:{
    height: '100%',
    width: '100%'
  },
  artistInfoContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    height:'8%'
    
  },
  artistsInfoBar:{
    height:'100%',
    backgroundColor: '#a52a2a'
  },
  likeAndDislikeButtonContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageNavigationButtonContainer:{
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  likeAndDislikeButton:{
    width: '50%'
  }
});

export default MainPageFunctionality;
