import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={globalStyles.container}>
        

        <Image source={require('../../../assets/img/skills.jpg')} />
      </View>
    );
  }
}
