import React from 'react';
import { Image, Text } from  'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import Sun from '../../assets/sun.png';

export function CentralTemperature() {
    const { primaryBarColor, secondaryBarColor, secondary30 } = theme.colors;

    return (
        <LinearGradient
            style={styles.primaryCircle}
            colors={[primaryBarColor, secondaryBarColor]}>
            <LinearGradient
                style={styles.internalCircle}
                colors={[primaryBarColor, secondary30]}>
                <Image
                    source={Sun}
                    style={{ width: 50, height: 50 }}
                    resizeMode='contain' />

                <Text style={styles.textTemperature}>22°</Text>
                <Text style={styles.textRealFeel}>RealFeel 25°</Text>

            </LinearGradient>
        </LinearGradient>
    );
}