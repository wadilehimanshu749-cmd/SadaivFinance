import React, { useState } from "react";
import { Feather } from '@expo/vector-icons'; 
import AntDesign from '@expo/vector-icons/AntDesign';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,ScrollView} from "react-native";
export default function ToMobile() {

  const [mobileNumber, setMobileNumber] = useState("");
  const [amount, setAmount] = useState("");
  const handleSendMoney = () => {

    if (mobileNumber.length !== 10) {
      Alert.alert("Invalid Number", "Please enter a valid 10 digit mobile number.");
      return;
    }

    if (amount === "") {
      Alert.alert("Enter Amount", "Please enter the amount.");
      return;
    }

    Alert.alert(
      "Success",
      `₹${amount} will be sent to ${mobileNumber}`
    );
  };

  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
      
       <View style={styles.infoCard}>

        <View style={styles.infoIcon}>
          <AntDesign size={27} name="contacts" color={'green'} />
        </View>

        <View>
          <Text style={styles.infoTitle}>
            Send Money to Mobile Number.
          </Text>

          <Text style={styles.infoSubtitle}>
            Enter the Mobile Number below.
          </Text>
        </View>

      </View>

      <Text style={styles.label}>Mobile Number</Text>

      <View style={styles.mobileBox}>

        <Text style={styles.countryCode}>+91</Text>

        <TextInput
          style={styles.mobileInput}
          placeholder="12345 67890"
          keyboardType="phone-pad"
          maxLength={10}
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
       <Feather name="user" size={20} color="black" />

      </View>

      <Text style={styles.label}>Amount</Text>

      <View style={styles.inputBox}>
        <Text style={styles.rupee}>₹</Text>

        <TextInput
          style={styles.amountInput}
          placeholder="500"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      <Text style={styles.label}>
        Add Note <Text style={styles.optional}>(Optional)</Text>
      </Text>

      <TextInput style={styles.noteBox}placeholder="e.g. For dinner"/>

      <TouchableOpacity
        style={styles.sendButton}
        onPress={handleSendMoney}
      >
        <Text style={styles.sendButtonText}>
          Send Money
        </Text>
      </TouchableOpacity>

      <View style={styles.secureBox}>
        <Text style={styles.secureIcon}>🛡️</Text>

        <Text style={styles.secureText}>
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
    marginHorizontal:20
  },
   infoCard: {
    backgroundColor: "#e8fbed",
    borderRadius: 12,
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  infoIcon: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#E1F0E4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  infoTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#17221B",
  },

  infoSubtitle: {
    fontSize: 10,
    color: "#6F7772",
    marginTop: 4,
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#18251E",
    marginTop: 20,
    marginBottom: 8,
  },

  optional: {
    fontWeight: "400",
    color: "#777777",
  },

  mobileBox: {
    height: 40,
    borderWidth: 1,
    borderColor: "#D5DAD7",
    backgroundColor:"white",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },

  countryCode: {
    fontSize: 16,
    color: "#333333",
    marginRight: 10,
  },

  mobileInput: {
    flex: 1,
    fontSize: 16,
    color: "#222222",
  },

  contactIcon: {
    fontSize: 22,
    color: "#315F45",
  },

  inputBox: {
    height: 40,
    borderWidth: 1,
    borderColor: "#D5DAD7",
    backgroundColor:"white",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },

  rupee: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333333",
  },

  amountInput: {
    flex: 1,
    fontSize: 15,
    marginLeft: 8,
    color: "#222222",
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

  sendButton: {
    height: 40,
    backgroundColor: "#3E6B4A",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  sendButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },

  secureBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  secureIcon: {
    fontSize: 16,
    marginRight: 6,
  },

  secureText: {
    fontSize: 13,
    color: "#66706A",
  },

});