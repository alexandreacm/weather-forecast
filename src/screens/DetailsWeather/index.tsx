
import React from 'react';

import {
    View, Text
} from 'react-native';

import { styles } from './styles';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

export function DetailsWether() {
    return (
        <>
            <Header title="Rio Grande do sul, BR" action={
                <BorderlessButton>
                    <Fontisto
                        name="share"
                        size={18}
                        color={theme.colors.white}
                    />
                </BorderlessButton>
            } />
            <Background>
                <View />
            </Background>
        </>
    );
}