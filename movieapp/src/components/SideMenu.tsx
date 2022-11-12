import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { SCREENS } from '../utilities/enum';

const SideMenu: React.FC = () => {
    const navigation = useNavigation<any>();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate(SCREENS.HomePage)}>
                <Text style={styles.txt}>HomePage</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate(SCREENS.Login)}>
                <Text style={styles.txt}>Login</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerItem: {
        padding: 18,
    },
    img: {
        width: 24,
        height: 24
    },
    txt: {
        fontSize: 18,
    }
})

export default SideMenu;
