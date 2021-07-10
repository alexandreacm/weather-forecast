import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialTopTab as Home } from './tabs/MaterialTopTab';

export function AppRoutes() {
    const { Navigator, Screen } = createStackNavigator();
    return (
        <Navigator headerMode="none">
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}