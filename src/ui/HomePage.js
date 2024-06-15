import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LOGIN_SCREEN, screens } from '../common/constants'
const HomePage = ({navigation,route}) => {

    function renderItem(item) {
        function ClickItem() {
            navigation.navigate(item.item)
        }        
        return (
            <TouchableOpacity onPress={ClickItem}>
                <View style={styles.item}>
                    <Text style={[styles.text, { color: '#f23' }]}>{item.item}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data={screens}
                    renderItem={renderItem}
                    keyExtractor={(index, item) => index}
                />
            </View>
        </SafeAreaView>

    )
}

export default HomePage

const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#11f',
        borderStyle: 'solid',
        borderWidth: 5
    },
    text: {
        fontSize: 18
    }
})