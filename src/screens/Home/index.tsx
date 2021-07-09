import React from 'react';
import { View, Text } from 'react-native';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { CentralTemperature } from '../../components/CentralTemperature';
import { SpecificTemperature } from '../../components/SpecificTemperature';
import { FooterTemperature } from '../../components/FooterTemperature';

import { styles } from './styles';

export function Home() {
    return (
        <>
            <Header title="Rio Grande do sul, BR" />
            <Background>
                <View style={styles.container}>
                    <CentralTemperature />

                    <SpecificTemperature />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.text}>Today Details</Text>
                </View>

                <View>
                    <FooterTemperature />
                </View>
            </Background>
        </>
    );
}