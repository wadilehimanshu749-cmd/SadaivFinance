import React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
    <View style={styles.header}>

    <View style={styles.contanier}>
          <View style={styles.logoBox}>
            <Image source={require('@/assets/images/comp_logo.png')} style={styles.imagebox} />
        </View>
        <Text style={styles.logo}>
        S A D A I V
      </Text>
      <Text style={{ fontSize: 10, fontFamily: 'SoraRegular',marginTop: 14,marginLeft: -7}}>Finance</Text>
      
    </View>

     
      <View style={styles.rightSection}>

        
        {/* <TouchableOpacity
          onPress={() => console.log("Search clicked")}
        >
          <Ionicons
            name="search-outline"
            size={15}
            color="#222"
          />
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.notification} onPress={() => console.log("Notification clicked")}>
          <Ionicons
            name="notifications-outline"
            size={23}
            color="#222"
          />

          {/* <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View> */}
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.profile} onPress={() => console.log("Profile clicked")}>
          <Ionicons
            name="person-outline"
            size={25}
            color="#222"
          />
        </TouchableOpacity>

      </View>
      
    </View>
    </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
  safeArea:{
     backgroundColor: "#F5F7F3",
     marginBottom: 17

  },
  header: {
    height: 50,
    marginTop: 15,
    paddingHorizontal: 25,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
    contanier: {
      flexDirection: 'row',
      alignItems: 'center',

    },
    logoBox : {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    
    },
    imagebox:{
    width: 70,
    height: 70,
    resizeMode: "contain",
    borderRadius: 20

    },
  logo: {
    fontSize: 20,
    paddingHorizontal: 10,
    marginTop: 10,
    fontFamily: 'SoraBold',
  },

  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },

  notification: {
    position: "relative",
  },

  badge: {
    position: "absolute",
    right: -5,
    top: -5,

    width: 10,
    height: 10,
    borderRadius: 8,

    backgroundColor: "red",

    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: "white",
    fontSize: 9,
    fontWeight: "bold",
    
    
  },

  profile: {
    width: 30,
    height: 30,
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
  },
});