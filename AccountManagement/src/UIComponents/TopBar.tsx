import React from 'react';
import { Image } from 'react-native';
import { styles } from '../Utils/Styles';

export function TopBar() {
    return (
        <Image style={styles.topLogo} source={require('../Resources/Images/rakbankLogo.png')} />
    );
}
