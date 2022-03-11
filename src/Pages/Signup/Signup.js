import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

import Button from 'src/Components/Button';
import Input from 'src/Components/Input';

import Styles from './Signup.style';

const Signup = ({navigation}) => {
  const handleLoginPage = () => {
    navigation.navigate('LoginPage');
  };
  const initialValues = {
    email: '',
    password: '',
    repassword: '',
  };

  const handleSignup = ({email, repassword}) => {
    auth()
      .createUserWithEmailAndPassword(email, repassword)
      .then(() => {
        console.log('Başarılı');
      })
      .catch(error => console.log(error));
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
              <Button text="Kayıt Ol" onPress={handleSubmit} />
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
