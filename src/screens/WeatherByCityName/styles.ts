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
        marginVertical: 14
    },
    errorMsg: {
        width: '100%',
        backgroundColor: theme.colors.button,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    errorMsgText: {
        color: theme.colors.white
    },
    viewZipCode: {
        padding: 8,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    rectButton: {
        width: 90,
        height: 40,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
});