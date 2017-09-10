import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import bannerImage from '../../../../../media/images/temp/banner.jpg';

const { height, width } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textStyle}>SPRING COLLECTION</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Image source={bannerImage} style={imageStyle} />
                </View>
            </View>
        );
    }
}

const imgWidth = width - 30;
const imgHeight = (imgWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.38,
        backgroundColor: '#FFFFFF',
        margin: 10,
        elevation: 4,
        padding: 5,
        paddingTop: 0
    },
    textStyle: { fontSize: 14 },
    imageStyle: { height: imgHeight, width: imgWidth }
});
