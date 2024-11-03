import { ScrollView, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { getFont } from '../../helpers'
import MyButton from '../../components/MyButton'

const OneTimePassword = () => {
  const { width, height } = useWindowDimensions()
  const [otp, setOtp] = React.useState(['', '', '', '', '', '']);
  const inputs = React.useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically focus next input box if available
    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (text, index) => {
    if (text === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Text style={[styles.verify, { marginTop: height * 0.07 }]}>Hesabı Doğrula</Text>
        <Text style={[styles.enterCode, { marginBottom: 20 }]}>Size gelen 6 haneli kodu girin.</Text>
        <View style={styles.otpContainer}>
          {otp.map((_, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={({ nativeEvent }) =>
                nativeEvent.key === 'Backspace' ? handleBackspace('', index) : null
              }
              ref={(ref) => inputs.current[index] = ref}
              maxLength={1}
              placeholder='0'
              placeholderTextColor='rgba(0,0,0,0.5)'
              keyboardType="number-pad"
              value={otp[index]}
            />
          ))}
        </View>
        <Text style={[styles.enterCode, { marginTop: 10 }]}>Kodu tekrar gönder 03:14</Text>
        <MyButton title='Devam Et' style={{ marginTop: 35 }} />
      </ScrollView>
    </View>
  )
}

export default OneTimePassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.WHITE
  },
  verify: {
    fontSize: 16,
    color: Colors.BLACK,
    fontFamily: getFont('M'),
    textAlign: 'center'
  },
  enterCode: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.5)',
    fontFamily: getFont('R'),
    textAlign: 'center'
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%', // Adjust width as needed
    alignSelf: 'center',
  },
  otpInput: {
    width: 40,
    borderWidth: 1.5,
    borderColor: '#D0D5DD',
    borderRadius: 4,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: getFont('R'),
    color: Colors.BLACK,
  },
})