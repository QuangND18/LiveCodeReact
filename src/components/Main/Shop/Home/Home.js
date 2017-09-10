import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Collection from './Collection/Collection';

class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#C1C1C1' }}>
                <Collection />
            </View>
        );
    }
}

export default Home;
