import { View, Text } from 'react-native'
import React, { useEffect } from "react";
import { router, Stack } from 'expo-router'
import signup from './auth/signup';
import { Redirect } from 'expo-router';

export default function index() {
//  useEffect(() => {
//     router.replace("/(tabs)");
//   }, []);

//   return null;

return <Redirect href="/auth/signup" />;

}