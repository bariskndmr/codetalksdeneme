import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

import Login from 'src/Pages/Login';
import Messages from './Pages/Messages';
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
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => setUserSession(!!user));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="RoomsPage"
              component={Rooms}
              options={{
                headerBackVisible: false,
                headerTitle: 'Odalar',
                headerTintColor: '#ff9f3f',
              }}
            />
            <Stack.Screen
              name="MessagesPage"
              component={Messages}
              options={{title: 'Mesajlar', headerTintColor: '#ff9f3f'}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
