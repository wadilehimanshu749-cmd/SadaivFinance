import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Image,ScrollView} from "react-native";

export default function mobile_recharge() {
  return (
    <View style={styles.container}>
       <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.infoCard}>

        <View style={styles.infoIcon}>
          <AntDesign size={27} name="mobile" color={'green'} />

        </View>

        <View>
          <Text style={styles.infoTitle}>
            Recharge your mobile
          </Text>

          <Text style={styles.infoSubtitle}>
            Quick and secure
          </Text>
        </View>

      </View>

      <Text style={styles.label}>
        Mobile Number
      </Text>
      <View style={{flexDirection:'row', gap: 12}}>
      <View style={styles.inputBox}>

        <Text style={styles.code}>
          +91
        </Text>

        <TextInput style={styles.input} placeholder="98765 43210" placeholderTextColor="#89918C" keyboardType="phone-pad" maxLength={10} />

      </View>
      <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
        <FontAwesome size={20} name="user" color="blue" />
      </TouchableOpacity>
       </View>
      <View style={{marginTop:5}}>
      <Text style={{fontSize:12}}>
        Ensure this is a valid mobile number
      </Text>
      </View>
      <Text style={styles.label}>
        Select Operator
      </Text>

      <View style={styles.operatorRow}>

        <TouchableOpacity style={styles.operator}>

          <View style={styles.jioCircle}>
            <Text style={styles.jioText}>
              Jio
            </Text>
          </View>

          <Text style={styles.operatorName}>
            Jio
          </Text>

        </TouchableOpacity>


        <TouchableOpacity style={styles.operator}>

          <View style={styles.airtelCircle}>
        <Image source={require('@/assets/images/airtel-icon.png')} style={[styles.imagebox, {tintColor: "white"}]} />

          </View>

          <Text style={styles.operatorName}>
            Airtel
          </Text>

        </TouchableOpacity>


        <TouchableOpacity style={styles.operator}>

          <View style={styles.viCircle}>
         <Image source={require('@/assets/images/vi-icon.png')} style={[styles.viicon, {tintColor: "white"}]} />

          </View>

          <Text style={styles.operatorName}>
            Vi
          </Text>

        </TouchableOpacity>


        <TouchableOpacity style={styles.operator}>

          <View style={styles.bsnlCircle}>
         <Image source={require('@/assets/images/bsnl-icon.png')} style={styles.bsnlicon} />

          </View>

          <Text style={styles.operatorName}>
            BSNL
          </Text>

        </TouchableOpacity>

      </View>

      <Text style={styles.label}>
        Recharge Amount
      </Text>

      <View style={styles.inputBox2}>

        <Text style={styles.rupee}>
          ₹
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          placeholderTextColor="#89918C"
          keyboardType="numeric"
        />

      </View>

      <TouchableOpacity style={styles.planCard}>

        <View style={styles.planIcon}>
          <Text style={{fontSize:25, color:'green'}}>▤</Text>
        </View>

        <View style={styles.planTextContainer}>

          <Text style={styles.planTitle}>
            View Recharge Plans
          </Text>

          <Text style={styles.planSubtitle}>
            Check best plans for your number
          </Text>

        </View>

        <Text style={styles.arrow}>
          ›
        </Text>

      </TouchableOpacity>


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Proceed to Recharge
        </Text>
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

  infoCard: {
    backgroundColor: "#e8fbed",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
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
    fontSize: 15,
    fontWeight: "700",
    color: "#17221B",
  },

  infoSubtitle: {
    fontSize: 12,
    color: "#6F7772",
    marginTop: 4,
  },
  imagebox:{
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  viicon:{
    width: 20,
    height: 20,
    resizeMode: "contain",

  },
  bsnlicon:{
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#17221B",
    marginTop: 5,
    marginBottom: 8,
  },

  inputBox: {
    flex:1,
    height: 50,
    borderWidth: 1,
    borderColor: "#D7DEDA",
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },
  inputBox2:{
    height: 50,
    borderWidth: 1,
    borderColor: "#D7DEDA",
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },

   rupee: {
    fontSize: 20,
    fontWeight: "600",
    marginRight: 10,
  },

  code: {
    fontSize: 15,
    fontWeight: "600",
    marginRight: 12,
  },

  input: {
    flex: 1,
    fontSize: 15,
  },

  operatorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  operator: {
    width: "23%",
    height: 92,
    borderWidth: 1.2,
    borderColor: "#DFE5E1",
    backgroundColor:'white',
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  operatorSelected: {
    width: "23%",
    height: 92,
    borderWidth: 0.5,
    backgroundColor: "white",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  jioCircle: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: "#2161A8",
    justifyContent: "center",
    alignItems: "center",
  },

  jioText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 13,
  },

  airtelCircle: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },

  viCircle: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },

  viText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  bsnlCircle: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: "#f0eee2",
    justifyContent: "center",
    alignItems: "center",
  },

  bsnlText: {
    color: "#16599A",
    fontWeight: "700",
  },

  operatorName: {
    fontSize: 11,
    marginTop: 6,
    color: "#17221B",
  },


  planCard: {
    height: 70,
    backgroundColor: "#e8fbed",
    borderRadius: 12,
    marginTop: 16,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  planIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#E1F0E4",
    justifyContent: "center",
    alignItems: "center",
  },

  planTextContainer: {
    flex: 1,
    marginLeft: 12,
  },

  planTitle: {
    fontSize: 14,
    fontWeight: "600",
  },

  planSubtitle: {
    fontSize: 11,
    color: "#747C77",
    marginTop: 3,
  },

  arrow: {
    fontSize: 27,
    color: "#3E6B4A",
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

});