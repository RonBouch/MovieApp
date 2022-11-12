import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';
import { COLORS, SCREENS } from '../utilities/enum';

const SideMenu: React.FC = () => {
    const navigation = useNavigation<any>();
    const { isConnected } = useTypedSelector(state => state.userReducer)
    const actions = useActions()
    const logout = () => {
        actions.setIsConnected(false)
        navigation.navigate(SCREENS.Login)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.drawerItem} onPress={() => logout()}>
                <Text style={styles.txt}>{isConnected ? 'Logout' : 'Login'}</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column-reverse'
    },
    drawerItem: {
        padding: 18,
        backgroundColor: COLORS.GRAY
    },
    img: {
        width: 24,
        height: 24
    },
    txt: {
        fontSize: 24,

    }
})

export default SideMenu;
