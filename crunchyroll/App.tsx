import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackRouters } from '../crunchyroll/src/routers/stack';

export default function App() {
  return (
    <NavigationContainer>
      <StackRouters />
    </NavigationContainer>
  );
}