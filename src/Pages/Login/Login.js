import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import AuthErrorMessageParser from 'src/Utils/authErrorMessageParser';
import Button from 'src/Components/Button';
import Input from 'src/Components/Input';

import Styles from './Login.style';

const Login = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);
  const handleSignupPage = () => {
    navigation.navigate('SignupPage');
  };
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSignin = async ({email, password}) => {
    if (!email && !password) {
      showMessage({
        message: 'Bilgiler boş bırakılamaz!',
        type: 'danger',
      });
    } else {
      try {
        setLoading(true);
        await auth().signInWithEmailAndPassword(email, password);
        showMessage({
          message: 'Giriş Başarılı!',
          type: 'success',
          duration: 1000,
        });
        navigation.navigate('RoomsPage');
      } catch (error) {
        showMessage({
          message: AuthErrorMessageParser(error.code),
          type: 'warning',
        });
        setLoading(false);
      }
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.headerContainer}>
        <Text style={Styles.title}>CodeTalks</Text>
      </View>
      <Formik initialValues={initialValues} onSubmit={handleSignin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={Styles.formContainer}>
            <Input
              value={values.email}
              onChange={handleChange('email')}
              placeholder="e-postanızı giriniz..."
            />
            <Input
              value={values.password}
              onChange={handleChange('password')}
              placeholder="parolanızı giriniz..."
              isSecure={true}
            />
            <View style={Styles.buttonContainer}>
              <Button
                text="Giriş Yap"
                onPress={handleSubmit}
                isLoading={loading}
              />
              <Button
                text="Kayıt Ol"
                theme="secondary"
                onPress={handleSignupPage}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
