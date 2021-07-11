import React, { useEffect, useState } from 'react';
import { View, Text, Alert, ScrollView } from 'react-native';
import * as Location from 'expo-location';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { CentralTemperature } from '../../components/CentralTemperature';
import { SpecificTemperature } from '../../components/SpecificTemperature';
import { FooterTemperature } from '../../components/FooterTemperature';

import { api } from '../../services/api';

import { Main } from './models/Main';
import { Weather } from './models/Weather';

import { styles } from './styles';

export function Home() {
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [locationName, setLocationName] = useState<string>('');
    const [dataMain, setDataMain] = useState<Main>();
    const [dataWeather, setDataWeather] = useState<Weather>();

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            const location: Location.LocationObject = await Location.getCurrentPositionAsync({});

            try {
                //alert(JSON.stringify(location?.coords?.latitude));
                const { data: { main, sys: { country }, weather, name } } = await api.get(`?lat=${location?.coords?.latitude}&lon=${location?.coords?.longitude}&units=metric&appid=fc769c0cf9cfa067109b56dc0e14eee3`)

                setDataWeather(weather);
                setDataMain(main);
                setLocationName(`${name}, ${country}`);
            } catch (error) {
                Alert.alert(error)
            }
        })();
    }, []);

    return (
        <Background>
            <ScrollView>
                <Header title={locationName || 'No Address'} />
                {
                    errorMsg !== '' && (
                        <View style={styles.errorMsg}>
                            <Text style={styles.errorMsgText}>{errorMsg}</Text>
                        </View>
                    )
                }

                <View style={styles.container}>
                    <CentralTemperature
                        dataTemperature={dataMain?.temp || 0}
                        RealFeel={dataMain?.feels_like || 0}
                        mainWeather={dataWeather?.main || ''}
                    />

                    <SpecificTemperature data={dataMain as Main} />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.text}>Weather Details</Text>
                </View>

                <View>
                    <FooterTemperature
                        tempMin={dataMain?.temp_min as number}
                        tempMax={dataMain?.temp_max as number}
                        pressure={dataMain?.pressure as number}
                        humidity={dataMain?.humidity as number}
                    />
                </View>
            </ScrollView>
        </Background>
    );
}