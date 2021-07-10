import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import sun from '../../assets/sun.png';
import rain from '../../assets/rainy-day.png';
import { Main } from '../../screens/Home/models/Main';

type Props = {
    tempMin: number;
    tempMax: number;
    pressure: number;
    humidity: number;
}

export function FooterTemperature({ tempMin = 0, tempMax = 0, pressure = 0, humidity = 0 }: Props) {
    return (
        <View style={styles.containerFooter}>
            <View style={styles.footerLeft}>

                <View style={styles.leftTemperature}>
                    <Text style={styles.text}>Minimum</Text>
                    <Text style={styles.text}>{`${tempMin}°C`}</Text>
                </View>

                <View style={styles.leftTemperature}>
                    <Text style={styles.text}>Humidity</Text>
                    <Text style={styles.text}>{`${humidity}%`}</Text>
                </View>
            </View>

            <View style={styles.footerRight}>
                <View style={styles.rightTemperature}>
                    <Text style={styles.text}>Maximum</Text>
                    <Text style={styles.text}>{`${tempMax}°C`}</Text>
                </View>
                <View style={styles.rightTemperature}>
                    <Text style={styles.text}>Pressure</Text>
                    <Text style={styles.text}>{`${pressure}mbar`}</Text>
                </View>
            </View>
        </View>
    );
}