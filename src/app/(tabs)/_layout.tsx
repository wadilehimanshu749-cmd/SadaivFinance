import React from "react";
import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";

const GREEN = "#485d3d";
const LIGHT_GREEN = "#EAF1E7";

export default function TabRoot() {
  return (
    <Tabs screenOptions={{ headerShown: false,tabBarActiveTintColor: GREEN, tabBarInactiveTintColor: "#8A9188", tabBarStyle: styles.tabBar, tabBarLabelStyle: styles.tabLabel, tabBarItemStyle: styles.tabItem, tabBarHideOnKeyboard: true,}}>

      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color, focused }) => (
            <View style={[ styles.iconContainer, focused && styles.activeIconContainer,]}>
              <FontAwesome name="home" size={21} color={color}/>
            </View> ), }}/>

      <Tabs.Screen name="Wealth"
       options={{title: "Wealth", tabBarIcon: ({ color, focused }) => (
            <View style={[ styles.iconContainer, focused && styles.activeIconContainer, ]}>
            <AntDesign name="stock" size={21} color={color} />
            </View>), }} />

      <Tabs.Screen name="ScanandPay" 
      options={{title: "Scan & Pay",tabBarIcon: () => (
            <View style={styles.scanButton}>
              <AntDesign name="scan" size={25} color="#FFFFFF" />
            </View>),}}/>

      <Tabs.Screen name="Bills"
        options={{ title: "Bills",tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer, ]}>
              <FontAwesome6 name="money-bills" iconStyle="solid" size={21} color={color} />
            </View>),}} />

      <Tabs.Screen name="History"
        options={{ title: "History",tabBarIcon: ({ color, focused }) => (
            <View style={[ styles.iconContainer, focused && styles.activeIconContainer, ]}>
              <AntDesign name="history"size={21} color={color}/>
            </View> ), }}/>

    </Tabs>
  );
}

const styles = StyleSheet.create({


  tabBar: {
    position: "absolute",
    height: 68,
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    borderTopWidth: 0,
    paddingTop: 6,
    paddingBottom: 8,
    elevation: 8,
  },

  tabItem: {
    height: 58,
    justifyContent: "center",
    alignItems: "center",
  },


  tabLabel: {
    fontSize: 10,
    fontWeight: "600",
    marginTop: 2,
    textTransform: "none",
  },

  iconContainer: {
    width: 34,
    height: 34,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  activeIconContainer: {
    backgroundColor: LIGHT_GREEN,
  },

  scanButton: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: GREEN,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -35,
    borderWidth: 5,
    borderColor: "#F5F7F3",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 7,
    elevation: 8,
  },
});