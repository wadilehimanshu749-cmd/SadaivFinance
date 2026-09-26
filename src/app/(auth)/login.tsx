import { View, Text, Image,StyleSheet, TouchableOpacity,ScrollView, TextInput,ImageBackground} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SafeAreaView } from "react-native-safe-area-context";
import { faApple, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import React from 'react'

export default function login() {
  
  return (
    <SafeAreaView style={styles.safecontainer}>
      
      {/* <Image  source={require('@/assets/images/wave2.png')}  style={styles.topWave}  resizeMode="stretch" tintColor={'#88ceab'}  />
      <Image source={require('@/assets/images/wave3.png')} style={styles.bottomWave} resizeMode="stretch" tintColor={'#88ceab'} /> */}
      <ImageBackground source={require('@/assets/images/signup-bg.png')} resizeMode="cover" style={styles.backgroundimg}>
      
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

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
                 Welcome !
               </Text>
     
               <Text style={styles.subtitle}>
                 Login to your account and continue your {'\n'}
                 financial journey.
               </Text>
     
             </View>

             <View style={styles.logincard}>
              <Image source={require('@/assets/images/login.png')} style={styles.loginicon} />

             </View>
        <View style={styles.card}>

          <View style={styles.inputContainer}>
         <View style={{marginRight:10}}>
              <FontAwesome size={25} name="mobile" color="#78aa8e" />
            </View>
           <View style={styles.verticalLine} />

            <TextInput style={styles.input} placeholder="Mobile Number" placeholderTextColor="#9AA29D"/>

          </View>

          <View style={styles.inputContainer}>
          <View style={{marginRight:9}}>
              <FontAwesome size={23} name="lock" color="#78aa8e" />
            </View>
            <View style={styles.verticalLine} />

            <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#9AA29D" keyboardType="phone-pad" maxLength={10}/>
            <TouchableOpacity>
                <FontAwesome size={15} name="eye" color="#78aa8e" />
            </TouchableOpacity>

          </View>

          <TouchableOpacity style={{alignItems: 'flex-end', marginTop: -10,}}>
              <Text style={{fontFamily: "SoraRegular",fontSize:10}}>Forgot Password ?</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.signinButton} activeOpacity={0.8}>
          
              <Text style={styles.signinButtonText}>
                        Login
              </Text>
          
           </TouchableOpacity>
          

          </View>

          
          
          <View style={{flexDirection: 'row', marginTop:15, marginBottom:15 , alignItems: 'center'}}>
            <View style={styles.horizontalline} />
            <View style={{marginHorizontal: 10}}>
            <Text style={{fontFamily: "DMSanRegular",fontSize:12}}>Or continue with</Text>
            </View>
             <View style={styles.horizontalline} />

        </View>

         <View style={styles.continuewith}>

            <View style={styles.card2}>

             <FontAwesomeIcon icon={faGoogle} size={20} color="#EA4335" />
             <Text style={{marginLeft:10,fontFamily: "DMSanMedium",color: '#263129'}}>Continue with Google</Text>
            </View>
            <View style={styles.card2}>

             <FontAwesomeIcon icon={faApple} size={20} color="#080808" />
             <Text style={{marginLeft:10,fontFamily: "DMSanMedium",color: '#263129'}}>Continue with Apple</Text>
            </View>
            <View style={styles.card2}>

             <FontAwesomeIcon icon={faMicrosoft} size={20} color="#080808" />
             <Text style={{marginLeft:10,fontFamily: "DMSanMedium",color:'#263129'}}>Continue with Microsoft</Text>
            </View>

          </View>

          <View style={styles.account}>
            <Text style={{fontSize: 12,fontFamily: "DMSanRegular",}}>Dont't have an account ?</Text>
          <TouchableOpacity style={{marginHorizontal:10}}>
            <Text style={{fontFamily: "SoraBold",fontSize:11,color: '#3E6B4A'}}>Sign up</Text>
          </TouchableOpacity>
          </View>
             </ScrollView>
             </ImageBackground>
   
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

safecontainer:{
flex: 1,
backgroundColor: '#f5faf7'
},
container:{
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingTop: 45,
    paddingBottom: 25,
},

// topWave:{
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   right: 0,
//   height: 120, 
//   width: '100%',
//   zIndex: 0,
//   opacity:0.4
// },
// bottomWave:{
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 120,
//     width: '100%',
//     zIndex: 0,
//     opacity: 0.4
// },
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
    paddingHorizontal:10
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
    backgroundColor: '#ebf6ef',
    borderWidth: 1,
    borderColor: '#e4f4e4',
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
    fontWeight: "600",
    color: "#344139",
    marginBottom: 7,
    marginTop: 12,
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
    marginBottom: 20
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
    fontWeight: "600",
    color: "#39433D",
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
  logincard:{
    alignItems: 'center',
    justifyContent: 'center'

  },
  loginicon:{
    width: 300,
    height: 300,
    resizeMode: 'contain'
    
  },
    signinButton: {
    height: 50,
    backgroundColor: "#3E6B4A",
    borderRadius: 20,
    marginTop: 19,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  signinButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
     fontFamily: "SoraBold",
  },
  horizontalline:{
    flex: 1,
    height: 1,
    backgroundColor: '#377052',
  },
  
  continuewith:{
    alignItems: 'center'

  },
  icon:{
    width: 20,
    height: 20
  },
  card2:{
    height: 48,
    borderWidth: 1,
    borderColor: "#e2f1e9",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 40,
    backgroundColor: "#FCFDFC",
    marginBottom: 15

  },
  account:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },
  backgroundimg:{
    flex:1,
    width: '100%',
    height: '100%'
  }

})