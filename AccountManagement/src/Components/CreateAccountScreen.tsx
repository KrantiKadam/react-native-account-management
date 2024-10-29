import React, { useState } from 'react';
import { Alert, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { TopBar } from '../UIComponents/TopBar';
import { useDispatch } from 'react-redux';
import { isEmailIdValid, isPasswordValid, isUserNameValid } from '../Utils/Utils';
import { CustomTextInput } from '../UIComponents/CustomTextInput';
import { styles } from '../Utils/Styles';


function CreateAccountScreen(props: any) {

    const [userName, setUserName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    const dispatch = useDispatch();

    const onChangeUserName = (text: string) => {
        setUserName(text);
    };

    const onChangeEmail = (text: string) => {
        setEmailId(text);
    };

    const onChangePassword = (text: string) => {
        text = text.replace(/[^a-zA-Z0-9]/g, '');
        setPassword(text);
    };
    const validateInputs = () => {
        let validation = {
            isValid: false,
            message: '',
        };
        if (isUserNameValid(userName)) {
            if (isEmailIdValid(emailId)) {
                if (isPasswordValid(password)) {
                    validation.isValid = true;
                }
                else {
                    validation.message = 'Invalid Password';
                }
            }
            else {
                validation.message = 'Invalid Email Id';
            }
        }
        else {
            validation.message = 'Invalid User Name';
        }
        return validation;
    };


    return (
        <SafeAreaView style={[styles.flex1, styles.appBackgroundColor]}>
            {TopBar()}
            <View style={[styles.flex1, styles.padding25]} >
                <Text style={[styles.fontWeightBold, styles.headerFontSize]}>
                    {'Create Account'}
                </Text>

                <CustomTextInput
                    onChangeText={onChangeUserName}
                    text={userName}
                    maxLength={50}
                    placeholder="User name"
                    imageSource={require('../Resources/Images/user_icon.png')}
                />

                <CustomTextInput
                    onChangeText={onChangeEmail}
                    text={emailId}
                    placeholder="Email Id"
                    imageSource={require('../Resources/Images/email_icon.png')}
                />

                <CustomTextInput
                    showPwdIcon={true}
                    onChangeText={onChangePassword}
                    text={password}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    placeholder="Password"
                    imageSource={require('../Resources/Images/password_icon.png')}
                />

                <TouchableOpacity style={[styles.buttonStyle, styles.primaryBtnBgColor]}
                    onPress={() => {
                        let validation = validateInputs();
                        if (validation.isValid) {
                        createAccountAPICall();  
                        }
                        else {
                            Alert.alert('Invalid', validation.message);
                        }
                    }}
                >
                <Text style={[styles.createAccountTextColor, styles.fontWeightBold]}>{'Create Account'}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

    function createAccountAPICall(){
        try {
        fetch('http://localhost:8080/api/account/', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: userName,
              email: emailId,
              password: password
            }),
          }).then(async (response: any) => {
            console.log(response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
          
              // Parse the JSON response
              const accountData = await response.json();
              console.log('Account created:', accountData);
              
            dispatch({ type: 'AccountReducer/setAccountValue', payload: { accountData: accountData } });
            setUserName('');
            setEmailId('');
            setPassword('');
            props.navigation.navigate('ResultScreen');
          });
        } catch (error) {
            console.error('Error creating account:', error);
            Alert.alert('Error', 'Error to create account!!!');
        }
    };
};



export default React.memo(CreateAccountScreen);
