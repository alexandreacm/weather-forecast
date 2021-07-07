import React from 'react';

import {
    View, Text
} from 'react-native';

import { styles } from './styles';
import { Background } from '../../components/Background';

export function Home() {
    return (
        <Background>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home</Text>
            </View>
        </Background>

    );
}