import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import PropTypes from 'prop-types';

export default class HomeScreen extends React.Component {  
    render() {
        return (
            <View>
                <Image source={this.props.data.companyLogo} />
                <Text>{this.props.data.title}</Text>
                <Text>{this.props.data.company}</Text>
                <Text>{this.props.data.location}</Text>
                <Text>{this.props.data.start}</Text>
                <Text>{this.props.data.end}</Text>
                <FlatList
                    data={this.props.data.description}
                    keyExtractor={item => item}
                    renderItem={({item}) => <Text>{item}</Text>}
                />
            </View>
        );
    }
}

HomeScreen.propTypes = {
    data: PropTypes.object.isRequired
};