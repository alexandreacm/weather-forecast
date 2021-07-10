import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    primaryCircle: {
        width: 180,
        height: 180,
        borderRadius: 90,
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
        fontSize: 12,
        color: theme.colors.white,
        textAlign: 'center',
        fontFamily: theme.fonts.text400
    },
    textTemperature: {
        fontSize: 16,
        color: theme.colors.white,
        textAlign: 'center',
        fontFamily: theme.fonts.text500
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 5
    }
});