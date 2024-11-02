import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Colors, MyIcon } from '../global/Index'

const Checkbox = ({ value, setValue, text }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => setValue(!value)}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
      <View style={styles.view}>
        {value ? (
          <MyIcon.Ionicons name="checkbox" size={30} color={Colors.GREEN} />
        ) : (
          <MyIcon.Ionicons name="square-outline" size={30} color={Colors.GREEN} />
        )}
        {text}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Checkbox

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    // alignItems: 'center'
  }
})