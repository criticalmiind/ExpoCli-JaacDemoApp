import React from 'react';
import {
  StyleSheet
} from 'react-native';
import Drawer from './../Navigators/drawerNavigator';

 class EntryPoint extends React.Component {
    constructor(props){
        super(props);
    }

    UNSAFE_componentWillMount(){
        console.disableYellowBox = true
    }

    render(){
        return <Drawer />
    }
};

const styles = StyleSheet.create({});

export default EntryPoint
