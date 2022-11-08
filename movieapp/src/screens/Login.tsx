import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, SCREENS } from '../utilities/enum'
// import Joi from 'react-native-joi';

// const joiSchema = Joi.object({
// username: Joi.string().min(8).max(10).required()
// .messages({
//     'string.empty': `"username" cannot be an empty field`,
//     'string.min': `"username" should have a minimum length of {#limit}`,
//     'any.required': `"username" is a required field`
// })
// });

const Login: React.FC = () => {
    const navigation = useNavigation<any>();
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/bgImg.png")} resizeMode="cover" style={styles.image}>
                <View style={styles.loginCon}>
                    <Text style={styles.title}>Menora Flix</Text>


                    <TouchableOpacity onPress={() => navigation.navigate('Drawer')} style={styles.loginBtn}>
                        <Text style={styles.loginTxtBtn}>Login</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
    loginCon: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.BLACK_OP,
        alignItems: 'center',
    },
    loginBtn: {
        backgroundColor: COLORS.RED,
        width: 340,
        height: 40,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginTxtBtn: {
        color: COLORS.WHITE,
        fontSize: 18,
        fontWeight: 'bold'
    },
    title: {
        color: COLORS.RED,
        fontSize: 48,
        fontWeight: 'bold'
    }
});
export default Login;