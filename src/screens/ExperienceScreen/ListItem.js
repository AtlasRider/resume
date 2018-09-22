import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class HomeScreen extends React.Component {  

    getDates() {
        let start = moment(this.props.data.start);
        let end = this.props.data.end 
            ? moment(this.props.data.end)
            : moment();

        return `${this.format(start)} - ${this.format(end)}`;
    }

    format(date) {
        return date.format('MMM YYYY');
    }

    render() {
        return (
            <View>
                <Image source={this.props.data.companyLogo} />
                <Text>{this.props.data.title}</Text>
                <Text>{this.props.data.company}</Text>
                <Text>{this.props.data.location}</Text>
                <Text>{this.getDates()}</Text>
                <FlatList
                    data={this.props.data.description}
                    keyExtractor={item => item}
                    renderItem={({item}) => <Text>*{item}</Text>}
                />
            </View>
        );
    }
}

HomeScreen.propTypes = {
    data: PropTypes.object.isRequired
};