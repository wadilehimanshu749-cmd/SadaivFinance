import React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
    <View style={styles.header}>

    <View style={styles.contanier}>
          {/* <View style={styles.logoBox}>
            <Image source={require('@/assets/images/touchpe_i.png')} style={styles.imagebox} />
        </View> */}
        <Text style={styles.logo}>
        S A D A I V
      </Text>
      <Text style={{ fontSize: 15, fontFamily: 'Roboto Slab',}}>Finance</Text>
      
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
            size={25}
            color="#222"
          />

          {/* <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View> */}
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.profile} onPress={() => console.log("Profile clicked")}>
          <Ionicons
            name="person-outline"
            size={15}
            color="white"
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

  },
  header: {
    height: 50,
    marginTop: 15,
    paddingHorizontal: 20,

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
    borderRadius: 20,
    backgroundColor: "#4b7148",
    justifyContent: "center",
    alignItems: "center",
    
    },
    imagebox:{
    width: 30,
    height: 30,
    resizeMode: "contain",
    borderRadius: 20

    },
  logo: {
    fontSize: 25,
    fontWeight: "bold",
    paddingHorizontal: 5,
    fontFamily: 'Roboto Slab',
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

    backgroundColor: "#333",

    justifyContent: "center",
    alignItems: "center",
  },
});