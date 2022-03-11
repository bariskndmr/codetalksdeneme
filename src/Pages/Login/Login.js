import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

import Button from 'src/Components/Button';
import Input from 'src/Components/Input';

import Styles from './Login.style';

const Login = ({navigation}) => {
  const handleSignupPage = () => {
    navigation.navigate('SignupPage');
  };
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSignin = ({email, password}) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('RoomsPage');
      })
      .catch(error => console.log(error));
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
              <Button text="Giriş Yap" onPress={handleSubmit} />
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
