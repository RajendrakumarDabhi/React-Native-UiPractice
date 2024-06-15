import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { MMTPrimaryColor } from './constants'

const CustomInput = ({ placeholder, onTextChange }) => {
    const [inputValue, setInputValue] = useState('')
    function TextChange(value) {
        onTextChange(value)
        setInputValue(value)
    }
    return (
        <View style={[styles.inputbox, { borderColor: inputValue == '' ? '#ccc' : MMTPrimaryColor }]}>
            <TextInput placeholder={placeholder} style={styles.textInput} onChangeText={TextChange} />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    inputbox: {
        height: '40',
        width: '96%',
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        padding: 3,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    textInput: {
        paddingStart: 12,
        height: 40,
        fontSize: 14,
        fontWeight:'500'
    }
})