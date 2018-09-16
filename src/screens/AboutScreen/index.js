import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { globalStyles } from '../../styles';

export default class AboutScreen extends React.Component {
  render() {
    return (
      // style={globalStyles.container}
      <View>
        <Image source={require('../../../assets/img/profile.jpeg')} />
        <Text>Fifteen years software development experience and most recently I've been developing Android apps. Always looking for new opportunities to continue developing mobile apps in new exciting spaces that help connect users and technology in interesting ways.</Text>
      </View>
    );
  }
}
