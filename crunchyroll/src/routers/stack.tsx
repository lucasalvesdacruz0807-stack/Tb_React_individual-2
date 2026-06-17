import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ParametrosRotasStack } from './navigation';
import { Login } from '../pages/login';
import { Home } from '../pages/home';

const Stack = createNativeStackNavigator<ParametrosRotasStack>();

export const StackRouters = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StackLogin" component={Login} />
      <Stack.Screen name="StackHome" component={Home} />
    </Stack.Navigator>
  );
};