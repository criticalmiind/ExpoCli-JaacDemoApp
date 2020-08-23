import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Row } from 'react-native-easy-grid';

import BarCodeIcon from './../Assets/qrscan_qr_icon_button.svg';
import OrdersIcon from './../Assets/navigation_orders_icon_inactive.svg';
import MenuIcon from './../Assets/navigation_menu_icon_inactive.svg';
import WaiterIcon from './../Assets/navigation_call_icon_inactive.svg';

export default class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return (<>
           <Row style={styles.footerRow}>

                <Row style={{ width:wp('25'), justifyContent:'center' }}>
                    <Row style={styles.scanBarCodeRow}>
                        <TouchableOpacity style={styles.scanBarCode}>
                            <BarCodeIcon />
                        </TouchableOpacity>
                        <Text style={{ color:"#c1bfbb", fontSize:12, fontWeight:'500', position:'absolute', bottom:-hp('2') }}>Scan QR</Text>
                    </Row>
                </Row>

                <Row style={{ width:wp('25'), height:hp('8.2'), justifyContent:'center' }}>
                    <TouchableOpacity
                        style={{ alignItems:'center', justifyContent:'space-between', marginTop:hp('1') }}>
                        <MenuIcon />
                        <Text style={{ color:"#c1bfbb", fontSize:12, fontWeight:'500', marginTop:4 }}>Scan QR</Text>
                    </TouchableOpacity>
                </Row>

                <Row style={{ width:wp('25'), height:hp('8.2'), justifyContent:'center' }}>
                    <TouchableOpacity
                        style={{ alignItems:'center', justifyContent:'space-between', marginTop:hp('1') }}>
                        <OrdersIcon />
                        <Text style={{ color:"#c1bfbb", fontSize:12, fontWeight:'500', marginTop:4 }}>Orders</Text>
                    </TouchableOpacity>
                </Row>

                <Row style={{ width:wp('25'), height:hp('8.2'), justifyContent:'center' }}>
                    <TouchableOpacity
                        style={{ alignItems:'center', justifyContent:'space-between', marginTop:hp('1') }}>
                        <WaiterIcon />
                        <Text style={{ color:"#c1bfbb", fontSize:12, fontWeight:'500', marginTop:4 }}>Call Waiters</Text>
                    </TouchableOpacity>
                </Row>
            </Row>
        </>);
    }
}

const styles = StyleSheet.create({

    footerRow:{
        backgroundColor:'#FFFFFF',
        position:'absolute',
        bottom:0,
        height:hp('10'),
        width:wp('100'),
        justifyContent:'space-around'
    },
    scanBarCodeRow:{
        backgroundColor:'#FFFFFF',
        height:wp('20'),
        width:wp('20'),
        borderRadius:50,
        position:'absolute',
        bottom:hp('4'),
        alignItems:'center',
        justifyContent:'center'
    },
    scanBarCode:{
        backgroundColor:'#f15953',
        height:wp('16'),
        width:wp('16'),
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    }
});
