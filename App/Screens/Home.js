import React, { Component } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Header from '../Components/header';
// import Modal from '../Components/Modal';
import { Row } from 'react-native-easy-grid';
import Expo from 'expo-constants';

import BarCodeIcon from './../Assets/qrscan_qr_icon_button.svg';
import Footer from '../Components/Footer';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShow: true
        }
    }

    UNSAFE_componentWillMount(){

    }

    render(){
        const { isShow } = this.state;

        return (
            <SafeAreaView style={{ flex:1, height:hp('100')-Expo.statusBarHeight, marginTop:Expo.statusBarHeight }}>
                {/* <Modal isShow={isShow} /> */}

                <Header navigation={this.props.navigation} />
                
                <Row style={{ flexDirection:'column' }}>

                    <Row style={{ width:wp('100'), height:hp('26'), alignItems:'center', justifyContent:'center' }}>
                        <Image source={require('./../Assets/icon.png')} style={{ width:hp('22'), height:hp('22') }} />
                    </Row>

                    <Row style={{ flexDirection:'column', width:wp('100'), height:hp('10'), alignItems:'center', justifyContent:'center' }}>
                        <Text style={{ color:'#f15953', fontWeight:'700', fontSize:28 }}>Hi, I'm Jaac!</Text>
                        <Text style={{ color:'#f15953', fontWeight:'700', fontSize:28 }}>Your E-Waiter</Text>
                    </Row>

                    <Row style={{ flexDirection:'column', width:wp('100'), height:hp('14'), alignItems:'center', justifyContent:'center' }}>
                        <TouchableOpacity style={{ flexDirection:'row', alignItems:'center', justifyContent:'center', width:wp('70'), backgroundColor:'#f15953', height:hp('7'), borderRadius:10 }}>
                            <View style={{ position:'absolute', left:10 }}><BarCodeIcon /></View>
                            <Text style={{ color:'#fff', fontWeight:'700', fontSize:20 }}>Scan QR Code</Text>
                        </TouchableOpacity>
                    </Row>

                    <Row style={{ width:wp('60'), alignSelf:'center', height:hp('10'), alignItems:'center', justifyContent:'center' }}>
                        <Text style={{ color:"#525252", textAlign:'center' }}>Click the Scan QR Code button to turn on your phone’s camera and scan the QR code on your table!</Text>
                    </Row>
                    
                    <Row style={{ width:wp('70'), alignSelf:'center', height:hp('14'), alignItems:'center', justifyContent:'center' }}>
                        <Text style={{ color:"#2e2e2e", fontSize:15, fontWeight:'700', textAlign:'center' }}>I'll show you this restaurant's menu and take your orders. With me, you can call a waiter and ask for the bill with one click.</Text>
                    </Row>

                </Row>

                <Footer navigation={this.props.navigation}/>
                
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(246, 244, 241)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
