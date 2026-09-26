import React from "react";
import { View, StyleSheet, TouchableOpacity, Animated, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

interface HeaderProps {
  scrollY: Animated.Value;
}

export default function Header({ scrollY }: HeaderProps) {
  const progress = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const reverseProgress = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.fixedContainer} pointerEvents="box-none">
      <Animated.View style={[  styles.whiteBg, { opacity: progress }, ]}/>

      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <View style={styles.header}>
          
          <View style={styles.leftContainer}>

            <Animated.View style={[styles.layerRow, { opacity: reverseProgress }]}>
              <View style={styles.logoBox}>
                <Image
                  source={require("@/assets/images/comp_logo.png")}
                  style={[styles.imagebox, { tintColor: "#DCEFDC" }]}
                />
              </View>
              <Animated.Text style={[styles.logo, { color: "#FFFFFF" }]}>
                S A D A I V
              </Animated.Text>
              <Animated.Text style={[styles.subLogo, { color: "#D0DCE5" }]}>
                Finance
              </Animated.Text>
            </Animated.View>

            <Animated.View style={[styles.layerRow, { opacity: progress }]}>
              <View style={styles.logoBox}>
                <Image
                  source={require("@/assets/images/comp_logo.png")}
                  style={[styles.imagebox,]}
                />
              </View>
              <Animated.Text style={[styles.logo, { color: "#070808" }]}>
                S A D A I V
              </Animated.Text>
              <Animated.Text style={[styles.subLogo, { color: "#7C847B" }]}>
                Finance
              </Animated.Text>
            </Animated.View>
          </View>

          <View style={styles.rightSection}>

            <TouchableOpacity style={styles.iconBtn} onPress={() => console.log("Notification clicked")} >

              <Animated.View style={[styles.centeredIcon, { opacity: reverseProgress }]}>
                <Ionicons name="notifications-outline" size={23} color="#DCEFDC" />
              </Animated.View>

              <Animated.View style={[styles.centeredIcon, { opacity: progress }]}>
                <Ionicons name="notifications-outline" size={23} color="#202820" />
              </Animated.View>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.iconBtn} onPress={() => console.log("Profile clicked")}>

              <Animated.View style={[styles.centeredIcon, { opacity: reverseProgress }]}>
                <Ionicons name="person-outline" size={23} color="#DCEFDC" />
              </Animated.View>

              <Animated.View style={[styles.centeredIcon, { opacity: progress }]}>
                <Ionicons name="person-outline" size={23} color="#202820" />
              </Animated.View>
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  fixedContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    elevation: 5,
  },
  whiteBg: {
position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  safeArea: {
    backgroundColor: "transparent",
    marginBottom: 17
  },
  header: {
    height: 54,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContainer: {
    flex: 1,
    height: 40,
    justifyContent: "center",
    position: "relative",
    marginTop: 5,
  },
  layerRow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  logoBox: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  imagebox: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  logo: {
    fontSize: 22,
    paddingLeft: 10,
    paddingRight: 4,
    fontFamily: "SoraBold",
  },
  subLogo: {
    fontSize: 10,
    fontFamily: "SoraRegular",
    marginTop: 4,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconBtn: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  centeredIcon: {
   position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    width: 1,
    height: 18,
    backgroundColor: "rgba(150, 150, 150, 0.25)",
  },
});