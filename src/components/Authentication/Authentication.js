import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Authentication extends Component {
    gobackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F1E05A' }}>
                <Text>Authentication</Text>
                <TouchableOpacity onPress={this.gobackToMain.bind(this)}>
                    <Text>Go back to Main</Text>
                </TouchableOpacity>
            </View> 
        );
    }
}
