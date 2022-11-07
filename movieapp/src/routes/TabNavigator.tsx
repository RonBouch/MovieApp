import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native'
import { HomePage, Favorite } from '../screens';
import { COLORS } from '../utilities/enum';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='My Home'
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarInactiveTintColor: COLORS.WHITE,
            }} >
            <Tab.Screen
                name='My Home'
                component={HomePage}
                options={{ tabBarIcon: () => (<Image style={styles.img} source={require('../../assets/icons8-home-48.png')} />) }} />
            <Tab.Screen
                name='Favorites'
                component={Favorite}
                options={{ tabBarIcon: () => (<Image style={styles.img} source={require('../../assets/icons8-star-64.png')} />) }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 24,
        height: 24,
    },
    tabBarStyle: { backgroundColor: COLORS.BLACK },
})
export default TabsNavigator;