import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { MMT_LANG, MMT_Login } from '../../common/constants'

const MMTSplash = () => {
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(MMT_LANG)
    }, 2000);
  }, [navigation])
  return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
      <Image style={{ alignSelf: 'center' }} source={require('../../../assets/mmtlogo.png')} />
    </View>
  )
}

export default MMTSplash

const styles = StyleSheet.create({})