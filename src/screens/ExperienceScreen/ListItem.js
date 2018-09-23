import React from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import BulletPoint from './BulletPoint';

const logoDimensions = 65;
const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  firstRowContainer: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between',       
    marginBottom: 10
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20
  },
  logo: {
    width: logoDimensions,
    height: logoDimensions,
    resizeMode: 'contain'
  }    
});

export default class HomeScreen extends React.Component {  

  getDates() {
    let start = this.format(moment(this.props.data.start));
    let end = this.props.data.end 
      ? this.format(moment(this.props.data.end))
      : 'Now';

    return `${start} - ${end}`;
  }

  format(date) {
    return date.format('MMM YYYY');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstRowContainer}>
          <View>
            <Text style={styles.title}>{this.props.data.title}</Text>                 
            <Text>{this.props.data.company}</Text>
            <Text>{this.props.data.location}</Text>
            <Text>{this.getDates()}</Text>
          </View>
          <Image source={this.props.data.companyLogo} style={styles.logo} />
        </View>
        <FlatList
          data={this.props.data.description}
          keyExtractor={item => item}
          renderItem={({item}) => <BulletPoint data={item} />}
        />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  data: PropTypes.object.isRequired
};