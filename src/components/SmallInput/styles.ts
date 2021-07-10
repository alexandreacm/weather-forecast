import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '88%',
    height: 30,
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
    fontFamily: theme.fonts.text400,
    fontSize: 15,
    textAlign: 'left'
  },
  viewInput: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: theme.colors.primary,
    borderWidth: 0.5,
    padding: 5,
    backgroundColor: theme.colors.white,
    borderRadius: 8
  }
});