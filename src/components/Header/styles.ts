import { StyleSheet, Platform } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        paddingTop: Platform.OS == 'android' ? 0 : 20,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontFamily: theme.fonts.title500,
        fontSize: 16,
        color: theme.colors.heading,
    }
});