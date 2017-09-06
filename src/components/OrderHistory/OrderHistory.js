import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class OrderHistory extends Component {
    gobackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#31C754' }}>
                <Text>OrderHistory</Text>
                <TouchableOpacity onPress={this.gobackToMain.bind(this)}>
                    <Text>Go back to Main</Text>
                </TouchableOpacity>
            </View> 
        );
    }
}
