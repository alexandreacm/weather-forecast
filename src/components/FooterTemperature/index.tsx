import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import sun from '../../assets/sun.png';
import rain from '../../assets/rainy-day.png';


export function FooterTemperature() {
    return (
        <View style={styles.containerFooter}>
            <View style={styles.footerLeft}>
                <View style={styles.leftTemperature}>
                    <Text style={styles.text}>Mínima</Text>
                    <Text style={styles.text}>11°C</Text>
                </View>
                <View style={styles.leftTemperature}>
                    <Image
                        source={sun}
                        style={styles.image}
                        resizeMode='contain' />

                    <Text style={styles.text}>22°</Text>
                </View>
            </View>
            <View style={styles.footerRight}>
                <View style={styles.rightTemperature}>
                    <Text style={styles.text}>Máxima</Text>
                    <Text style={styles.text}>18°C</Text>
                </View>
                <View style={styles.rightTemperature}>
                    <Image
                        source={rain}
                        style={styles.image}
                        resizeMode='contain' />

                    <Text style={styles.text}>18°C</Text>
                </View>
            </View>
        </View>
    );
}