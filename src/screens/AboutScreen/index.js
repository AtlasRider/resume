import React from 'react';
import {
    Text, View, Image
} from 'react-native';
import { globalStyles } from '../../styles';

export default class AboutScreen extends React.Component {

    render() {
        let desc = 'Fifteen years software development experience and most recently I\'ve been developing Android apps. Always looking for new opportunities to continue developing mobile apps in new exciting spaces that help connect users and technology in interesting ways.';
        return (
            <View style={globalStyles.container}>
                <Image source={require('../../../assets/img/profile.jpeg')} />
                <Text>{desc}</Text>
            </View>
        );
    }
}
