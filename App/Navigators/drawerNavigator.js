import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { HomeNavigator } from "./stackNavigator";
import Expo from 'expo-constants';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

import BGImage from './../Assets/burger_content_background.svg'
import CloseIcon from './../Assets/burger_close.svg';
import { TouchableOpacity } from "react-native-gesture-handler";

class DrawerComp extends Component {
  constructor(props){
    super(props);
  }
  state = {
    languageList:[
      { id:1, name:'العربية' },
      { id:2, name:'English' },
      { id:3, name:'Deutsch' },
      { id:4, name:'Français' },
      { id:5, name:'русский' },
      { id:6, name:'Español' },
      { id:7, name:'Türkçe' },
    ],
    selectedLang:{ id:2, name:'English' },
  }

  render(){

    const { selectedLang, languageList } = this.state
    return(
      <SafeAreaView style={{ height:hp('100')-Expo.statusBarHeight, paddingTop:Expo.statusBarHeight }}>
        <View style={{ position:'absolute', top:0, bottom:0, right:0, left:0 }}><BGImage /></View>
        <TouchableOpacity
          style={{ alignSelf:'flex-end', right:wp('7'), top:hp('2') }}
          onPress={()=>{ this.props.navigation.toggleDrawer() }}>
          <CloseIcon />
        </TouchableOpacity>

        <Text style={styles.appLang}>App Language</Text>
        <Text style={styles.appLangNote}>Select your prefered app language</Text>

        {
          languageList.map((lang, i)=>{
            return(
              <TouchableOpacity
                key={lang.id}
                style={[styles.languageRow, lang.id === selectedLang.id ? { backgroundColor:"#f15953" }:{}]}
                onPress={()=>{ this.setState({ selectedLang:lang }) }}>
                <Text style={styles.languageRowText}>{lang.name}</Text>
              </TouchableOpacity>
            )
          })
        }

        <View style={{ borderColor:'#8c8c8c', borderWidth:1, width:'85%', margin:hp('2'), alignSelf:'center' }} />

        <TouchableOpacity style={{ width:wp('60'), alignSelf:'flex-end', right:wp('7'),}}>
          <Text style={styles.drawerText}>About us</Text>
        </TouchableOpacity>

        <View style={{ borderColor:'#8c8c8c', borderWidth:1, width:'85%', margin:hp('2'), alignSelf:'center' }} />


        <TouchableOpacity style={{ width:wp('60'), alignSelf:'flex-end', right:wp('7'),}}>
          <Text style={styles.drawerText}>Contact Us</Text>
        </TouchableOpacity>

        <View style={{ borderColor:'#8c8c8c', borderWidth:1, width:'85%', margin:hp('2'), alignSelf:'center' }} />

        <TouchableOpacity style={{ width:wp('60'), alignSelf:'flex-end', right:wp('7'),}}>
          <Text style={styles.drawerText}>Terms & Conditions</Text>
        </TouchableOpacity>

        <View style={{ borderColor:'#8c8c8c', borderWidth:1, width:'85%', margin:hp('2'), alignSelf:'center' }} />

      </SafeAreaView>
    )
  }
}


const CustomDrawerComponent = (Props) =>{
  return(<DrawerComp navigation={Props.navigation} />);
}

const DrawerNavigator = createDrawerNavigator({ Home: HomeNavigator },
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: "75%",
    drawerPosition:'right',
    drawerBackgroundColor: "transparent",
    contentOptions: {
      activeTintColor: "black",
      activeBackgroundColor: "transparent",
      itemStyle: { paddingLeft: 15 },
    },
  }
);

const Drawer = createAppContainer(DrawerNavigator);
export default Drawer;

const styles = StyleSheet.create({
    appLang:{
      color:"#f15953",
      fontSize:20,
      fontWeight:'700',
      alignSelf:'flex-end',
      marginRight:wp('7'),
      marginTop:hp('3')
    },
    drawerText:{
      color:"#f15953",
      fontSize:20,
      fontWeight:'700',
      alignSelf:'flex-end',
    },
    appLangNote:{
      color:"#525252",
      fontSize:14,
      alignSelf:'flex-end',
      marginRight:wp('7'),
      marginTop:hp('1')
    },
    languageRow:{
      backgroundColor:"#ffffff",
      alignSelf:'flex-end',
      marginTop:hp('1'),
      borderTopLeftRadius:50,
      borderBottomLeftRadius:50,
      height:hp('7'),
      width:'65%',
      justifyContent:'center',
      paddingLeft:hp('2'),
    },
    languageRowText:{
      fontSize:20,
      color:"#2e2e2e",
      fontWeight:"600"
    }
})