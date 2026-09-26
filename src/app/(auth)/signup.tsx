import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView,Image,ImageBackground} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";
import { BlurView } from 'expo-blur';
import { SafeAreaView } from "react-native-safe-area-context";

export default function signup() {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <Image  source={require('@/assets/images/wave2.png')}  style={styles.topWave}  resizeMode="stretch" tintColor={'#88ceab'}  />
      <Image source={require('@/assets/images/wave3.png')} style={styles.bottomWave} resizeMode="stretch" tintColor={'#88ceab'} /> */}
      <ImageBackground source={require('@/assets/images/signup-bg.png')} resizeMode="cover" style={styles.backgroundimg}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>
            ‹
          </Text>

          <Text style={styles.backLabel}>
            Back
          </Text>
        </TouchableOpacity>

        <View style={styles.logoContainer}>

          <View style={styles.logoCircle}>
                <Image source={require('@/assets/images/comp_logo.png')} style={styles.logoIcon} />

          </View>

          <Text style={styles.logoText}>
            S A D A I V <Text style={styles.logoGreen}>Finance</Text>
          </Text>

        </View>

        <View style={styles.headingContainer}>

          <Text style={styles.title}>
            Create your account
          </Text>

          <Text style={styles.subtitle}>
            Join S A D A I V Finance and make payments easier
          </Text>

        </View>

        <View style={styles.card}>
          

          <Text style={styles.label}>
            Full Name
          </Text>

          <View style={styles.inputContainer}>
         <View style={{marginRight:10}}>
              <FontAwesome size={20} name="user" color="#78aa8e" />
            </View>
            <TextInput style={styles.input} placeholder="Enter your full name" placeholderTextColor="#9AA29D" value={name}  onChangeText={setName}/>

          </View>

          <Text style={styles.label}>
            Mobile Number
          </Text>

          <View style={styles.inputContainer}>

            <Text style={styles.countryCode}>
              +91
            </Text>

            <View style={styles.verticalLine} />

            <TextInput style={styles.input} placeholder="Enter mobile number" placeholderTextColor="#9AA29D" keyboardType="phone-pad" maxLength={10} value={mobile} onChangeText={setMobile} />

          </View>

          <Text style={styles.label}>
            Email Address
          </Text>

          <View style={styles.inputContainer}>

           <AntDesign size={20} name="mail" color={'#78aa8e'} style={{marginRight:10}} />

            <TextInput  style={styles.input}  placeholder="Enter email address"  placeholderTextColor="#9AA29D"  keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail}/>

          </View>

          <Text style={styles.label}>
            Password
          </Text>

          <View style={styles.inputContainer}>

            <TextInput style={styles.input}  placeholder="Create a password"  placeholderTextColor="#9AA29D"  secureTextEntry={!showPassword} value={password} onChangeText={setPassword}/>

            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={styles.showText}>
                {showPassword ? "Hide" : "Show"}
              </Text>
            </TouchableOpacity>

          </View>

          <Text style={styles.label}>
            Confirm Password
          </Text>

          <View style={styles.inputContainer}>

            <TextInput style={styles.input}  placeholder="Confirm your password"  placeholderTextColor="#9AA29D"  secureTextEntry={!showConfirm} value={confirmPassword} onChangeText={setConfirmPassword} />

            <TouchableOpacity
              onPress={() => setShowConfirm(!showConfirm)}>
              <Text style={styles.showText}>
                {showConfirm ? "Hide" : "Show"}
              </Text>
            </TouchableOpacity>

          </View>

          <View style={styles.termsContainer}>

            <View style={styles.checkbox}>
              <Text style={styles.check}>
                ✓
              </Text>
            </View>

            <Text style={styles.termsText}>
              I agree to Sadaiv's{" "}
              <Text style={styles.termsGreen}>
                Terms & Conditions
              </Text>{" "}
              and{" "}
              <Text style={styles.termsGreen}>
                Privacy Policy
              </Text>
            </Text>

          </View>

          <TouchableOpacity style={styles.signupButton} activeOpacity={0.8}>

            <Text style={styles.signupButtonText}>
              Create Account
            </Text>

          </TouchableOpacity>

        </View>

        <View style={styles.loginContainer}>

          <Text style={styles.accountText}>
            Already have an account?
          </Text>

          <TouchableOpacity>

            <Text style={styles.loginText}>
              Login
            </Text>

          </TouchableOpacity>

        </View>

        <View style={styles.securityContainer}>

          <Text style={styles.securityIcon}>
            ✓
          </Text>

          <Text style={styles.securityText}>
            Your information is securely encrypted
          </Text>

        </View>

      </ScrollView>
      </ImageBackground>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: "#f5faf7",
  },
  // topWave: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   height: 120, 
  //   width: '100%',
  //   zIndex: 0,
  //   opacity:0.4
  // },
  // bottomWave: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   height: 120,
  //   width: '100%',
  //   zIndex: 0,
  // },

  container: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 25,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 12,
  },

  backText: {
    fontSize: 29,
    color: "#344139",
    lineHeight: 30,
    fontFamily: "DMSanMedium",
  },

  backLabel: {
    fontSize: 12,
    color: "#667069",
    marginLeft: 4,
    fontFamily: "DMSanMedium",
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 24,
  },

  logoCircle: {
    width: 48,
    height: 48,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  logoIcon: {
    height: 90,
    width: 90
  },

  logoText: {
    fontSize: 23,
    color: "#263129",
    fontFamily: "SoraBold",
  },

  logoGreen: {
    color: "#3E6B4A",
    fontFamily: "SoraRegular",

  },

  headingContainer: {
    marginBottom: 18,
    marginLeft: 5
  },

  title: {
    fontSize: 25,
    color: "#17221B",
    fontFamily: "SoraBold",
  },

  subtitle: {
    fontSize: 12,
    color: "#7A837D",
    marginTop: 5,
    fontFamily: "DMSanRegular",
  },

  card: {
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#ecf8f1",
    opacity: 0.9,
    borderColor: "#e3f1e9",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.07,
    shadowRadius: 10,

    elevation: 3,
  },

  label: {
    fontSize: 11,
    color: "#344139",
    marginBottom: 7,
    marginTop: 12,
    fontFamily: "DMSanMedium",

  },

  inputContainer: {
    height: 48,
    borderWidth: 1,
    borderColor: "#e2f1e9",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: "#FCFDFC",
  },

  inputIcon: {
    
    fontSize: 13,
    color: "#3E6B4A",
    fontWeight: "700",
    textAlign: "center",
    marginRight: 6,
  },

  countryCode: {
    fontSize: 12,
    color: "#39433D",
    fontFamily: 'DMSanSemibold'
  },

  verticalLine: {
    width: 1,
    height: 21,
    backgroundColor: "#D8DED9",
    marginHorizontal: 9,
  },

  input: {
    flex: 1,
    height: "100%",
    fontSize: 12,
    color: "#17221B",
     fontFamily: "DMSanRegular",
  },

  showText: {
    color: "#3E6B4A",
    fontSize: 10,
    fontFamily: 'SoraRegular'
  },

  termsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 17,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 5,
    backgroundColor: "#3E6B4A",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  check: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },

  termsText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 15,
    color: "#737D76",
    fontFamily: 'DMSanRegular'
  },

  termsGreen: {
    color: "#3E6B4A",
    fontFamily: 'DMSanRegular'
  },

  signupButton: {
    height: 50,
    backgroundColor: "#3E6B4A",
    borderRadius: 14,
    marginTop: 19,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  signupButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: 'DMSanSemibold'
  },

  buttonArrow: {
    color: "#FFFFFF",
    fontSize: 19,
    marginLeft: 9,
  },

  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  accountText: {
    fontSize: 10,
    color: "#060606",
    fontFamily: "DMSanRegular",

  },

  loginText: {
    fontSize: 11,
    color: "#3E6B4A",
    marginLeft: 5,
    fontFamily: 'DMSanSemibold'
  },

  securityContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 19,
  },

  securityIcon: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#DDEBDF",
    color: "#3E6B4A",
    textAlign: "center",
    lineHeight: 18,
    fontSize: 10,
    fontWeight: "700",
    marginRight: 6,
  },

  securityText: {
    fontSize: 9,
    color: "#070807",
    fontFamily: "DMSanRegular",

  },
  backgroundimg:{
    flex:1,
    width: '100%',
    height: '100%'
  }

});