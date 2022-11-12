import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Animated,
  Easing,
} from 'react-native';
import { COLORS } from '../utilities/enum';

const CustomTextInput = React.forwardRef((props: any, ref: any) => {
  const {
    label,
    containerStyle,
    inputHolderStyle,
    textInputStyle,
    value,
    isValid,
    errorMessage,
    notRequired,
    isPasswordField
  } = props;

  const inputRef = useRef<any>(null);
  const [isFocused, setIsFocused] = useState(false);
  const animatedValue = new Animated.Value(!props.value ? 0 : 1);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isFocused || props.value ? 1 : 0,
      duration: 130,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  });
  const handleFocus = () => {
    setIsFocused(true);
    props?.onFocus && props.onFocus();
  };
  const handleBlur = () => {
    setIsFocused(false);
    props?.onBlur && props.onBlur();
  };


  return (
    <View pointerEvents={'auto'} style={[containerStyle]}>
      <View style={[styles.inputWithIcon, inputHolderStyle]}>
        <Animated.Text
          onPress={() => {
            if (ref) {
              ref.current.focus();
              return;
            }
            inputRef?.current.focus();
          }}
          style={[
            styles.labelStyle,
            (isFocused || value) && { fontSize: 16, color: 'rgb(67 56 252)', bottom: 5 },
            {
              transform: [
                {
                  translateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -28],
                  }),
                },
              ],
              color:
                isValid && (!!value || isFocused)
                  ? COLORS.RED
                  : !isValid
                    ? COLORS.RED
                    : COLORS.WHITE,
            },
          ]}>
          {label}
        </Animated.Text>

        <TextInput
          secureTextEntry={isPasswordField}
          returnKeyType={'done'}
          onSubmitEditing={props.onSubmitEditing}
          {...props}
          ref={ref || inputRef}
          value={value}
          onChangeText={props.onChangeText}
          placeholder={isFocused ? props.placeholder : ''}
          style={[
            styles.textInput,
            textInputStyle,
            !isValid && {
              // borderBottomColor: COLORS.RED,
              // borderBottomWidth: StyleSheet.hairlineWidth,
            },
            isValid &&
            isFocused && {
              // borderBottomColor: COLORS.WHITE,
              // borderBottomWidth: StyleSheet.hairlineWidth,
            },
          ]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType={props.keyboardType || 'default'}
          autoCapitalize={'none'}
          autoCorrect={false}
          multiline={props.multiline}
          selectionColor={COLORS.WHITE}
        />
      </View>

      {((!isValid && errorMessage) || notRequired) && (
        <View style={[{}]}>
          <Text
            style={[
              styles.errorMessageText,
              notRequired && { color: COLORS.WHITE },
            ]}>
            {notRequired ? 'לא חובה' : errorMessage}
          </Text>
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  labelStyle: {
    position: 'absolute',
    left: 10,
    fontSize: 20,
    lineHeight: 24,
    zIndex: 9,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 0,
    paddingTop: 0,
  },
  textInput: {
    flex: 1,
    left: 10,
    minHeight: 55,
    fontSize: 18,
    lineHeight: 30,
    color: COLORS.WHITE,
    textAlign: 'left',
  },
  errorMessageText: {
    fontSize: 15,
    lineHeight: 18,
    color: COLORS.RED,
    textAlign: 'left',
    width: '90%',
    left: 10,
  },
});

export default CustomTextInput;
