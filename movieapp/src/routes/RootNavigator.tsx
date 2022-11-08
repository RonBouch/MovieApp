import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../utilities/enum';
import { Login } from '../screens';

export type RootStackParam = {
    Login: any;
    Drawer: any;
};
const Stack = createNativeStackNavigator<RootStackParam>();


const RootNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={SCREENS.Login} screenOptions={{ headerBackTitleVisible: false, headerShown: false }}>
                <Stack.Screen name={SCREENS.Login} component={Login} />
                <Stack.Screen name={'Drawer'} component={DrawerNavigator} />
            </Stack.Navigator >
        </NavigationContainer>
    );
}
export default RootNavigator;