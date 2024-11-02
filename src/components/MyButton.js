import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../global/Index'
import { getFont } from '../helpers'

const MyButton = ({ title, onPress, isLight = false, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style, isLight ? styles.lightButton : null]}>
      <Text style={[styles.title, , isLight ? { color: Colors.GREEN } : null]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 10,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.GREEN,
  },
  lightButton: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GREEN,
    borderWidth: 1
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontFamily: getFont('M')
  },
})