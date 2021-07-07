import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const styles = StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT
    }
});

type Props = {
    backgroundColor: string;
    isBarStyleDark: boolean;
}

export function StatusBarColor({ backgroundColor, isBarStyleDark, ...rest }: Props) {
    return (
        <SafeAreaView style={[styles.statusBar, { backgroundColor }]}>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                barStyle={isBarStyleDark ? 'dark-content' : 'light-content'}
                {...rest}
            />
        </SafeAreaView>
    );
};
