import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default class BulletPoint extends React.Component {
  render() {
    return (<Text>-{this.props.data}</Text>);
  }
}
BulletPoint.propTypes = {
  data: PropTypes.string.isRequired
};
