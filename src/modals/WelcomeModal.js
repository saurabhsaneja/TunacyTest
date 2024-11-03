//react components
import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { Colors } from '../global/Index';
import { getFont, welcomeText } from '../helpers';
import MyButton from '../components/MyButton';

const WelcomeModal = ({ visible, setVisibility, welcomeTextModalType, openWelcome2, setModalTextType }) => {
  const [isCookiesEnabled, setIsCookiesEnabled] = useState(false);
  const [isOptCookiesEnabled, setIsOptCookiesEnabled] = useState(false);
  const toggleCookiesSwitch = () => setIsCookiesEnabled(previousState => !previousState);
  const toggleOptCookiesSwitch = () => setIsOptCookiesEnabled(previousState => !previousState);
  //function : modal function
  const closeModal = () => {
    setVisibility(false);
  };

  const MySwitch = () => {
    return (
      <TouchableWithoutFeedback onPress={toggleCookiesSwitch} >
        <Image source={!isCookiesEnabled ? require('../assets/images/switch-off.jpeg') : require('../assets/images/switch-on.jpeg')} />
      </TouchableWithoutFeedback>
    )
  }
  const MySwitch2 = () => {
    return (
      <TouchableWithoutFeedback onPress={toggleOptCookiesSwitch} >
        <Image source={!isOptCookiesEnabled ? require('../assets/images/switch-off.jpeg') : require('../assets/images/switch-on.jpeg')} />
      </TouchableWithoutFeedback>
    )
  }

  //UI
  return (
    <Modal
      visible={visible}
      onRequestClose={closeModal}
      animationType="fade"
      transparent>
      <View style={styles.container}>
        <TouchableOpacity style={styles.blurView} onPress={closeModal} />
        <View style={styles.mainView}>
          <TouchableOpacity onPress={closeModal} style={styles.cross}>
            <Image source={require('../assets/images/cross.jpeg')} />
          </TouchableOpacity>
          <View style={styles.line} />
          <View style={[styles.switchContainer, { marginTop: 10 }]} >
            <View style={{ maxWidth: '80%' }} >
              <Text style={styles.title}>{welcomeText['cookies']?.title}</Text>
              <Text style={styles.subTitle}>{welcomeText['cookies']?.subTitle}</Text>
            </View>
            <MySwitch />
          </View>
          <Text style={styles.text}>{welcomeText['cookies']?.text}</Text>
          <TouchableOpacity onPress={() => { openWelcome2(); setModalTextType('cookies') }} style={styles.readMoreView}>
            <Text style={styles.readMore}>Devamını Oku</Text>
            <Image source={require('../assets/images/right.jpeg')} />
          </TouchableOpacity>

          <View style={[styles.switchContainer, { marginTop: 15 }]} >
            <View style={{ maxWidth: '80%' }} >
              <Text style={styles.title}>{welcomeText['optionalCookies']?.title}</Text>
              <Text style={styles.subTitle}>{welcomeText['optionalCookies']?.subTitle}</Text>
            </View>
            <MySwitch2 />
          </View>
          <Text style={styles.text}>{welcomeText['optionalCookies']?.text}</Text>
          <TouchableOpacity onPress={() => { openWelcome2(); setModalTextType('optionalCookies') }} style={styles.readMoreView}>
            <Text style={styles.readMore}>Devamını Oku</Text>
            <Image source={require('../assets/images/right.jpeg')} />
          </TouchableOpacity>
          <MyButton title='Hepsine İzin Ver' style={{ marginBottom: 10, marginTop: 20 }} onPress={closeModal} />
          <MyButton title='Seçime İzin ver' onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};
export default WelcomeModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  blurView: {
    flex: 1,
  },
  mainView: {
    padding: 20,
    // margin: 20,
    backgroundColor: Colors.WHITE,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  cross: {
    alignSelf: 'flex-end',
    borderBottomColor: '#DADADA',
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  line: {
    height: 1,
    backgroundColor: '#DADADA',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    fontFamily: getFont('SB'),
    color: Colors.BLACK
  },
  subTitle: {
    fontSize: 12,
    fontFamily: getFont('SB'),
    color: Colors.BLACK,
    marginBottom: 10
  },
  text: {
    fontSize: 12,
    fontFamily: getFont('R'),
    color: 'rgba(0,0,0,0.5)',
    lineHeight: 14.52
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  readMoreView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  readMore: {
    fontSize: 12,
    fontFamily: getFont('SM'),
    color: Colors.GREEN,
    marginRight: 5
  },

})