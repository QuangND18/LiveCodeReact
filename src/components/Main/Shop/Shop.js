import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';

import homeIconS from '../../../media/images/appIcon/home.png';
import homeIcon from '../../../media/images/appIcon/home0.png';
import cartIconS from '../../../media/images/appIcon/cart.png';
import cartIcon from '../../../media/images/appIcon/cart0.png';
import searchIconS from '../../../media/images/appIcon/search.png';
import searchIcon from '../../../media/images/appIcon/search0.png';
import contactIconS from '../../../media/images/appIcon/contact.png';
import contactIcon from '../../../media/images/appIcon/contact0.png';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedTab: 'Home' };
    }
    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        const { iconStyle } = styles;
        return (
            <View style={{ flex: 1, backgroundColor: '#2A8243' }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'Home' })}
                        renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Arial' }}
                    >
                    <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Search'}
                        title="Search"
                        onPress={() => this.setState({ selectedTab: 'Search' })}
                        renderIcon={() => <Image source={searchIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={searchIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Arial' }}
                    >
                    <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Cart'}
                        title="Cart"
                        onPress={() => this.setState({ selectedTab: 'Cart' })}
                        renderIcon={() => <Image source={cartIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={cartIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Arial' }}
                        badgeText="1"
                    >
                    <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Contact'}
                        title="Contact"
                        onPress={() => this.setState({ selectedTab: 'Contact' })}
                        renderIcon={() => <Image source={contactIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={contactIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Arial' }}
                    >
                    <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: { height: 20, width: 20 }
});

export default Shop;
