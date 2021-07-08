import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    primaryCircle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    internalCircle: {
        width: 160,
        height: 160,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textRealFeel: {
        fontSize: 15,
        color: theme.colors.white,
        textAlign: 'center',
        fontFamily: theme.fonts.text400
    },
    textTemperature: {
        fontSize: 30,
        color: theme.colors.white,
        textAlign: 'center',
        fontFamily: theme.fonts.title700
    },
});