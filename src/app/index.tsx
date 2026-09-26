import { View, Text } from 'react-native'
import React, { useEffect } from "react";
import { router, Stack } from 'expo-router'
import { Redirect } from 'expo-router';

export default function index() {
//  useEffect(() => {
//     router.replace("/auth/signup");
//   }, []);

//   return null;

return <Redirect href="/(tabs)" />;

}