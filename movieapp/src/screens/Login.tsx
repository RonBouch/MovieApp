import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useRef, useState } from 'react'
import { Text, View, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { COLORS, LoginOrSignup, SCREENS } from '../utilities/enum'
import { Formik } from 'formik';
import CustomTextInput from '../components/CustomTextInput'
import * as Yup from 'yup';
import { nameValidation, passwordValidation } from '../utilities/Validations'
import { getJwt } from '../utilities/Tools';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';
import { Api } from '../utilities/RestApi';


const validationSchema = Yup.object().shape({
    username: nameValidation(),
    password: passwordValidation(),
});

const Login: React.FC = () => {
    const navigation = useNavigation<any>();
    const userNameRef = useRef<TextInput>();
    const passwordRef = useRef<TextInput>();
    const [errMessage, setErrMessage] = useState('');
    const actions = useActions()
    const { isConnected } = useTypedSelector(state => state.userReducer)

    useEffect(() => {
        setErrMessage('')
        if (isConnected) navigation.navigate(SCREENS.Home);
    }, [isConnected]);

    const onSubmit = async (data: any, { resetForm }: any) => {
        try {
            getJwt(data).then(async res => {
                const response = await Api(isConnected === null ? LoginOrSignup.Signup : LoginOrSignup.Login, res)
                if (response.token) {
                    actions.setIsConnected(true);
                    navigation.navigate(SCREENS.Home);
                    resetForm()
                } else {
                    setErrMessage(response.message);
                }
            })
        } catch (error) {
            console.log("onSubmit ~ error", error)
        }
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/bgImg.png")} resizeMode="cover" style={styles.image}>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}>
                    {({
                        values,
                        touched,
                        errors,
                        isValid,
                        handleChange,
                        handleSubmit,
                        validateField,
                    }) => {
                        return (
                            <View style={styles.loginCon}>
                                <Text style={styles.title}>Menora Flix</Text>
                                <Text style={styles.loginTxt}>Login</Text>
                                <CustomTextInput
                                    maxLength={20}
                                    ref={userNameRef}
                                    textAlign="right"
                                    label={'username'}
                                    value={values.username}
                                    keyboardType={'name-phone-pad'}
                                    onChangeText={handleChange('username')}
                                    onSubmitEditing={() => passwordRef?.current?.focus()}
                                    onEndEditing={() => {
                                        validateField('username');
                                    }}
                                    isValid={!(touched.username && errors.username)}
                                    inputHolderStyle={styles.inputHolderStyle}
                                    errorMessage={errors.username}
                                />
                                <CustomTextInput
                                    maxLength={20}
                                    ref={passwordRef}
                                    textAlign="right"
                                    label={"password"}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    isPasswordField={true}
                                    onEndEditing={() => {
                                        validateField('password');
                                    }}
                                    isValid={!(touched.password && errors.password)}
                                    inputHolderStyle={styles.inputHolderStyle}
                                    errorMessage={errors.password}
                                />

                                <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
                                    <Text style={styles.loginTxtBtn}>{isConnected === null ? 'Signup' : 'Login'}</Text>
                                </TouchableOpacity>
                                {errMessage && < Text style={styles.errMsg}>{errMessage}</Text>}
                            </View>)
                    }}
                </Formik>
            </ImageBackground>
        </View >
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
    inputHolderStyle: {
        width: '90%',
        borderRadius: 4,
        margin: 10,
        backgroundColor: COLORS.GRAY,
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
        marginTop: 50,
    },
    loginTxtBtn: {
        color: COLORS.WHITE,
        fontSize: 18,
        fontWeight: 'bold'
    },
    title: {
        color: COLORS.RED,
        fontSize: 48,
        fontWeight: 'bold',
        position: 'absolute',
        top: 100
    },
    loginTxt: {
        color: COLORS.WHITE,
        fontSize: 24,
        alignSelf: 'flex-start',
        left: 20
    },
    errMsg: {
        fontSize: 20,
        color: COLORS.RED,
        top: 20
    }
});
export default Login;