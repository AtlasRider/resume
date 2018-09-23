import React from 'react';
import { View, FlatList, Switch, StyleSheet, Text } from 'react-native';
import { globalStyles } from '../../styles';
import data from '../../data/resume';
import ListItem from './ListItem';

const style = StyleSheet.create({
  switchContainer: {
    flexDirection:'row',
    justifyContent: 'flex-end',       
    marginBottom:10
  },
  switchLabel: {
    justifyContent:'center',
    fontSize:16,
    marginRight: 10,
    marginTop:5
  }
});

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideDescriptions: true
    };
  }

  render() {
    return (
      <View style={globalStyles.container}>
        <View style={style.switchContainer}>
          <Text style={style.switchLabel}>Hide details</Text>
          {/* TODO: Need to get this button to change the state. Works on initial value though. */}
          <Switch 
            value={this.state.hideDescriptions} 
            onValueChange={(value) =>
              this.setState({
                hideDescriptions: value
              })        
            } />
        </View>
        <FlatList
          data={data.experience}          
          keyExtractor={item => item.sequence.toString()}
          renderItem={({item}) => 
            <ListItem 
              data={item}
              hideDescriptions={this.state.hideDescriptions}
            />}
        />
      </View>
    );
  }
}
