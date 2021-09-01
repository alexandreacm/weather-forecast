import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialTopTab as Home } from './tabs/MaterialTopTab';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator headerMode="none">
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}