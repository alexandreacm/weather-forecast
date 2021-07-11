import React, { useState } from 'react';
import { View, Text, Alert, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Background } from '../../components/Background';
import { CentralTemperature } from '../../components/CentralTemperature';
import { SpecificTemperature } from '../../components/SpecificTemperature';
import { FooterTemperature } from '../../components/FooterTemperature';
import { SmallInput } from '../../components/SmallInput';
import { Load } from '../../components/Load';

import { styles } from './styles';
import { Main } from '../Home/models/Main';
import { Weather } from '../Home/models/Weather';

import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme';

export function WeatherByCityName() {
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [dataMain, setDataMain] = useState<Main>();
    const [dataWeather, setDataWeather] = useState<Weather>();
    const [locationName, setLocationName] = useState<string>('');
    const [cityName, setCityName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    async function loadWeather() {
        try {

            if (cityName != '') {

                setLoading(true);
                const { data: { main, sys: { country }, weather, name } } = await api.get(`?q=${cityName},BR&units=metric&appid=fc769c0cf9cfa067109b56dc0e14eee3`);

                setDataWeather(weather);
                setDataMain(main);
                setLocationName(`${name}, ${country}`);
            } else {
                Alert.alert('City Name is required!!');
            }

            setLoading(false);
        } catch (error) {
            setLoading(false);
            setErrorMsg(error);
        }
    }

    return (
        <ScrollView>
            <Header title={locationName || 'No Address'} />
            {
                loading ? (

                    <Load />
                ) : (
                    <Background>
                        {
                            errorMsg !== '' ? (
                                <View style={styles.errorMsg}>
                                    <Text style={styles.errorMsgText}>{errorMsg}</Text>
                                </View>
                            ) : (
                                <>
                                    <View style={styles.viewZipCode}>
                                        <SmallInput
                                            placeholder='City Name'
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            value={cityName}
                                            onChangeText={setCityName}
                                        />
                                        <RectButton
                                            onPress={loadWeather}
                                            style={styles.rectButton}>
                                            <Text style={{ color: theme.colors.white }}>Search</Text>
                                        </RectButton>
                                    </View>

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
                                </>
                            )
                        }
                    </Background>
                )
            }

        </ScrollView>
    );
}