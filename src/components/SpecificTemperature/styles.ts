import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    containerSecondary: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15
    },
    containerMorning: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: theme.colors.highlight
    },
    containerAfternoon: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: theme.colors.highlight
    },
    containerEvening: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    morning: {
        width: 50,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        color: theme.colors.white,
        textAlign: 'center'
    },
    specificTemperature: {
        fontSize: 15,
        color: theme.colors.white,
        textAlign: 'center',
        marginLeft: 5
    },
    image: {
        width: 30,
        height: 30
    }
});