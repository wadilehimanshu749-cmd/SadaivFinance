import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useFonts } from "expo-font";

export default function _layout() {
  const [fontsLoaded] = useFonts({
    Astera: require("@/assets/fonts/AsteraCastyDemoRegular-Jp00E.ttf"),
    Parisian: require("@/assets/fonts/parisian.otf"),
    Chocolada: require("@/assets/fonts/Chocolada.ttf"),
    Duitech: require('@/assets/fonts/DuitechTrial.otf'),
    Nunito: require('@/assets/fonts/Nunito-Regular.otf'),
    NunitoBold: require('@/assets/fonts/Nunito-Bold.otf'),
    NunitoLight: require('@/assets/fonts/Nunito-Light.otf'),
    PlusJakartaSansRegular: require('@/assets/fonts/PlusJakartaSans-Regular.ttf'),
    PlusJakartaSansBold: require('@/assets/fonts/PlusJakartaSans-Bold.ttf'),
    InterRegular: require('@/assets/fonts/Inter_18pt-Regular.ttf'),
    InterSemiBold: require('@/assets/fonts/Inter_18pt-SemiBold.ttf'),
    InterBold: require('@/assets/fonts/Inter_18pt-Bold.ttf'),
    ManropeRegular: require('@/assets/fonts/Manrope-Regular.ttf'),
    ManropeBold: require('@/assets/fonts/Manrope-Bold.ttf'),
    ManropeExtraBold: require('@/assets/fonts/Manrope-ExtraBold.ttf'),
    SoraRegular: require('@/assets/fonts/Sora-Regular.ttf'),
    SoraBold: require('@/assets/fonts/Sora-Bold.ttf'),
    SoraExtraBold: require('@/assets/fonts/Sora-ExtraBold.ttf'),
    SoraSemibold: require('@/assets/fonts/Sora-SemiBold.ttf'),
    DMSanMedium: require('@/assets/fonts/DMSans_18pt-Medium.ttf'),
    DMSanRegular: require('@/assets/fonts/DMSans_18pt-Regular.ttf'),
    DMSanSemibold: require('@/assets/fonts/DMSans_18pt-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>

      <Stack.Screen name="(auth)" options={{headerShown: false}}/>

      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>

      <Stack.Screen name='self_transfer' options={{title:'Self Transfer',headerTitleAlign: 'center'}}  />
      <Stack.Screen name='utility_bills' options={{title:'Utility Bills',headerTitleAlign: 'center'}}  />
       <Stack.Screen name='send_money' options={{title:'Send Money',headerTitleAlign: 'center'}}  />
      <Stack.Screen name='mobile_recharge' options={{title:'Mobile Recharge',headerTitleAlign: 'center'}}  />
      <Stack.Screen name='upi' options={{title:'Send To UPI',headerTitleAlign: 'center'}}  />
      <Stack.Screen name='credit_card_bill' options={{title:'Credit Card Bills',headerTitleAlign: 'center'}}  />
      <Stack.Screen name='fasttag_payment' options={{title:'FASTag Payments',headerTitleAlign: 'center'}}  />
      <Stack.Screen name='fasttag' options={{title:'FASTag Recharge',headerTitleAlign: 'center'}}  />
      <Stack.Screen name='to_mobile' options={{title:'Mobile Recharge',headerTitleAlign: 'center'}}  />



    </Stack>
  )
}