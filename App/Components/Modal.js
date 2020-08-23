import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Row } from 'react-native-easy-grid';
import DrawerIcon from './../Assets/burger_menu.svg'

export default class Modal extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){

        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.isShow}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                }}>

                <Row style={styles.main}>

                </Row>

        </Modal>);
    }
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:'rgb(246, 244, 241)',
        height:hp('10'),
        width:wp('100'),
        alignItems:'center',
        justifyContent:'flex-end',
    }
});