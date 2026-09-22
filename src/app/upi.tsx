import React from "react";
import { Feather } from '@expo/vector-icons'; 
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Image,ScrollView} from "react-native";

export default function UpiTransfer() {
  return (
    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.infoCard}>

        <View style={styles.infoIcon}>
        <Image source={require('@/assets/images/upi-icon.png')} style={styles.imagebox} />

        </View>

        <View>
          <Text style={styles.infoTitle}>
            Send money to any UPI ID
          </Text>

          <Text style={styles.infoSubtitle}>
            Enter the UPI ID (e.g. name@upi)
          </Text>
        </View>

      </View>

      <Text style={styles.label}>
        Enter UPI ID
      </Text>

      <View style={styles.inputBox}>

        <Text style={styles.personIcon}>
            <Feather name="user" size={20} color="black" />
          
        </Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. example@okicici"
          placeholderTextColor="#89918C"
        />

      </View>


      <Text style={styles.label}>
        Select from Contacts
      </Text>

      <View style={styles.contactsRow}>

        <View style={styles.contactCard}>
          <View style={styles.contactCircle}>
            <Text style={styles.contactLetter}>A</Text>
          </View>

          <Text style={styles.contactName}>
            Amit Singh
          </Text>

          <Text style={styles.upiText}>
            amit@okicici
          </Text>
        </View>


        <View style={styles.contactCard}>
          <View style={styles.contactCircle}>
            <Text style={styles.contactLetter}>P</Text>
          </View>

          <Text style={styles.contactName}>
            Priya Sharma
          </Text>

          <Text style={styles.upiText}>
            priya@oksbi
          </Text>
        </View>


        <View style={styles.contactCard}>
          <View style={styles.contactCircle}>
            <Text style={styles.contactLetter}>R</Text>
          </View>

          <Text style={styles.contactName}>
            Rahul Verma
          </Text>

          <Text style={styles.upiText}>
            rahul@paytm
          </Text>
        </View>


        <View style={styles.contactCard}>
          <View style={styles.contactCircle}>
            <Text style={styles.contactLetter}>S</Text>
          </View>

          <Text style={styles.contactName}>
            Sneha Patel
          </Text>

          <Text style={styles.upiText}>
            sneha@ybl
          </Text>
        </View>

      </View>


      <Text style={styles.label}>
        Enter Amount
      </Text>

      <View style={styles.inputBox}>

        <Text style={styles.rupee}>
          ₹
        </Text>

        <TextInput style={styles.input} placeholder="Enter amount" placeholderTextColor="#89918C" keyboardType="numeric"/>

      </View>


      <Text style={styles.label}> Add Note <Text style={styles.optional}>(Optional)</Text> </Text>
      
      <TextInput style={styles.noteBox}placeholder="e.g. For dinner" placeholderTextColor="#89918C"/>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Send Money
        </Text>
      </TouchableOpacity>

      <View style={styles.security}>
        <Text style={styles.securityIcon}>
          🛡️
        </Text>

        <Text style={styles.securityText}>
          Money will be transferred securely via UPI
        </Text>
      </View>
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
  imagebox:{
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  infoCard: {
    backgroundColor: "#e8fbed",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  infoIcon: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  upiIcon: {
    color: "#3E6B4A",
    fontSize: 24,
    fontWeight: "bold",
  },

  infoTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#17221B",
  },

  infoSubtitle: {
    fontSize: 12,
    color: "#6F7772",
    marginTop: 4,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#17221B",
    marginBottom: 15,
    marginTop: 10,
  },

  inputBox: {
    height: 55,
    borderWidth: 1,
    borderColor: "#D7DEDA",
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },

  personIcon: {
    fontSize: 22,
    marginRight: 10,
    color: "#365F45",
  },

  rupee: {
    fontSize: 20,
    fontWeight: "600",
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: "#222",
  },

  contactsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  contactCard: {
    width: "23.5%",
    borderWidth: 1,
    borderColor: "#E2E7E4",
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },

  contactCircle: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: "#4D8A61",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
  },

  contactLetter: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  contactName: {
    fontSize: 10,
    fontWeight: "600",
    color: "#17221B",
  },

  upiText: {
    fontSize: 8,
    color: "#7B827E",
    marginTop: 3,
  },

  optional: {
    fontWeight: "400",
    color: "#777",
  },

  noteBox: {
     height: 40,
    borderWidth: 1,
    borderColor: "#D5DAD7",
    backgroundColor:"white",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 15,
  },

  button: {
    height: 54,
    borderRadius: 28,
    backgroundColor: "#4c6342",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  security: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 14,
  },

  securityIcon: {
    fontSize: 15,
    marginRight: 6,
  },

  securityText: {
    color: "#68716B",
    fontSize: 12,
  },

});