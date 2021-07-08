
import React from 'react';

import {
    View, Text
} from 'react-native';

import { styles } from './styles';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { StatusBarColor } from '../../components/StatusBarConfig';
import { theme } from '../../global/styles/theme';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

export function Home() {
    return (
        <>
            <StatusBarColor
                backgroundColor={theme.colors.primary}
                isBarStyleDark={false} />
            <Header showBackButton title="Rio Grande do sul, BR" action={
                <BorderlessButton>
                    <Fontisto
                        name="share"
                        size={20}
                        color={theme.colors.button}
                    />
                </BorderlessButton>
            } />
            <Background>
                <View />
            </Background>
        </>
    );
}