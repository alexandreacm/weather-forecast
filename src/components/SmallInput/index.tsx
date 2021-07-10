import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function SmallInput({ ...rest }: TextInputProps) {
    return (
        <View style={styles.viewInput}>
            <Feather
                name="search"
                size={25}
                color={theme.colors.primary} />

            <TextInput
                style={styles.container}
                {...rest}
            />
        </View>
    );
}