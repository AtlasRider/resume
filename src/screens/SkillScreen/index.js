import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { globalStyles } from '../../styles';
import data from '../../data/skills';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  category: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  list: {
    marginLeft: 35
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  skillContainer: {
    flexDirection: 'row'
  },
  icon: {
    height: 32,
    width: 32,
    marginBottom: 5,
    marginRight: 5
  },
  label: {
    marginTop: 7
  }
});

class Skill extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    return (
      <View style={styles.skillContainer}>
        <Image 
          style={styles.icon}
          source={this.props.data.icon} 
        />
        <Text style={styles.label}>
          {this.props.data.label}
        </Text>
      </View>
    );
  }
}

class Category extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    return (
      <View>
        <View style={styles.categoryContainer}>
          <Image 
            style={styles.icon}
            source={this.props.data.icon} 
          />
          <Text style={styles.category}>
            {this.props.data.category}
          </Text>
        </View>
        <FlatList
          style={styles.list}
          data={this.props.data.skills}          
          keyExtractor={item => item.label}
          renderItem={({item}) => <Skill data={item} />}
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
