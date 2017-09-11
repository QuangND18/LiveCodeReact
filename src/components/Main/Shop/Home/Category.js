import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

import maxiIcon from '../../../../media/images/temp/maxi.jpg';
import littleIcon from '../../../../media/images/temp/little.jpg';
import partyIcon from '../../../../media/images/temp/party.jpg';

const { height, width } = Dimensions.get('window');

export default class Category extends Component {
    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Swiper autoplay autoplayTimeout={3}>
                        <Image source={maxiIcon} style={imageStyle}>
                            <Text>Maxi Dress</Text>
                        </Image>
                        <Image source={littleIcon} style={imageStyle}>
                            <Text>Little Dress</Text>
                        </Image>
                        <Image source={partyIcon} style={imageStyle}>
                            <Text>Party Dress</Text>
                        </Image>
                    </Swiper>
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
    imageStyle: {
        height: imgHeight,
        width: imgWidth,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
