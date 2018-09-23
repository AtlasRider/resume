import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
});

// TODO: Items are getting cutoff mid-word, and not wrapping properly
export default class BulletPoint extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>- </Text>
        <Text>{this.props.data}</Text>
      </View>
    );
  }
}
BulletPoint.propTypes = {
  data: PropTypes.string.isRequired
};
