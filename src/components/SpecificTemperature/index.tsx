import React from 'react';

import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import Sun from '../../assets/sun.png';
import rain from '../../assets/rain.png';
import rainDay from '../../assets/rainy-day.png';


export function SpecificTemperature() {
    return (
        <View style={styles.containerSecondary}>

            <View style={styles.containerMorning}>
                <Text style={styles.text}>Manhã</Text>
                <View style={styles.morning}>
                    <Image
                        source={Sun}
                        style={{ width: 30, height: 30 }}
                        resizeMode='contain' />
                    <Text style={styles.specificTemperature}>25°</Text>
                </View>
            </View>

            <View style={styles.containerAfternoon}>
                <Text style={styles.text}>Tarde</Text>
                <View style={styles.morning}>
                    <Image
                        source={rain}
                        style={{ width: 30, height: 30 }}
                        resizeMode='contain' />
                    <Text style={styles.specificTemperature}>35°</Text>
                </View>
            </View>

            <View style={styles.containerEvening}>
                <Text style={styles.text}>Noite</Text>
                <View style={styles.morning}>
                    <Image
                        source={rainDay}
                        style={{ width: 30, height: 30 }}
                        resizeMode='contain' />
                    <Text style={styles.specificTemperature}>20°</Text>
                </View>
            </View>
        </View>
    );
}