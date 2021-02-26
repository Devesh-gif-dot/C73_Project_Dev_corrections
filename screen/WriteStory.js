import React from 'react';
import { Text,
   View,
   TouchableOpacity,
   TextInput,
   Image,
   StyleSheet,
  KeyboardAvoidingView ,
ToastAndroid,Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native-elements';

export default class TransactionScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      buttonState:'normal',
      storyTitle:'',
      storyAuthor:'',
      story:''
    };
  }
    
  submitStory = ()=>{
    db.collection('Story').add({
      StoryTitle:this.state.storyTitle,
      Author:this.state.storyAuthor,
      Story:this.state.story
    })
    ToastAndroid.show("Your Story has been Submitted",ToastAndroid.SHORT);
    Alert.alert("Your Story has been Submitted")
  }
  
  render() {
    

    return (

      <View style={{ flex: 1 }}>
        <Header 
        backgroundColor={'pink'}
        centerComponent={{
          text:'Story Hub',
          style:{fontSize:25,color:'black'}
        }}/>
          <TextInput style={styles.input}
          onChangeText={(text)=>{this.setState({storyTitle:text})}} 
          value={this.state.storyTitle}
          placeholder="Story Title"/>

          <TextInput style={styles.input}
          onChangeText={(text)=>{this.setState({storyAuthor:text})}} 
          value={this.state.storyAuthor}
          placeholder="Author"/>

         <TextInput style={styles.input1}
          onChangeText={(text)=>{this.setState({story:text})}} 
          value={this.state.story}
          placeholder="Write Story Here"
          multiline={true}/>
        <TouchableOpacity style={styles.button} onPress={this.submitStory}>
          <Text>Submit</Text></TouchableOpacity>
      </View>

    );
  }

  }

  const styles = StyleSheet.create({
    input:{
      color:'black',
      borderColor:'black',
      borderWidth:2.5,
      height:25,
      width:200,
      alignContent:'center',
      alignSelf:"center",
      marginTop:20   
    },
    view:{
      flexDirection:'row',
      marginTop:30
    },
    input1:{
      color:'black',
      borderColor:'black',
      borderWidth:2.5,
      height:200,
      width:200,
      alignContent:'center',
      alignSelf:"center",
      marginTop:20   
    },
    button:{
      marginTop:15,
      alignSelf:'center',
      width:70,
      height:30,
      backgroundColor:'red',
      color:'green'
    }
  })
  