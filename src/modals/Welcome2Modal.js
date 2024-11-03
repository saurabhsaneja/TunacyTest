//react components
import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../global/Index';
import { allText, getFont, welcomeReadMoreText } from '../helpers';

const Welcome2Modal = ({ visible, setVisibility, textModalType, close2 }) => {
  const { width, height } = useWindowDimensions()
  //function : modal function
  const closeModal = () => {
    setVisibility(false);
    close2()
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
        <View style={[styles.mainView, { paddingBottom: height * 0.55 }]}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={closeModal}>
              <Image source={require('../assets/images/arrow-left-blue.jpeg')} />
            </TouchableOpacity>
            <Text style={styles.title}>{welcomeReadMoreText[textModalType]?.title}</Text>
            <View />
          </View>
          <Text style={styles.text}>{welcomeReadMoreText[textModalType]?.text}</Text>
          {/* <Text style={styles.text}>Devamını Oku (Read More)</Text> */}
        </View>
      </View>
    </Modal>
  );
};
export default Welcome2Modal;

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
    fontSize: 16,
    fontFamily: getFont('SB'),
    color: Colors.BLACK
  },
  text: {
    fontSize: 12,
    fontFamily: getFont('R'),
    color: 'rgba(0,0,0,0.5)',
    lineHeight: 14.52
  },
})