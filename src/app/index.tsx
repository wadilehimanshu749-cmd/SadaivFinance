import { View, Text } from 'react-native'
import React, { useEffect } from "react";
import { router, Stack } from 'expo-router'
import signup from './auth/signup';

export default function index() {
 useEffect(() => {
    router.replace("/(tabs)");
  }, []);

  return null;

}