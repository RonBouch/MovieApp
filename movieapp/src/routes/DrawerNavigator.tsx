
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsNavigator from './TabNavigator'
import { Login } from '../screens';
import { COLORS, SCREENS } from '../utilities/enum';
import { SideMenu } from '../components';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
    <Drawer.Navigator
        initialRouteName={SCREENS.HomePage}
        screenOptions={{
            headerStyle: { backgroundColor: COLORS.RED },
            headerTintColor: COLORS.WHITE,
        }}
        drawerContent={() => <SideMenu />}>
        <Drawer.Screen name={SCREENS.HomePage} component={TabsNavigator} />
        <Drawer.Screen name={SCREENS.Login} component={Login} />
    </Drawer.Navigator>
)

export default DrawerNavigator