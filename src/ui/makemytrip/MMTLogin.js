import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from './Common'
import { MMTGrey, MMTPrimaryColor } from './constants'

const MMTLogin = () => {
  const [phoneEmail, setPhoneEmail] = useState("")
  function onChangeText(data) {
    setPhoneEmail(data)
  }
  const onContinue = () => {

  }

  const height = Dimensions.get('window').height
  return (
    <ScrollView style={{ flex: 1 }} scrollEnabled={true}>
      <View style={styles.container}>
        <StatusBar />
        <Image style={[styles.imageBack, { height: height / 1.7 }]} resizeMode='stretch' source={require('../../../assets/weaterfall.jpg')} />
        <View style={styles.toolbar}>
          <Image style={styles.imgToolbar} resizeMode='stretch' source={require('../../../assets/mmtlogo.png')} />
        </View>
        <Text style={[styles.txth5, { marginTop: 46, marginStart: 14 }]}>{"Book your first international trip \n on Make my Trip"}</Text>
        <TouchableOpacity disabled={true} style={[styles.ctnForm]}>
          <Text style={{ alignSelf: 'center', height: 40 }}>Use Phone number or Email to sign up</Text>
          <CustomInput style={{ flex: 1, width: '100%', height: 45 }} placeholder='Enter mobile number./ Email' onTextChange={onChangeText} />
          <TouchableOpacity disabled={phoneEmail===""} style={[styles.button,{backgroundColor:phoneEmail==""?MMTGrey:MMTPrimaryColor}]} onPress={onContinue}>
            <Text style={{ color: '#fff' }}>Continue</Text>
          </TouchableOpacity>
          <View style={styles.viewLine}>
            <View style={[styles.line]} />
            <Text style={{marginStart:8,marginEnd:8 }}>or Login/Signup with </Text>
            <View style={[styles.line]} />
          </View>
          <View style={styles.box}>
            <Image style={[styles.imgToolbar, { width: 38, height: 38 }]} resizeMode='stretch' source={require('../../../assets/ic_google.png')} />
            <Text style={[styles.weightedfont]}>Sign in with google</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 28 }}>
            <Text>Have a </Text>
            <Text style={{ color: MMTPrimaryColor, fontWeight: 'bold' }}>Referal Code?</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default MMTLogin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageBack: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  toolbar: {
    opacity: 0.7,
    height: 48,
    marginTop: 24,
    alignItems: 'center',
    paddingStart: 8,
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  imgToolbar: {
    width: 100,
    height: 40
  },
  txth5: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  ctnForm: {
    alignSelf: 'center',
    width: '92%',
    margin: 14,
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 86,
    maxHeight: 400
  },
  button: {
    alignSelf: 'center',
    padding: 4,
    marginTop: 28,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: 45,
    borderRadius: 8,
    backgroundColor: MMTGrey
  },
  line: {
    backgroundColor: MMTGrey,
    height: 2,
    width: '25%'
  },
  viewLine: {
    marginTop: 25,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  box: {
    marginTop: 46,
    height: 46,
    width: '96%',
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: 'row',
    alignContent: 'space-around',
    borderStyle: 'solid',
    borderColor: '#000',
    padding: 3,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  weightedfont:{
    fontWeight:500,
    fontSize:16 
  }

})