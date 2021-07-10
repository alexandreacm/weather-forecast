import React from 'react';

import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import Sun from '../../assets/sun.png';
import rain from '../../assets/rain.png';
import rainDay from '../../assets/rainy-day.png';
import { Main } from '../../screens/Home/models/Main';

type Props = {
    data: Main
}

export function SpecificTemperature({ data }: Props) {
    return (
        <View style={styles.containerSecondary}>

            <View style={styles.containerMorning}>
                <Text style={styles.text}>Morning</Text>
                <View style={styles.morning}>
                    <Image
                        source={Sun}
                        style={styles.image}
                        resizeMode='contain' />
                    <Text style={styles.specificTemperature}>25°</Text>
                </View>
            </View>

            <View style={styles.containerAfternoon}>
                <Text style={styles.text}>Afternoon</Text>
                <View style={styles.morning}>
                    <Image
                        source={rain}
                        style={styles.image}
                        resizeMode='contain' />
                    <Text style={styles.specificTemperature}>35°</Text>
                </View>
            </View>

            <View style={styles.containerEvening}>
                <Text style={styles.text}>Evening</Text>
                <View style={styles.morning}>
                    <Image
                        source={rainDay}
                        style={styles.image}
                        resizeMode='contain' />
                    <Text style={styles.specificTemperature}>20°</Text>
                </View>
            </View>
        </View>
    );
}