import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native'
import { HomePage, Favorite } from '../screens';
import { SCREENS } from '../utilities/enum';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: 'black' },
                tabBarInactiveTintColor: 'white',
            }}
        >
            <Tab.Screen
                name='Home'
                component={HomePage}
                options={{ tabBarIcon: () => (<Text>H</Text>) }} />
            <Tab.Screen
                name='Fav'
                component={Favorite}
                options={{ tabBarIcon: () => (<Text>F</Text>) }} />
        </Tab.Navigator>
    )
}


export default TabsNavigator;