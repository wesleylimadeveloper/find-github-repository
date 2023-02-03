import React from 'react';
import { StatusBar } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications'

import { Routes } from './src/routes';

export default function App() {
  return (
    <ToastProvider>
      <StatusBar 
        backgroundColor="#000000" 
        barStyle="light-content"
      />
      <Routes />
    </ToastProvider>
  );
}