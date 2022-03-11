import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from 'src/Pages/Login';
import Rooms from './Pages/Rooms';
import Signup from './Pages/Signup';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginPage"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignupPage"
        component={Signup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RoomsPage"
          component={Rooms}
          options={{
            headerBackVisible: false,
            headerTitle: 'Odalar',
            headerTintColor: '#ff9f3f',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
