import React, { useState } from 'react';
import { View, Text, Alert, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaskedTextInput } from "react-native-mask-text";

import { Background } from '../../components/Background';
import { CentralTemperature } from '../../components/CentralTemperature';
import { SpecificTemperature } from '../../components/SpecificTemperature';
import { FooterTemperature } from '../../components/FooterTemperature';
import { Load } from '../../components/Load';

import { styles } from './styles';
import { Main } from '../Home/models/Main';
import { Weather } from '../Home/models/Weather';

import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme';

export function WeatherByZipCode() {
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [dataMain, setDataMain] = useState<Main>();
    const [dataWeather, setDataWeather] = useState<Weather>();
    const [locationName, setLocationName] = useState<string>('');
    const [zipCode, setZipCode] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    function resetValues() {
        setDataWeather({} as Weather);
        setDataMain({} as Main);
    }

    async function loadWeather() {
        try {

            if (zipCode != '') {

                setLoading(true);
                const { data: { main, sys: { country }, weather, name } } = await api.get(`?q=${zipCode},BR&units=metric&appid=fc769c0cf9cfa067109b56dc0e14eee3`);

                setDataWeather(weather);
                setDataMain(main);
                setLocationName(`${name}, ${country}`);
            } else {
                Alert.alert('Zip code is required!!');
            }

            setLoading(false);
            setErrorMsg(``);
        } catch (error) {
            setErrorMsg(`Zip code invalid`);
            setLoading(false);
            resetValues();
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
                            errorMsg !== '' && (
                                <View style={styles.errorMsg}>
                                    <Text style={styles.errorMsgText}>{errorMsg}</Text>
                                </View>
                            )
                        }
                        <View style={styles.viewZipCode}>
                            <View style={styles.viewInput}>
                                <MaskedTextInput
                                    mask='99999-999'
                                    keyboardType='numeric'
                                    style={styles.containerInput}
                                    placeholder='Zip Code'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    value={zipCode}
                                    onChangeText={setZipCode}
                                />

                            </View>
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
                    </Background>
                )
            }

        </ScrollView>
    );
}