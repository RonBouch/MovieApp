import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import { SafeAreaView } from 'react-native';


const RootNavigator = () => {
    return (
        <NavigationContainer >
            <DrawerNavigator />
        </NavigationContainer>
    );
}
export default RootNavigator;