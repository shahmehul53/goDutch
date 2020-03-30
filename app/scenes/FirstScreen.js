import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import Card from '../components/Card'
import CustomButton from '../components/CustomButton'
import R from '../src/R'
import CustomTextInput from '../components/CustomTextInput'

const FirstScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
           <Card>
               <View style={{flexDirection: 'row', margin: 45}}>
                   <Image source={R.images.ic_launcher} style={{height: 37, width: 37, marginHorizontal: 5}}/>
                   <Image source={R.images.goDutch} style={{height: 35, width: 140.04}}/>
               </View>

               <View style={{marginTop: 65, marginBottom:64}}>
            <Text style={styles.textStyle}>Mobile Number</Text>
            <CustomTextInput keyboardType="numeric" />
            </View>
            
         
           <CustomButton title="Continue" onPress={() => navigation.navigate('Second') } />
           
            </Card>
        </View>
    )
}

export default FirstScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8'
    },
    textStyle: {
        paddingHorizontal: 5, 
        fontWeight: '500', 
        fontSize: 14
    }
})
