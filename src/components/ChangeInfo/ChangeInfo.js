import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ChangeInfo extends Component {
    gobackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'gray' }}>
                <Text>ChangeInfo</Text>
                <TouchableOpacity onPress={this.gobackToMain.bind(this)}>
                    <Text>Go back to Main</Text>
                </TouchableOpacity>
            </View> 
        );
    }
}
