import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EntryPoint from './App/Screens';

export default function App() {
  return ( <EntryPoint/> );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
