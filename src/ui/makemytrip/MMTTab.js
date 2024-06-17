import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MMTTab = ({ imageUrl, title, onClick, tintColor,isSelected }) => {
    return (
        <TouchableOpacity styles={[styles.tabContainer]} onPress={onClick}>
            <Image style={{ height: 18, width: 18, alignSelf: 'center' }} tintColor={tintColor} source={imageUrl} />
            <Text style={{marginTop:4, color: tintColor, fontSize: 14,borderBottomWidth:isSelected?1:0,borderColor:tintColor,marginBottom:isSelected?6:0 }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default MMTTab

const styles = StyleSheet.create({
    tabContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop:6,
        paddingBottom:2

    }


})