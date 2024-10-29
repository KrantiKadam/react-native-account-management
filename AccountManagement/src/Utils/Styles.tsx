import { StyleSheet } from 'react-native';
import { primaryBgColor, primaryBtnBgColor } from './Colors';

export const styles = StyleSheet.create({
    flex1: { flex: 1 },
    input: {
        height: 40,
        marginVertical: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderColor: 'grey',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
    topLogo: {
        width: '100%', height: 100,
    },
    appBackgroundColor:
    {
        backgroundColor: primaryBgColor,

    },
    fontWeightBold: {
        fontWeight: 'bold',
    },
    createAccountTextColor: {
        color: primaryBgColor,
    },
    buttonStyle: {
        height: 40,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
    },
    primaryBtnBgColor: {
        backgroundColor: primaryBtnBgColor,
    },
    headerFontSize: {
        fontSize: 25,
    },
    padding25: {
        padding: 25,
    },
    successPageBottomView: {
        alignItems: 'center',
        // justifyContent: 'space-evenly',
    },
    bigCheckMark: {
        width: '30%',
        height: '30%',
        marginRight: 5,
    },
});
