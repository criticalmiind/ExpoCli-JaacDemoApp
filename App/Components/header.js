import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Row } from 'react-native-easy-grid';
import DrawerIcon from './../Assets/burger_menu.svg'

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return (<>
            <Row style={styles.headRow}>
                <TouchableOpacity style={styles.main} onPress={()=>{ this.props.navigation.toggleDrawer() }}>
                    <DrawerIcon />
                </TouchableOpacity>
            </Row>
        </>);
    }
}

const styles = StyleSheet.create({
    headRow:{
        backgroundColor:'rgb(246, 244, 241)',
        height:hp('10'),
        width:wp('100'),
        alignItems:'center',
        justifyContent:'flex-end',
    },
    main:{
        right:hp('2')
    }
});
