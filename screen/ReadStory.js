import React from 'react';
import { Text, View,ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import {SearchBar,Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import {SafeAreaProvider} from 'react-native-safe-area-context';


export default class Searchscreen extends React.Component {
    constructor(){
      super()
      this.state={
          allStories:[],
          dataStories:"",
          search:"",
                 
      }
    }
    retrieveStories = async(text)=>{
      const query = await db.collection("Story").where("Author","==",text).get()
      query.docs.map((doc)=>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()]
        })
      })
    }
    
    render() {
      return (
        <View>
         <Header 
        backgroundColor={'pink'}
        centerComponent={{
          text:'Story Hub',
          style:{fontSize:25,color:'black'}
        }}/>
          <SearchBar 
          style={{fontSize:15}}
          placeholder={"StoryTitle or Author Name"}
          onChangeText={(text)=>{this.setState({search:text})}}
          value={this.state.search}
          />
          <TouchableOpacity style={styles.touch}
          onPress={()=>{this.retrieveStories(this.state.search)}}><Text styles={styles.text}>OK</Text></TouchableOpacity>
          <ScrollView>
          <Text>{this.state.allStories}</Text>
          </ScrollView>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    touch:{
      color:"red",
      backgroundColor:'red',
      width:50,
      height:50,
      marginLeft:10,
      marginTop:10,
      justifyContent:'center',
      alignItems:'center'
    },
    vis:{
      flexDirection:"row",
      marginTop:30
    },
    text:{
      justifyContent:'center',
      alignSelf:'center'
    }
  })