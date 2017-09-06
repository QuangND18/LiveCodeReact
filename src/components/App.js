import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import CustomComponents from 'react-native-deprecated-custom-components';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

StatusBar.setHidden(true);

export default class App extends Component {
    render() {
        return (
            <CustomComponents.Navigator
                initialRoute={{ name: 'MAIN' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'MAIN' : return <Main navigator={navigator} />;
                        case 'CHANGE_INFO' : return <ChangeInfo navigator={navigator} />;
                        case 'AUTHENTICATION' : return <Authentication navigator={navigator} />;
                        default : return <OrderHistory navigator={navigator} />;
                    }
                }}
                configureScene={(route) => {
                    if (route.name === 'AUTHENTICATION') {
                        return CustomComponents.Navigator.SceneConfigs.FloatFromRight;
                    }
                    return CustomComponents.Navigator.SceneConfigs.FloatFromLeft;
                }}
            />
        );
    }
}