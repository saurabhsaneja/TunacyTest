import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors, MyIcon } from '../global/Index'
import { getFont } from '../helpers'

const MyTextInput = ({ value, setValue, placeholder, title, myRef, icon, style, hideUnhide = false, secureTextEntry = false, inLeftStyle, keyboardType, maxLength, centerTextInput = false }) => {
  const [isHidden, setIsHidden] = useState(secureTextEntry)
  return (
    <View style={[style]} >
      <Text style={styles.title}>{title || placeholder}</Text>
      <View style={[styles.inputContainer, centerTextInput ? { justifyContent: 'center' } : null]}>
        <View style={[styles.inputLeftContainer]}>
          {icon}
          <TextInput
            ref={myRef}
            value={value}
            secureTextEntry={isHidden}
            onChangeText={setValue}
            placeholder={placeholder}
            keyboardType={keyboardType}
            maxLength={maxLength}
            placeholderTextColor='rgba(0,0,0,0.5)'
            style={[styles.input, inLeftStyle]}
          />
        </View>
        {hideUnhide ?
          <TouchableOpacity onPress={() => setIsHidden(!isHidden)} >
            {isHidden ?
              <MyIcon.FontAwesome5
                name="eye"
                size={20}
                style={{
                  transform: [
                    {
                      scaleX: -1,
                    },
                  ],
                }}
                color={Colors.LIGHT_GREY}
              />
              :
              <MyIcon.FontAwesome5
                name="eye-slash"
                size={20}
                style={{
                  transform: [
                    {
                      scaleX: -1,
                    },
                  ],
                }}
                color={Colors.LIGHT_GREY}
              />
            }
          </TouchableOpacity>
          : null}
      </View>
    </View>
  )
}

export default MyTextInput

const styles = StyleSheet.create({
  inputContainer: {
    // height: 36,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GREY,
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    paddingHorizontal: 10
  },
  inputLeftContainer: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
  },
  input: {
    // height: 36,
    fontSize: 12,
    fontFamily: getFont('R'),
    color: Colors.BLACK,
    width: '75%'
  },
  title: {
    fontSize: 14,
    fontFamily: getFont('R'),
    color: Colors.BLACK,
    marginBottom: 5
  },
})