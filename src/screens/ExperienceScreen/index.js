import React from 'react';
import { View, FlatList } from 'react-native';
import { globalStyles } from '../../styles';
import data from '../../data';
import ListItem from './ListItem';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={globalStyles.container}>
                <FlatList
                    data={data.experience}
                    keyExtractor={item => item.company}
                    renderItem={({item}) => <ListItem data={item} />}
                />
            </View>
        );
    }
}
