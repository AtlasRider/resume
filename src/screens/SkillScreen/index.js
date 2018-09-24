import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { globalStyles } from '../../styles';
import data from '../../data/skills';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Category extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    return (
      <View>
        <Text>{this.props.data.category}</Text>
        <FlatList
          data={this.props.data.skills}          
          keyExtractor={item => item}
          renderItem={({item}) => 
            <Text>{item}</Text>
          }
        />
      </View>
      );
  }
}


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <FlatList
          data={data.skills}          
          keyExtractor={item => item.category}
          renderItem={({item}) => <Category data={item} />}
        />
        {/* <Image source={require('../../../assets/img/skills.jpg')} /> */}
      </View>
    );
  }
}
