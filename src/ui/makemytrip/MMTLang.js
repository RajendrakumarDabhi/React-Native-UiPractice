import { Dimensions, Image, SafeAreaView, SafeAreaViewBase, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MMTPrimaryColor } from './constants'
import { useNavigation } from '@react-navigation/native'
import { MMT_Login } from '../../common/constants'

const LangRadio = ({ title, char, isSelected, onSelect }) => {
    return (
        <TouchableOpacity style={[styles.radioStlyle,
        {
            borderColor: isSelected ? '#0ff' : '#000',
            backgroundColor: isSelected ? '#EAF5FF' : '#fff'
        }]}
            onPress={onSelect}>
            {
                isSelected ? <Image tintColor={'#00f'} style={{ width: 24, height: 24, marginStart: 4 }} source={require('../../../assets/rb_selected.png')} />
                    : <Image style={{ width: 24, height: 24, marginStart: 4 }} source={require('../../../assets/rb_.png')} />
            }
            <Text style={{ textAlign: 'left', width: '80%', fontSize: 16 }}>{title}</Text>
            <Text style={{ fontSize: 16, paddingEnd: 8 }}>{char}</Text>
        </TouchableOpacity>
    )
}

const MMTLang = () => {
    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width
    const [selectedIndex, SetselectedIndex] = useState(0)
    var navigation = useNavigation()
    const onLangContinue = () => {
        navigation.navigate(MMT_Login)
    }
    return (
        <SafeAreaView styles={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar />
                    <Image style={[styles.imageBack, { height: height / 1.7 }]} resizeMode='stretch' source={require('../../../assets/mmt_wallpaper_lang.jpg')} />
                    <View style={styles.toolbar}>
                        <Image style={styles.imgToolbar} resizeMode='stretch' source={require('../../../assets/mmtlogo.png')} />
                        <Text style={[styles.actionToolbar, styles.txth5]}>Skip</Text>
                    </View>
                    <View style={styles.ctngreeting}>
                        <View style={{ flexDirection: 'row', height: 40 }}>
                            <Image tintColor={'#fff'} style={{ height: 28, width: 28 }} source={require('../../../assets/ic_lang.png')} />
                            <Text style={[styles.txth5, { height: 40, marginStart: 14 }]}>Welcome</Text>
                        </View>
                        <Text style={[styles.txth5, { height: 25 }]}>Select your Language</Text>
                        <Text style={[styles.body2, { height: 45, marginTop: 8 }]}>You can also change your language in App Settings after sign in</Text>
                    </View>
                    <TouchableOpacity disabled={true} style={[styles.ctnForm]}>
                        <LangRadio title="English" char="A" isSelected={selectedIndex == 0} onSelect={() => {
                            SetselectedIndex(0)
                        }} />
                        <View style={{ height: 12 }} />
                        <LangRadio title="हिंदी" char="क" isSelected={selectedIndex == 1} onSelect={() => {
                            SetselectedIndex(1)
                        }} />
                        <TouchableOpacity style={styles.button} onPress={onLangContinue}>
                            <Text style={{ color: '#fff' }}>Continue</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MMTLang

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: '100%'
    },
    imageBack: {
        width: '100%',
        height: 400,
        position: 'absolute'
    },
    toolbar: {
        backgroundColor: '#352f32',
        opacity: 0.7,
        height: 48,
        alignItems: 'center',
        paddingStart: 8,
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
    body2: {
        color: '#fff',
        fontSize: 14,
    },
    ctngreeting: {
        marginStart: 16,
        marginTop: 230
    },
    actionToolbar: {
        marginTop: 10,
        height: '100%',
        marginEnd: 8,
    },
    ctnForm: {
        alignSelf: 'center',
        width: '94%',
        margin: 14,
        flex: 1,
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 8
    },
    radioStlyle: {
        flex: 1,
        width: '95%',
        height: 50,
        flexDirection: 'row',
        padding: 8,
        borderRadius: 6,
        alignSelf: 'center',
        justifyContent: 'space-between',
        borderColor: MMTPrimaryColor,
        borderStyle: 'solid',
        borderWidth: 0.5,
        alignItems: 'center'
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
        backgroundColor: MMTPrimaryColor
    }
})