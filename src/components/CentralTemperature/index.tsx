import React, { ReactNode } from 'react';
import { Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import Sun from '../../assets/sun.png';

type Props = {
    dataTemperature: number;
    RealFeel: number;
}


export function CentralTemperature({ dataTemperature = 0, RealFeel = 0 }: Props) {
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
                    style={styles.image}
                    resizeMode='contain' />

                <Text style={styles.textTemperature}>{`${dataTemperature}°C`}</Text>
                <Text style={styles.textRealFeel}>{`RealFeel ${RealFeel}°C`}</Text>

            </LinearGradient>
        </LinearGradient>
    );
}