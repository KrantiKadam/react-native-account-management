import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAccountScreen from '../Components/CreateAccountScreen';
import ResultScreen from '../Components/ResultScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CreateAccountScreen" screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen
                    name="CreateAccountScreen"
                    component={CreateAccountScreen}
                />
                <Stack.Screen name="ResultScreen" component={ResultScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default MainNavigator;

