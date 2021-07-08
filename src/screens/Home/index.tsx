import React from 'react';
import { View, Text, Image } from 'react-native';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { StatusBarColor } from '../../components/StatusBarConfig';
import { CentralTemperature } from '../../components/CentralTemperature';
import { SpecificTemperature } from '../../components/SpecificTemperature';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import sun from '../../assets/sun.png';
import rain from '../../assets/rainy-day.png';

export function Home() {
    return (
        <>
            <StatusBarColor
                backgroundColor={theme.colors.primary}
                isBarStyleDark={false} />
            <Header title="Rio Grande do sul, BR" />
            <Background>
                <View style={styles.container}>
                    <CentralTemperature />

                    <SpecificTemperature />

                    <Text style={styles.text}>Detalhes de hoje</Text>
                </View>

                <View style={styles.containerFooter}>
                    <View style={styles.footerLeft}>
                        <View style={styles.leftTemperature}>
                            <Text style={{ color: '#FFF' }}>Mínima</Text>
                            <Text style={{ color: '#FFF' }}>11°C</Text>
                        </View>
                        <View style={styles.leftTemperature}>
                            <Image
                                source={sun}
                                style={styles.image}
                                resizeMode='contain' />

                            <Text style={{ color: '#FFF' }}>22°</Text>
                        </View>
                    </View>
                    <View style={styles.footerRight}>
                        <View style={styles.rightTemperature}>
                            <Text style={{ color: '#FFF' }}>Máxima</Text>
                            <Text style={{ color: '#FFF' }}>18°C</Text>
                        </View>
                        <View style={styles.rightTemperature}>
                            <Image
                                source={rain}
                                style={styles.image}
                                resizeMode='contain' />

                            <Text style={{ color: '#FFF' }}>18°C</Text>
                        </View>
                    </View>
                </View>
            </Background>
        </>
    );
}