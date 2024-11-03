import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Colors, MyIcon } from '../global/Index'

const Checkbox = ({ value, setValue, text }) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        onPress={() => setValue(!value)}>
        {value ? (
          <MyIcon.Ionicons name="checkbox" size={30} color={Colors.GREEN} />
        ) : (
          <MyIcon.Ionicons name="square-outline" size={30} color={Colors.GREEN} />
        )}
      </TouchableOpacity>
      {text}
    </View>
  )
}

export default Checkbox

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})