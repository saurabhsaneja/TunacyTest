import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../../components/MyButton'
import { Colors, MyIcon, ScreenNames } from '../../global/Index'
import { getFont } from '../../helpers'
import MyTextInput from '../../components/MyTextInput'

const SignUp = ({ navigation }) => {
  const { width, height } = useWindowDimensions()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [country, setCountry] = useState('')
  const [number, setNumber] = useState('')

  const gotoLogin = () => navigation.navigate(ScreenNames.LOGIN)
  const gotoOneTimePassword = () => navigation.navigate(ScreenNames.ONE_TIME_PASSWORD)
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} >
        <Text style={styles.title}>Giriş Yap</Text>
        <Image source={require('../../assets/images/logo.jpeg')} style={{ width: 79 / 357 * width, height: 104 / 812 * height, alignSelf: 'center', }} />

        <MyTextInput
          value={name}
          setValue={setName}
          placeholder='Ad Soyad'
          icon={<Image
            source={require('../../assets/images/email.jpeg')}
            style={styles.iconStyle} />} style={{ marginBottom: 10 }} />
        <MyTextInput
          value={email}
          setValue={setEmail}
          placeholder='Email'
          icon={<Image
            source={require('../../assets/images/email.jpeg')}
            style={styles.iconStyle} />} style={{ marginBottom: 10 }} />
        <View style={styles.phoneNumberView}>
          <MyTextInput
            value={country}
            setValue={setCountry}
            title='Ülke'
            placeholder='+90'
            keyboardType='number-pad'
            centerTextInput
            style={{ flex: 1 }}
            />
          <View style={{ flex: 0.18 }} />
          <MyTextInput
            value={number}
            setValue={setNumber}
            title='Telefon Numarası'
            placeholder='123 455 67 88'
            keyboardType='number-pad'
            maxLength={10}
            style={{ flex: 2.5 }}
          />
        </View>
        <MyTextInput
          value={password}
          setValue={setPassword}
          placeholder='Şifre'
          secureTextEntry
          hideUnhide
          icon={<Image
            source={require('../../assets/images/email.jpeg')}
            style={styles.iconStyle}
          />}
        />
        <Text style={styles.forgot}>Şifreni mi unuttun?</Text>
        <MyButton title='Giriş Yap' onPress={gotoOneTimePassword} style={{ marginTop: 30 }} />
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.or}>VEYA</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.socialContainer}>
          <View style={styles.socialBox}>
            <Image source={require('../../assets/images/google.jpeg')} />
          </View>
          <View style={styles.socialBox}>
            <Image source={require('../../assets/images/apple.jpeg')} />
          </View>
          <View style={styles.socialBox}>
            <Image source={require('../../assets/images/fb.jpeg')} />
          </View>
        </View>
        <Text style={styles.checkText}>Hesabınız var mı? <TouchableOpacity onPress={gotoLogin}><Text style={styles.underline}>Giriş Yap</Text></TouchableOpacity></Text>
      </ScrollView>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.WHITE
  },
  content: {
    // alignItems: 'center',
  },
  title: {
    color: Colors.BLACK,
    fontSize: 16,
    fontFamily: getFont('M'),
    textAlign: 'center',
    marginVertical: 20
  },
  iconStyle: {
    marginRight: 5
  },
  forgot: {
    color: Colors.GREEN,
    fontSize: 12,
    fontFamily: getFont('M'),
    textAlign: 'right',
    marginTop: 5
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
    marginTop: 20
  },
  line: {
    backgroundColor: '#979797',
    height: 1,
    width: '30%'
  },
  or: {
    fontSize: 10,
    fontFamily: getFont('M'),
    color: '#979797',
    marginHorizontal: 10
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20
  },
  socialBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
    borderColor: '#D0D5DD',
    borderWidth: 1,
    marginHorizontal: 8
  },
  checkText: {
    color: Colors.BLACK,
    fontsize: 14,
    fontFamily: getFont('R'),
    marginTop: 10,
    flexWrap: 'wrap',
    textAlign: 'center'
  },
  underline: {
    textDecorationLine: 'underline',
    color: Colors.GREEN,
  },
  phoneNumberView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})