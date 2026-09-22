import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput,ScrollView,ImageBackground} from "react-native";

export default function History() {

  const [selectedTab, setSelectedTab] = useState("All");

  const [searchText, setSearchText] = useState("");

  return (

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" >
          <SafeAreaView style={styles.outerContainer} edges={["top"]}>


      <ImageBackground source={require("@/assets/images/wave2.png")} style={styles.header} imageStyle={styles.headerImageStyle}>
        <Text style={styles.headerText}>
          Money
        </Text>
      </ImageBackground>
        <View style={styles.balance_container}>

          <View style={styles.img_container}>

            <Image
              source={require("@/assets/images/hdfc.png")}
              style={styles.imgbox}
            />

          </View>


          <View style={styles.balance_label}>

            <Text style={styles.bankName}>
              HDFC Bank
            </Text>

            <Text style={styles.accountNumber}>
              ****1234
            </Text>

            <Text style={styles.accountType}>
              Saving Account
            </Text>

          </View>


          <TouchableOpacity style={styles.balanceButton}>

            <Text style={styles.balanceButtonText}>
              Check balance
            </Text>

          </TouchableOpacity>

        </View>

        <View style={styles.balance_container}>

          <View style={styles.img_container}>

            <Image
              source={require("@/assets/images/sboi.png")}
              style={styles.imgbox}
            />

          </View>


          <View style={styles.balance_label}>

            <Text style={styles.bankName}>
              State Bank of India
            </Text>

            <Text style={styles.accountNumber}>
              ****5678
            </Text>

            <Text style={styles.accountType}>
              Saving Account
            </Text>

          </View>


          <TouchableOpacity style={styles.balanceButton}>

            <Text style={styles.balanceButtonText}>
              Check balance
            </Text>

          </TouchableOpacity>

        </View>

        <View style={styles.historyHeading}>

          <Text style={styles.historyTitle}>
            Transaction History
          </Text>

        </View>

        <View style={styles.inputBox}>

          <TextInput
            style={styles.amountInput}
            placeholder="Search transactions"
            placeholderTextColor="#89918C"
            value={searchText}
            onChangeText={setSearchText}
            autoCapitalize="none"
          />

        </View>

        <View style={styles.tabs}>

          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === "All" && styles.activeTab,
            ]}
            onPress={() => setSelectedTab("All")}
          >

            <Text
              style={[
                styles.tabText,
                selectedTab === "All" && styles.activeTabText,
              ]}
            >
              All
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === "Sent" && styles.activeTab,
            ]}
            onPress={() => setSelectedTab("Sent")}
          >

            <Text
              style={[
                styles.tabText,
                selectedTab === "Sent" && styles.activeTabText,
              ]}
            >
              Sent
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === "Received" && styles.activeTab,
            ]}
            onPress={() => setSelectedTab("Received")}
          >

            <Text
              style={[
                styles.tabText,
                selectedTab === "Received" && styles.activeTabText,
              ]}
            >
              Received
            </Text>

          </TouchableOpacity>

        </View>

        <Text style={styles.dateTitle}>
          Today
        </Text>


        {(selectedTab === "All" || selectedTab === "Sent") && (

          <TouchableOpacity style={styles.transactionCard}>

            <View style={styles.transactionIconSent}>

              <Text style={styles.iconText}>
                ↑
              </Text>

            </View>


            <View style={styles.transactionDetails}>

              <Text style={styles.personName}>
                Sent to Saurabh Patel
              </Text>

              <Text style={styles.upiId}>
                saurabh@upi
              </Text>

              <Text style={styles.transactionTime}>
                Today, 09:21 AM
              </Text>

            </View>


            <View style={styles.amountContainer}>

              <Text style={styles.sentAmount}>
                - ₹2,500
              </Text>

              <Text style={styles.successText}>
                Successful
              </Text>

            </View>

          </TouchableOpacity>

        )}

        {(selectedTab === "All" ||
          selectedTab === "Received") && (

          <TouchableOpacity style={styles.transactionCard}>

            <View style={styles.transactionIconReceived}>

              <Text style={styles.iconText}>
                ↓
              </Text>

            </View>


            <View style={styles.transactionDetails}>

              <Text style={styles.personName}>
                Received from Neha Singh
              </Text>

              <Text style={styles.upiId}>
                neha.singh@upi
              </Text>

              <Text style={styles.transactionTime}>
                Today, 08:45 AM
              </Text>

            </View>


            <View style={styles.amountContainer}>

              <Text style={styles.receivedAmount}>
                + ₹5,000
              </Text>

              <Text style={styles.successText}>
                Successful
              </Text>

            </View>

          </TouchableOpacity>

        )}


        <Text style={styles.dateTitle}>
          Yesterday
        </Text>

        {(selectedTab === "All" || selectedTab === "Sent") && (

          <TouchableOpacity style={styles.transactionCard}>

            <View style={styles.transactionIconSent}>

              <Text style={styles.iconText}>
                ↑
              </Text>

            </View>


            <View style={styles.transactionDetails}>

              <Text style={styles.personName}>
                Sent to Rahul Sharma
              </Text>

              <Text style={styles.upiId}>
                rahul.sharma@upi
              </Text>

              <Text style={styles.transactionTime}>
                Yesterday, 06:32 PM
              </Text>

            </View>


            <View style={styles.amountContainer}>

              <Text style={styles.sentAmount}>
                - ₹1,200
              </Text>

              <Text style={styles.successText}>
                Successful
              </Text>

            </View>

          </TouchableOpacity>

        )}

        {(selectedTab === "All" ||
          selectedTab === "Received") && (

          <TouchableOpacity style={styles.transactionCard}>

            <View style={styles.transactionIconReceived}>

              <Text style={styles.iconText}>
                ↓
              </Text>

            </View>


            <View style={styles.transactionDetails}>

              <Text style={styles.personName}>
                Received from Amit
              </Text>

              <Text style={styles.upiId}>
                amit@upi
              </Text>

              <Text style={styles.transactionTime}>
                Yesterday, 04:18 PM
              </Text>

            </View>


            <View style={styles.amountContainer}>

              <Text style={styles.receivedAmount}>
                + ₹3,000
              </Text>

              <Text style={styles.successText}>
                Successful
              </Text>

            </View>

          </TouchableOpacity>

        )}

        <Text style={styles.dateTitle}>
          12 May 2026
        </Text>


        {(selectedTab === "All" || selectedTab === "Sent") && (

          <TouchableOpacity style={styles.transactionCard}>

            <View style={styles.transactionIconSent}>

              <Text style={styles.iconText}>
                ↑
              </Text>

            </View>


            <View style={styles.transactionDetails}>

              <Text style={styles.personName}>
                Sent to Priya Mehta
              </Text>

              <Text style={styles.upiId}>
                priya@upi
              </Text>

              <Text style={styles.transactionTime}>
                12 May, 11:42 AM
              </Text>

            </View>


            <View style={styles.amountContainer}>

              <Text style={styles.sentAmount}>
                - ₹750
              </Text>

              <Text style={styles.successText}>
                Successful
              </Text>

            </View>

          </TouchableOpacity>

        )}

        <View style={styles.bottomInfo}>

          <View style={styles.secureIcon}>

            <Text style={styles.checkIcon}>
              ✓
            </Text>

          </View>


          <View>

            <Text style={styles.secureTitle}>
              Secure Transactions
            </Text>

            <Text style={styles.secureSubtitle}>
              All your UPI transfers are protected
            </Text>

          </View>

        </View>
</SafeAreaView>

      </ScrollView>

    
  );
}


const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "#F5F5F5",
    paddingBottom: 60

  },

  header: {
   height: 110,
   width: "auto",
   marginLeft: -18,
   marginRight: -55,
   alignItems: "flex-start",
   justifyContent: "flex-end",
   paddingHorizontal: 18,
   paddingBottom: 5,
   overflow: "hidden",
  },
headerImageStyle: {
  width: "100%",
  height: "100%",
  resizeMode: "cover",
  opacity: 0.5,
  tintColor: '#7fb092'
  },

  headerText: {
    fontSize: 30,
    fontFamily: 'Roboto Slab',
    fontWeight: "600",
    color: "#548b5b",
  },


  container: {
    flex: 1,
    paddingHorizontal: 18,
    
  },

  balance_container: {
    padding: 17,
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,

    elevation: 2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },


  img_container: {
    justifyContent: "center",
    marginRight: 15,
    alignItems: "center",
  },


  imgbox: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },


  balance_label: {
    flex: 1,
    justifyContent: "center",
  },


  bankName: {
    fontSize: 15,
    fontFamily: 'Roboto Slab',
    fontWeight: "600",
    color: "#17221B",
  },


  accountNumber: {
    fontSize: 12,
    fontFamily: 'Roboto Slab',
    color: "#667069",
    marginTop: 3,
  },


  accountType: {
    fontSize: 11,
    fontFamily: 'Roboto Slab',
    color: "#7A837D",
    marginTop: 3,
  },


  balanceButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 8,
  },


  balanceButtonText: {
    fontSize: 10,
    fontFamily: 'Roboto Slab',
    color: "#3E6B4A",
    fontWeight: "600",
  },


  historyHeading: {
    paddingTop: 22,
    paddingBottom: 10,
  },


  historyTitle: {
    fontSize: 17,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#17221B",
  },


  inputBox: {
    height: 45,
    borderWidth: 1,
    borderColor: "#D5DAD7",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },


  amountInput: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'Roboto Slab',
    color: "#222222",
  },

  tabs: {
    height: 45,
    backgroundColor: "#EAEFEB",
    borderRadius: 11,
    flexDirection: "row",
    padding: 4,
    marginTop: 15,
    marginBottom: 18,
  },


  tab: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },


  activeTab: {
    backgroundColor: "#3E6B4A",
  },


  tabText: {
    fontSize: 12,
    fontFamily: 'Roboto Slab',
    color: "#667069",
    fontWeight: "600",
  },


  activeTabText: {
    color: "#FFFFFF",
  },

  dateTitle: {
    fontSize: 13,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#39433D",
    marginBottom: 10,
    marginTop: 5,
  },

  transactionCard: {
    minHeight: 82,
    borderWidth: 1,
    borderColor: "#E0E5E1",
    borderRadius: 14,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
  },


  transactionIconSent: {
    width: 42,
    height: 42,
    borderRadius: 22,
    backgroundColor: "#F8E9E9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 11,
  },


  transactionIconReceived: {
    width: 42,
    height: 42,
    borderRadius: 22,
    backgroundColor: "#E7F3E9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 11,
  },


  iconText: {
    fontSize: 21,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#3E6B4A",
  },


  transactionDetails: {
    flex: 1,
  },


  personName: {
    fontSize: 13,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#17221B",
  },


  upiId: {
    fontSize: 10,
    fontFamily: 'Roboto Slab',
    color: "#737D76",
    marginTop: 3,
  },


  transactionTime: {
    fontSize: 9,
    fontFamily: 'Roboto Slab',
    color: "#9AA29D",
    marginTop: 4,
  },


  amountContainer: {
    alignItems: "flex-end",
    marginLeft: 8,
  },


  sentAmount: {
    fontSize: 13,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#343C37",
  },


  receivedAmount: {
    fontSize: 13,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#3D8651",
  },


  successText: {
    fontSize: 8,
    fontFamily: 'Roboto Slab',
    color: "#3D8651",
    marginTop: 5,
  },

  bottomInfo: {
    backgroundColor: "#F1F7F2",
    borderRadius: 13,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 25,
  },


  secureIcon: {
    width: 32,
    height: 32,
    borderRadius: 17,
    backgroundColor: "#DCEDE0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },


  checkIcon: {
    color: "#3E6B4A",
    fontWeight: "700",
  },


  secureTitle: {
    fontSize: 11,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#344139",
  },


  secureSubtitle: {
    fontSize: 9,
    fontFamily: 'Roboto Slab',
    color: "#78817B",
    marginTop: 3,
  },
 
});