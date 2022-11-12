
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsNavigator from './TabNavigator'
import { COLORS, SCREENS } from '../utilities/enum';
import { SideMenu } from '../components';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
    <Drawer.Navigator
        initialRouteName={SCREENS.Login}
        screenOptions={{
            headerStyle: { backgroundColor: COLORS.RED },
            headerTintColor: COLORS.WHITE,
        }}
        drawerContent={() => <SideMenu />}>
        <Drawer.Screen name={SCREENS.HomePage} component={TabsNavigator} />
    </Drawer.Navigator>
)

export default DrawerNavigator