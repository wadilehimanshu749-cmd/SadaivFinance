import React from "react";
import {View,Text,TouchableOpacity,StyleSheet,ScrollView,Image} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from "expo-router";

export default function SendMoney() {

  return (
    <View style={styles.container}>
       <ScrollView showsVerticalScrollIndicator={false}>
      
      <TouchableOpacity style={styles.option}>
        <View style={styles.iconCircle}>
        <FontAwesome size={25} name="bank" color="#78aa8e" />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>To Bank Account</Text>

          <Text style={styles.subtitle}>
            Send to any bank account using{"\n"}
            IFSC / Account number
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.push("/upi")} >
        <View style={styles.iconCircleUPI}>
            <Image source={require('@/assets/images/upi-icon.png')} style={styles.imagebox} />
          
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>To UPI ID</Text>

          <Text style={styles.subtitle}>
            Send to any UPI ID{" "}
            (e.g. name@upi)
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => router.push("/to_mobile")}>
        <View style={styles.iconCircle}>
        <FontAwesome size={35} name="mobile" color="#78aa8e" />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>To Mobile Number</Text>

          <Text style={styles.subtitle}>
            Send to a contact's mobile number{"\n"}
            (Linked with UPI)
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => router.push("./self_transfer")}>
        
        <View style={styles.iconCircle}>
        <FontAwesome size={35} name="user" color="#78aa8e" />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>To Self</Text>

          <Text style={styles.subtitle}>
            Transfer money to your own account
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },

  option: {
    minHeight: 105,
    borderWidth: 1,
    borderColor: "#E1E5E2",
    borderRadius: 14,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 15,
    paddingVertical: 15,

    marginBottom: 12,

    backgroundColor: "#FFFFFF",
  },

  iconCircle: {
    width: 50,
    height: 50,

    borderRadius: 25,

    backgroundColor: "#EEF5EF",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 15,
  },
  iconCircleUPI:{
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,

  },

  icon: {
    fontSize: 24,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontFamily: 'Roboto Slab',
    fontWeight: "600",
    color: "#17221B",

    marginBottom: 5,
  },

  subtitle: {
    fontSize: 13,
    fontFamily: 'Roboto Slab',
    color: "#6D756F",
    lineHeight: 19,
  },

  arrow: {
    fontSize: 30,
    color: "#68706A",
    fontFamily: 'Roboto Slab',
    marginLeft: 8,
  },
  imagebox:{
    width: 37,
    height: 37,
    resizeMode: "contain",
  }
 

});