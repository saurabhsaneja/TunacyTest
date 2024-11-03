//react components
import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../global/Index';
import { allText, getFont } from '../helpers';
import MyButton from '../components/MyButton';

const TermsConsent = ({ visible, setVisibility }) => {
  const { width, height } = useWindowDimensions()
  //function : modal function
  const closeModal = () => {
    setVisibility(false);
  };

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
          <Image source={require('../assets/images/logo.jpeg')} style={{ width: 47 / 357 * width, height: 61 / 812 * height, alignSelf: 'center', marginBottom: 10 }} />
          <Text style={styles.title}>Şartlar ve Gizlilik Onayı</Text>
          <Text style={styles.text}>Devam etmeden önce, Şartlar ve Koşullar ile Gizlilik Politikası’nı kabul ettiğinizden emin olun. Bu, size en iyi deneyimi sunmamız için gereklidir.</Text>
          <MyButton title='Anladım' onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};
export default TermsConsent;

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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  title: {
    fontSize: 14,
    fontFamily: getFont('M'),
    color: Colors.BLACK,
    textAlign: 'center',
    marginBottom: 20
  },
  text: {
    fontSize: 12,
    fontFamily: getFont('R'),
    color: 'rgba(0,0,0,1)',
    lineHeight: 14.52,
    textAlign: 'center',
    marginBottom: 20
  },
})