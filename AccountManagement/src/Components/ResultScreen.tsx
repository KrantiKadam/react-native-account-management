import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { TopBar } from '../UIComponents/TopBar';
import { useSelector } from 'react-redux';
import { styles } from '../Utils/Styles';

function ResultScreen(props: any) {
    const resultData = useSelector((state: any) => state.accountReducer?.accountData);
    const [accountData, setAccoutData] = useState({username:'', email:''});
    return (
        <SafeAreaView style={[styles.flex1, styles.appBackgroundColor]}>
            <View style={styles.flex1} >
                {TopBar()}
                <View style={[styles.flex1, styles.successPageBottomView]}>
                    <Text style={[styles.fontWeightBold, styles.headerFontSize]}>{'Successfully Submitted!'}</Text>
                    <Image resizeMode="contain" style={styles.bigCheckMark} source={require('../Resources/Images/round_check_box.png')} />
                    <Text style={[styles.fontWeightBold, styles.headerFontSize]}>{'Username: ' + accountData?.username}</Text>
                    <Text style={[styles.fontWeightBold, styles.headerFontSize]}>{'Email: ' + accountData?.email}</Text>
                </View>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => {
                        getAccountAPICall(resultData?.accountData?.id);
                    }}
                >
                <Text style={styles.fontWeightBold}>{'Get Account'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => {
                        deleteAccountAPICall(resultData?.accountData?.id);
                    }}
                >
                <Text style={styles.fontWeightBold}>{'Delete'}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

    function getAccountAPICall(accountId: number){
        fetch('http://localhost:8080/api/account/'+ accountId, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }
          }).then(async (response: any) => {
            console.log(response.data);
          
            //setAccountData
            const accountData = await response.json();
            console.log('Account created:', accountData);
            Alert.alert('Success', 'Fetched account details!!!');


            setAccoutData({
                username: accountData.username,
                email: accountData.email,
            })
          }).catch(async (error: any) => {
            console.log(error);
            Alert.alert('Error', 'Error to fetch account details!!!');
          })
    }

    function deleteAccountAPICall(accountId: number){
        fetch('http://localhost:8080/api/account/'+ accountId, {
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }
          }).then(async (response: any) => {
            console.log(response.data);
          
            console.log('Account deleted');
            Alert.alert('Success', 'Account deleted!!!');
            // props.navigation.navigate('CreateAccountScreen');
            props.navigation.goBack(null);
          }).catch(async (error: any) => {
            console.log(error);
            Alert.alert('Error', 'Error to delete account!!!');
          })
    }
}

export default React.memo(ResultScreen);
