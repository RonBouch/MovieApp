
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import TabsNavigator from './TabNavigator'
import { Login } from '../screens';
import { SCREENS } from '../utilities/enum';
import { SideMenu } from '../components';
import { RootStackParam } from '../stores/types';

export type RootStack = StackNavigationProp<RootStackParam>;

const Stack = createNativeStackNavigator<RootStackParam>();

const StackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false, headerShown: false }} >
        <Stack.Screen name={SCREENS.Login} component={Login} />
    </Stack.Navigator>
)

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
    <Drawer.Navigator
        initialRouteName={SCREENS.HomePage}
        screenOptions={{
            headerStyle: { backgroundColor: 'red' },
            headerTintColor: 'black',
        }}
        drawerContent={() => <SideMenu />}>
        <Drawer.Screen name={SCREENS.HomePage} component={TabsNavigator} />
        <Drawer.Screen name={SCREENS.Login} component={Login} />
    </Drawer.Navigator>
)

export default DrawerNavigator