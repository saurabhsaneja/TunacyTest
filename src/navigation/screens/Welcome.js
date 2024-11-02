import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
})