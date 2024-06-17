import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { MotiView, SafeAreaView, useDynamicAnimation } from 'moti'
import { MMTGrey, MMTPrimaryColor } from '../constants'
import { StatusBar } from 'expo-status-bar'

const TabHome = () => {
  const animation = useDynamicAnimation(
    () => { return ({ width: '100%', height: 150 }) }
  )
  const [scrollyValue, setscrollyValue] = useState()
  const [selectedTab, setSelectedTab] = useState(0)
  const scrollRef = useRef()
  const tabRef = useRef()
  const tabContentRef = useRef()
  useEffect(() => {
    tabContentRef.current?.scrollToIndex({index: selectedTab, animated: true})
  }, [selectedTab])

  const Panel2ItemList = [
    { id: 1, title: "Airport Cabs", imageIcon: require('../../../../assets/cab.png') },
    { id: 2, title: "Home Stays", imageIcon: require('../../../../assets/buildings.png') },
    { id: 3, title: "OutStations Cabs", imageIcon: require('../../../../assets/cab.png') },
    { id: 4, title: "Activities & Tours Cabs", imageIcon: require('../../../../assets/activity.png') },
    { id: 5, title: "Gift Cards", imageIcon: require('../../../../assets/gift.png') },
    { id: 6, title: "Near by Gateways", imageIcon: require('../../../../assets/gateways.png') },
    { id: 7, title: "Train PNR status", imageIcon: require('../../../../assets/pnr.png') },
    { id: 8, title: "Forex", imageIcon: require('../../../../assets/forex.png') },
  ]

  const Tablist = [
    "Trending",
    "Flights",
    "Hotels",
    "Homestays",
    "Train",
    "Holiday",
    "Cab",
    "Bus",
    "Activities"
  ]
  const offerImages = [
    "https://img.freepik.com/free-vector/travel-sale-landing-page-with-image_23-2148676714.jpg",
    "https://img.freepik.com/free-vector/travel-sale-landing-page-with-image_23-2148676714.jpg",
    "https://img.freepik.com/free-vector/travel-sale-landing-page-with-image_23-2148676714.jpg",
    "https://img.freepik.com/free-vector/travel-sale-landing-page-with-image_23-2148676714.jpg",
    "https://img.freepik.com/free-vector/travel-sale-landing-page-with-image_23-2148676714.jpg",
    "https://img.freepik.com/free-vector/travel-sale-landing-page-with-image_23-2148676714.jpg",
    "https://img.freepik.com/free-vector/travel-sale-landing-page-with-image_23-2148676714.jpg",
    "https://img.freepik.com/free-vector/travel-sale-landing-page-with-image_23-2148676714.jpg",
    "https://img.freepik.com/free-vector/travel-sale-landing-page-with-image_23-2148676714.jpg",
  ]

  const Panel1Icon = ({ title, imageIcon, onClick, tintColor }) => {
    return (
      <TouchableOpacity onPress={onClick}>
        <View style={{ flexDirection: 'column', paddingStart: 8, paddingEnd: 8, paddingBottom: 8, width: 80 }}>
          <View style={{ height: 45, width: 45, padding: 6, marginTop: -12, borderRadius: 40, backgroundColor: tintColor, alignContent: 'center', alignSelf: 'center' }}>
            <Image source={imageIcon} style={{ height: '80%', width: '80%', alignSelf: 'center' }} />
          </View>
          <Text style={{ marginTop: 6, fontSize: 13, alignSelf: 'center', fontWeight: 400 }}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const PanelItem = ({ title, imageIcon, onClick }) => {
    return (
      <TouchableOpacity onPress={onClick} >
        <View style={{ flexDirection: 'column', paddingStart: 8, paddingEnd: 8, paddingBottom: 8, width: 80, alignContent: 'center', alignItems: 'center' }}>
          <Image source={imageIcon} style={{ height: 24, width: 24, alignSelf: 'center' }} />
          <Text style={{ marginTop: 6, fontSize: 12, alignSelf: 'center', fontWeight: 400, color: '#000' }}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style='light' />
      <ScrollView
        ref={scrollRef}
        stickyHeaderIndices={[0]}
        onScroll={e => {
          const y = e.nativeEvent.contentOffset.y
          setscrollyValue(y)
          if (y > 50) {
            animation.animateTo({ width: '100%', height: 48 })
          } else {
            animation.animateTo({ width: '100%', height: 150 })
          }
        }}
      >
        <View style={{ width: '100%' }}>
          <MotiView state={animation} transition={{ type: 'timing', duration: '500' }}>
            <Image style={{ height: '100%', width: '100%', position: 'absolute' }} blurRadius={scrollyValue > 30 ? 8 : 0} source={require('../../../../assets/sunraise.jpg')} />
          </MotiView>
          <View style={styles.toolbar}>
            <Image style={{ marginStart: 8, width: 24, height: 24, alignItems: 'center' }} source={require('../../../../assets/ic_menu.png')} tintColor={MMTGrey} />
            <Image style={{ width: 24, height: 24, marginStart: 8, alignItems: 'center' }} source={require('../../../../assets/mmt.jpg')} />
          </View>
          <TouchableOpacity disabled={true} style={[styles.Panel1, styles.Card]}>
            <Panel1Icon title='Flights' imageIcon={require('../../../../assets/plane.png')} tintColor={MMTPrimaryColor} />
            <View style={styles.devider} />

            <Panel1Icon title='Hotels' imageIcon={require('../../../../assets/hotel.png')} tintColor='#f00a' />
            <View style={styles.devider} />

            <Panel1Icon title='Buses' imageIcon={require('../../../../assets/bus.png')} tintColor='#B6AC04' />
            <View style={styles.devider} />

            <Panel1Icon title='Holidays' imageIcon={require('../../../../assets/holidays.png')} tintColor='#04CFFA' />
          </TouchableOpacity>
          <TouchableOpacity disabled={false} style={[styles.Card, styles.Panel2]}>
            <View style={{ flexDirection: 'row', width: '100%', padding: 6, justifyContent: 'space-between' }}>
              {
                Panel2ItemList.map
                  ((item, index) => {
                    if (index <= 3) {
                      return (
                        <PanelItem title={item.title} imageIcon={item.imageIcon} />
                      )
                    }
                  })
              }
            </View>

            <View style={{ flexDirection: 'row', width: '100%', padding: 6, justifyContent: 'space-between' }}>
              {
                Panel2ItemList.map
                  ((item, index) => {
                    if (index >= 4) {
                      return (
                        <PanelItem title={item.title} imageIcon={item.imageIcon} />
                      )
                    }
                  })
              }
            </View>
          </TouchableOpacity>
          <View style={styles.offerheader}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../../../assets/offer.png')} style={{ height: 18, width: 18 }} />
              <Text style={[styles.textOffer, { marginStart: 8 }]} >Offers</Text>
            </View>
            <Text style={styles.textOffer} >View All</Text>
          </View>
          <FlatList
            ref={tabRef}
            initialScrollIndex={selectedTab}
            style={{ marginStart: 8, marginTop: 8, marginEnd: 4 }}
            data={Tablist}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity onPress={() => {
                  console.log(index)
                  setSelectedTab(index)
                }}>
                  <Text style={{
                    padding: 6,
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor: '#000',
                    marginStart: 6,
                    fontWeight: 400,
                    fontSize: 11,
                    color: selectedTab === index ? '#fff' : '#000',
                    backgroundColor: selectedTab === index ? MMTPrimaryColor : '#f7f7f7',
                  }}>
                    {item}
                  </Text></TouchableOpacity>)
            }}

            keyExtractor={({ item, index }) => index}
          />
          <FlatList
            ref={tabContentRef}
            data={offerImages}
            style={{ marginStart: 8, height: 200, marginTop: 8 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={(item) => {
              return (
                <Image style={{ width: 150, height: 90, marginEnd: 8, marginStart: 8, borderRadius: 8, marginTop: 8 }} source={{ uri: item.item }} />
              )
            }}
            keyExtractor={({ item, index }) => index}
            onScroll={(event)=>{
              const ind=(event.nativeEvent.contentOffset.x/150).toFixed(0)
              console.log(ind)
              setSelectedTab(ind)
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TabHome

const styles = StyleSheet.create({
  toolbar:
  {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    height: 40,
    position: 'absolute',
    padding: 2
  },
  Card: {
    elevation: 8,
    borderRadius: 8,
    shadowColor: '#000',
    backgroundColor: '#fff',
  },
  Panel1: {
    marginTop: -40,
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    height: 70,
  },
  Panel2: {
    flexDirection: 'column',
    width: '95%',
    alignSelf: 'center',
    height: 160,
    marginTop: 18,
    justifyContent: 'space-around',
    marginBottom: 18
  },
  devider: {
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 8,
    width: 1,
    height: '85%',
    backgroundColor: MMTGrey
  },
  offerheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 12,
    marginEnd: 8
  },
  textOffer: {
    fontWeight: 'bold',
    color: '#4D0156'
  }
})