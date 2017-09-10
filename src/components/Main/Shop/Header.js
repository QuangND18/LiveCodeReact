import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, 
    TextInput, StyleSheet } from 'react-native';
import icMenu from '../../../media/images/appIcon/ic_menu.png';
import icLogo from '../../../media/images/appIcon/ic_logo.png';

const { height } = Dimensions.get('window');

class Header extends Component {
    render() {
        const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                <TextInput 
                    style={textInput}
                    placeholder="What do you want to buy?"
                    underlineColorAndroid="transparent" 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 8, 
        backgroundColor: '#34B089', 
        padding: 7, 
        justifyContent: 'space-around' 
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    textInput: { 
        height: height / 25, 
        backgroundColor: '#FFFFFF', 
        padding: 0, 
        paddingLeft: 5, 
        fontSize: 11 
    },
    iconStyle: { height: 15, width: 15 },
    titleStyle: { color: '#FFFFFF', fontFamily: 'Arial', fontSize: 12 }
});

export default Header;
