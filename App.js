import React from 'react';
import {View, Text, StyleSheet, BackHandler} from 'react-native';
import LocalAuthentication from 'rn-local-authentication';
export default function App() {
  React.useEffect(() => {
    authentication();
  });

  const authentication = async () => {
    await LocalAuthentication.authenticateAsync({
      title: 'Unlock Google Pay',
      reason: '',
      description:
        'Unlock your screen with PIN, pattern, password, face or fingerprint',
      fallbackEnabled: true,
      fallbackToPinCodeAction: true,
      cancelTitle: 'cancel',
      reuseDuration: 300,
    })
      .then(res => {
        if (res.success) {
          console.log('Authentication Success');
        } else {
          BackHandler.exitApp();
        }
      })
      .catch(err => console.log(err));
  };
  const status = async () => {
    let x = await LocalAuthentication.getBiometryStatusAsync();
    console.log(x);
  };
  return (
    <View style={styles.container}>
      <Text>BIOMETRIC AUTHORIZATION</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
