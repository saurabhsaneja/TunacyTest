import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../../components/MyButton'
import { Colors, MyIcon, ScreenNames } from '../../global/Index'
import Checkbox from '../../components/Checkbox'
import { getFont } from '../../helpers'
import Terms from '../../modals/Terms'
import WelcomeModal from '../../modals/WelcomeModal'
import Welcome2Modal from '../../modals/Welcome2Modal'

//image is 190 by 251
//screen is 357 by 812
const Welcome = ({ navigation }) => {
  const { width, height } = useWindowDimensions()
  const [allowStoringPeronalInfo, setAllowStoringPeronalInfo] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showWelcomeModal, setShowWelcomeModal] = useState(true)
  const [showWelcome2Modal, setShowWelcome2Modal] = useState(false)
  const [textModalType, setModalTextType] = useState('')
  const [welcomeTextModalType, setWelcomeModalTextType] = useState('')

  const gotoLogin = () => navigation.navigate(ScreenNames.LOGIN)
  const gotoSignUp = () => navigation.navigate(ScreenNames.SIGN_UP)
  const openModal = () => setShowModal(true)

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} >
        <Image source={require('../../assets/images/logo.jpeg')} style={{ width: 190 / 357 * width, height: 251 / 812 * height, alignSelf: 'center', marginTop: height * 0.15 }} />
        <View style={{ marginTop: height * 0.15 }} >
          <MyButton title='Giriş Yap' onPress={gotoLogin} style={{ marginBottom: 10 }} />
          <MyButton title='Kayıt Ol' onPress={gotoSignUp} isLight />
          <View style={{ marginTop: 25 }} />
          <Checkbox value={allowStoringPeronalInfo} setValue={setAllowStoringPeronalInfo}
            text={<Text style={styles.checkText}>Supafo’nun e-posta adresimi ve adımı gizlilik politikasına uygun şekilde saklamasına izin
              veriyorum.</Text>}
          />
          <Checkbox value={acceptTerms} setValue={setAcceptTerms} text={
            <View style={styles.textRow}>
              <Text style={styles.checkText}></Text>

              <TouchableOpacity onPress={() => {
                openModal()
                setModalTextType('terms')
              }}>
                <Text style={styles.underline}>Şartlar & Koşullar</Text>
              </TouchableOpacity>

              <Text> ve </Text>
              <TouchableOpacity onPress={() => {
                openModal()
                setModalTextType('privacy')
              }}>
                <Text style={styles.underline}>Gizlilik Politikasını</Text></TouchableOpacity>
              <Text> kabul ediyorum.</Text>
            </View>
          }
          />
        </View>
      </ScrollView>
      <Terms visible={showModal} setVisibility={setShowModal} textModalType={textModalType} />
      <WelcomeModal visible={showWelcomeModal} setVisibility={setShowWelcomeModal} welcomeTextModalType={welcomeTextModalType} openWelcome2={() => {
        setShowWelcomeModal(false)
        setShowWelcome2Modal()
      }}
        setModalTextType={setModalTextType}
      />
      <Welcome2Modal visible={showWelcome2Modal} setVisibility={setShowWelcome2Modal} welcomeTextModalType={welcomeTextModalType} textModalType={textModalType} close2={() => setShowWelcomeModal(true)} />
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.WHITE
  },
  content: {
    // alignItems: 'center',
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  checkText: {
    color: Colors.BLACK,
    fontSize: 14,
    fontFamily: getFont('R'),
    marginLeft: 5,
  },
  underline: {
    textDecorationLine: 'underline',
    color: Colors.GREEN,
  }
})