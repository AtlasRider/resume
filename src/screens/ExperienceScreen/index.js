import React from 'react';
import { View, FlatList } from 'react-native';
import { globalStyles } from '../../styles';
import data from '../../data/resume';
import ListItem from './ListItem';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <FlatList
          data={data.experience}
          keyExtractor={item => item.sequence.toString()}
          renderItem={({item}) => <ListItem data={item} />}
        />
      </View>
    );
  }
}
