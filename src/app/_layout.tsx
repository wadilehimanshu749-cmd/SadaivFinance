import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false, }}/>

      <Stack.Screen name="auth" options={{ headerShown: false,}} />

      <Stack.Screen name="(tabs)" options={{ headerShown: false, }}/>

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