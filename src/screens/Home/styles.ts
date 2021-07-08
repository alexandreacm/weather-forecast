import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.white,
        fontSize: 16,
        marginVertical: 15
    },
    containerFooter: {
        height:  100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    footerLeft: {
        width: '50%',
        borderRightWidth: 1,
        borderRightColor: theme.colors.highlight,
        padding: 10
    },
    footerRight: {
        width: '50%',
        padding: 10
    },
    image: {
        width: 25,
        height: 25
    },
    leftTemperature: {
        width: '100%',
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.highlight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8
    },
    rightTemperature: {
        width: '100%',
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.highlight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8
    },
});