import React from 'react'
import { View, Text, Button } from 'react-native'

const ThirdScreen = ({ navigation }) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello</Text>
        <Button title="Go to First Screen" onPress={() => navigation.navigate('Home') } />
    
    </View>
    )
}

export default ThirdScreen
