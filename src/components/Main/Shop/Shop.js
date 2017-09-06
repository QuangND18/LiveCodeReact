import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Shop extends Component {
    gotoMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#2A8243' }}>
                <Text>Shop</Text>
                <TouchableOpacity onPress={this.gotoMenu.bind(this)}>
                    <Text>Open Menu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Shop;
