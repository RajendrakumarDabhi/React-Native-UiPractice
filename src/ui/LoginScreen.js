import { Button, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const colorPrimary = '#6A70DE'
const LoginScreen = () => {
    return (
       <ScrollView style={{ flex: 1 }} > 
        <View style={{ flex: 1 }}>
            <Image resizeMode='stretch' style={styles.imageback} source={require('../../assets/background.png')} />
            <View style={styles.containerBulb}>
                <Image resizeMode='stretch' style={styles.imghBulb1} source={require('../../assets/light-1.png')} />
                <Image resizeMode='stretch' style={styles.imghBulb2} source={require('../../assets/light-2.png')} />
                <Image style={styles.imgClock} source={require('../../assets/clock.png')} />
            </View>
            <Text style={styles.textTitle}>Login</Text>

            <View style={styles.formContainer}>
                <TextInput style={[styles.inputStyle, styles.inputEmail]} placeholder='Email or Phone number'></TextInput>
                <View style={{backgroundColor:colorPrimary,height:0.5,margin:2}}/>
                <TextInput style={[styles.inputStyle, styles.inputPassword]} secureTextEntry={true} placeholder='Password'></TextInput>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => { }}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.containerForgetPassword}>
                <Text style={[styles.textforgetPassword]}>Forget Password?</Text>
            </View>
            <View>
            </View>
        </View>
        </ScrollView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

    imageback: {
        flex: 1,
        position: 'absolute',
        height: 400,
        width: '100%'
    },
    containerBulb: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    imghBulb1: {
        width: 60,
        height: 190
    },
    imghBulb2: {
        height: 140,
        width: 60
    },
    imgClock: {
        marginTop: 50,
        width: 50,
        height: 50
    },
    textTitle: {
        width: '100%',
        maxWidth: true,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 32,
        color: '#fff'
    },
    formContainer: {
        color: '#fff',
        backgroundColor: '#fff',
        margin: 18,
        borderRadius: 12,
        elevation: 12,
        padding: 4,
        marginTop: 180,
        marginStart: 24,
        marginEnd: 24,
        padding: 14
    },
    inputStyle: {
        height: 40,
        paddingStart: 6,
        paddingEnd: 2,
        paddingTop: 4,
        paddingBottom: 4
    },
    containerForgetPassword: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textforgetPassword: {
        marginTop: 28,
        color: colorPrimary
    },
    button: {
        backgroundColor: '#4A76FF',
        padding: 15,
        margin: 22,
        borderRadius: 8
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },

})