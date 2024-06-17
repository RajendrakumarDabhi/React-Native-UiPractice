import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MMTBlack, MMTGrey, MMTPrimaryColor } from './constants'
import TabHome from '../makemytrip/tabs/TabHome'
import TabMyTrip from '../makemytrip/tabs/TabMyTrip'
import TabHoliday from '../makemytrip/tabs/TabHoliday'
import TabMyHost from '../makemytrip/tabs/TabMyHost'
import TabWheretoG from '../makemytrip/tabs/TabWheretoG'
import MMTTab from './MMTTab'

const MMTHomeScreen = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

                {
                    selectedTab === 0 ? (<TabHome/>):
                    selectedTab === 1 ? (<TabMyTrip/>):
                    selectedTab === 2 ? (<TabWheretoG/>):
                    selectedTab === 3 ? (<TabHoliday/>):
                    selectedTab === 4 ? (<TabMyHost/>):
                    (<TabHome/>)
                }
                <View style={styles.bottombar}>
                    <MMTTab imageUrl={require('../../../assets/social.png')} tintColor={selectedTab==0?MMTPrimaryColor:'#fff'} title={'Home'} isSelected={selectedTab==0} onClick={() => { setSelectedTab(0)  }} />
                    <MMTTab imageUrl={require('../../../assets/suitcase.png')} tintColor={selectedTab==1?MMTPrimaryColor:'#fff'} title={'My Trips'} isSelected={selectedTab==1}onClick={() => { setSelectedTab(1) }} />
                    <MMTTab imageUrl={require('../../../assets/wheretg.png')} tintColor={selectedTab==2?MMTPrimaryColor:'#fff'} title={'Where 2 Go'} isSelected={selectedTab==2}onClick={() => { setSelectedTab(2) }} />
                    <MMTTab imageUrl={require('../../../assets/holidays.png')} tintColor={selectedTab==3?MMTPrimaryColor:'#fff'} title={'Holiday'} isSelected={selectedTab==3}onClick={() => { setSelectedTab(3) }} />
                    <MMTTab imageUrl={require('../../../assets/home.png')} tintColor={selectedTab==4?MMTPrimaryColor:'#fff'} title={'Host'} isSelected={selectedTab==4}onClick={() => {
                        setSelectedTab(4)
                    }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MMTHomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bottombar: {
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        bottom: 0,
        height: 48,
        paddingStart: 12,
        paddingEnd: 12,
        backgroundColor: MMTBlack,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom:4
    },

})