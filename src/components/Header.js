import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getFont } from '../helpers'
import { Colors } from '../global/Index'
import { useNavigation } from '@react-navigation/native'

const Header = ({ }) => {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={{ flex: 1 }}>
        <Image source={require('../assets/images/arrow-left.jpeg')} />
      </TouchableOpacity>
      <Text style={styles.title}>Tek Seferlik Kod</Text>
      <View style={{ flex: 1 }} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    color: Colors.BLACK,
    fontFamily: getFont('M')
  }
})