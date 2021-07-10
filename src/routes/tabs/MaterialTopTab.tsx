import React from 'react';
import {
    createMaterialTopTabNavigator,
    MaterialTopTabBarOptions
} from '@react-navigation/material-top-tabs';

import { Home } from '../../screens/Home';
import { WeatherByCityName } from '../../screens/WeatherByCityName';
import { WeatherByZipCode } from '../../screens/WeatherByZipCode';

import { theme } from '../../global/styles/theme';

const options: MaterialTopTabBarOptions = {
    activeTintColor: theme.colors.white,
    indicatorStyle: {
        backgroundColor: theme.colors.secondary70,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.line
    },
    style: {
        backgroundColor: theme.colors.primary,
        height: 55
    },
    labelStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: theme.fonts.text400,
        lineHeight: 30
    }
};

export function MaterialTopTab() {
    const { Navigator, Screen } = createMaterialTopTabNavigator();
    return (
        <Navigator tabBarOptions={options}>
            <Screen name='Home' component={Home} />
            <Screen
                name='CityName'
                options={{ title: 'City Name' }} component={WeatherByCityName} />
            <Screen
                name='ZipCode'
                options={{ title: 'By Zip Code' }} component={WeatherByZipCode} />
        </Navigator>
    );
}