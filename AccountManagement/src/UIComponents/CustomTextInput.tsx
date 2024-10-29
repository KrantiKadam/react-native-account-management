import React from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../Utils/Styles';

export function CustomTextInput(props: any) {
    return (
        <View style={[styles.input]}>
            <Image resizeMode="contain" style={styles.icon} source={props.imageSource} />
            <TextInput
                {...props}
                style={styles.flex1}
                onChangeText={props.onChangeText}
                value={props.text}
                placeholderTextColor={'grey'}
                secureTextEntry={props.showPassword}
            />
            {props.showPwdIcon &&
                <TouchableOpacity onPress={() => {
                    props.setShowPassword(!props.showPassword);
                }}>
                    <Image resizeMode="contain" style={styles.icon} source={props.showPassword ? require('../Resources/Images/show_pwd_icon.png') : require('../Resources/Images/hide_pwd_icon.png')} />
                </TouchableOpacity>}
        </View>
    );
}


