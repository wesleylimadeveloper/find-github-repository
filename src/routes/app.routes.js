import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Repository } from '../screens/Repository';

export function AppRoutes() {
    const Stack = createNativeStackNavigator();
    const { Navigator, Screen } = Stack;

    return (
        <Navigator>
            <Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Screen 
                name="Repository"
                component={Repository}
            />
        </Navigator>
    );
}