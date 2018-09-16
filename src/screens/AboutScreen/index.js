import React from 'react';
import {
    Text, View, Image
} from 'react-native';
import { globalStyles } from '../../styles';
import data from '../../data';

const aboutData = data.about;

export default class AboutScreen extends React.Component {
    render() {
        return (
            <View style={globalStyles.container}>
                <Image source={require('../../../assets/img/profile.jpeg')} />
                <Text>{aboutData.name}</Text>
                <Text>{aboutData.currentTitle}</Text>
                <Text>{aboutData.location}</Text>
                <Text>{aboutData.intro}</Text>
            </View>
        );
    }
}
