import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import Card from '../components/Card';
import R from '../src/R';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

const SecondScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* <View style={{margin: 10}}> */}
      <Text style={styles.textStyle}>setup your GoDutch account</Text>
      {/* </View> */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Card>
          <View style={{marginVertical: 38}}>
            <Image
              source={R.images.ic_launcher}
              style={{height: 65, width: 65}}
            />
          </View>

          <View style={{}}>
            <Text style={styles.cardText}>current profession</Text>
            <View style={{flexDirection: 'row', marginBottom: 30}}>
              <View style={styles.cardViews}>
                <Text style={styles.viewText}>Student</Text>
              </View>
              <View style={styles.cardViews}>
                <Text style={styles.viewText}>Professional</Text>
              </View>
            </View>
          </View>

          <View style={{marginVertical: 30}}>
            <Text>full name*</Text>
            <CustomTextInput />
          </View>
          <View style={{}}>
            <Text>UPI ID*</Text>
            <CustomTextInput />
          </View>

          <View>
            <CustomButton
              title="Continue"
              onPress={() => navigation.navigate('Third')}
            />
          </View>
          {/* <Button
            title="Go to Third Screen"
            onPress={() => navigation.navigate('Third')}
          /> */}
        </Card>
      </View>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  textStyle: {
    //font-family: Montserrat;
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    padding: 10,
  },
  cardText: {
    //fontStyle: 'Medium',
    fontSize: 14,
    paddingBottom: 5,
  },
  viewText: {
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 19,
  },
  cardViews: {
    height: 42,
    width: 150,
    backgroundColor: 'blue',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
