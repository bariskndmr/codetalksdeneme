import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import AuthErrorMessageParser from 'src/Utils/authErrorMessageParser';
import Button from 'src/Components/Button';
import Input from 'src/Components/Input';

import Styles from './Signup.style';

const Signup = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);

  const handleLoginPage = () => {
    navigation.navigate('LoginPage');
  };
  const initialValues = {
    email: '',
    password: '',
    repassword: '',
  };

  const handleSignup = async ({email, password, repassword}) => {
    if (password !== repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor',
        type: 'danger',
      });
    } else {
      if (!email && !repassword) {
        showMessage({
          message: 'Bilgiler boş bırakılamaz!',
          type: 'danger',
        });
      } else {
        try {
          setLoading(true);
          await auth().createUserWithEmailAndPassword(email, repassword);
          navigation.navigate('LoginPage');
        } catch (error) {
          showMessage({
            message: AuthErrorMessageParser(error.code),
            type: 'warning',
          });
          setLoading(false);
        }
      }
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.headerContainer}>
        <Text style={Styles.title}>CodeTalks</Text>
      </View>
      <Formik initialValues={initialValues} onSubmit={handleSignup}>
        {({handleChange, handleSubmit, values}) => (
          <View style={Styles.formContainer}>
            <Input
              value={values.email}
              onChange={handleChange('email')}
              placeholder="e-postanızı giriniz.."
            />
            <Input
              value={values.password}
              onChange={handleChange('password')}
              placeholder="parolanızı giriniz.."
              isSecure={true}
            />
            <Input
              value={values.repassword}
              onChange={handleChange('repassword')}
              placeholder="parolanızı tekrar giriniz.."
              isSecure={true}
            />
            <View style={Styles.buttonContainer}>
              <Button
                text="Kayıt Ol"
                onPress={handleSubmit}
                isLoading={loading}
              />
              <Button
                text="Giriş Yap"
                theme="secondary"
                onPress={handleLoginPage}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Signup;
