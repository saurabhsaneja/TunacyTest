import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../../components/MyButton'
import { Colors, MyIcon, ScreenNames } from '../../global/Index'
import { getFont } from '../../helpers'
import MyTextInput from '../../components/MyTextInput'

const Login = ({ navigation }) => {
  const { width, height } = useWindowDimensions()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const gotoSignUp = () => navigation.navigate(ScreenNames.SIGN_UP)
  const gotoOneTimePassword = () => navigation.navigate(ScreenNames.ONE_TIME_PASSWORD)
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} >
        <Text style={styles.title}>Giriş Yap</Text>
        <Image source={require('../../assets/images/logo.jpeg')} style={{ width: 79 / 357 * width, height: 104 / 812 * height, alignSelf: 'center', }} />

        <MyTextInput
          value={email}
          setValue={setEmail}
          placeholder='Email'
          icon={<Image
            source={require('../../assets/images/email.jpeg')}
            style={styles.iconStyle} />} style={{ marginBottom: 10 }} />
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
            <Image source={require('../../assets/images/fb.jpeg')} r />
          </View>
        </View>
        <Text style={styles.checkText}>Hesabınız yok mu? <TouchableOpacity onPress={gotoSignUp}><Text style={styles.underline}>Kayıt Ol</Text></TouchableOpacity></Text>
      </ScrollView>
    </View>
  )
}

export default Login

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
  }
})