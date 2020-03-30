import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './app/scenes/FirstScreen';
import SecondScreen from './app/scenes/SecondScreen';
import ThirdScreen from './app/scenes/ThirdScreen';

const Stack = createStackNavigator();


const App = () => {
    return (
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={FirstScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default App





