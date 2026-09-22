import React from "react";
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';


export default function credit_card_bill() {
  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.infoCard}>

        <View style={styles.infoIcon}>
        <AntDesign size={27} name="credit-card" color={'green'} />

        </View>

        <View>
          <Text style={styles.infoTitle}>
            Pay your credit card bill
          </Text>

          <Text style={styles.infoSubtitle}>
            Safe, secure and on time
          </Text>
        </View>

      </View>

      <Text style={styles.label}>
        Select Credit Card
      </Text>

      <TouchableOpacity style={styles.creditCardSelected}>

        <View>
         <Image source={require('@/assets/images/hdfc.png')} style={styles.bankIcon} />
          
        </View>

        <View style={styles.cardDetails}>

          <Text style={styles.bankName}>
            HDFC Bank
          </Text>

          <Text style={styles.cardType}>
            Credit Card
          </Text>

          <Text style={styles.cardNumber}>
            •••• 1234
          </Text>

        </View>

        <View style={styles.billDetails}>

          <Text style={styles.smallText}>
            Total Due
          </Text>

          <Text style={styles.totalAmount}>
            ₹3,250.00
          </Text>

          <Text style={styles.smallText}>
            Due Date
          </Text>

          <Text style={styles.dueDate}>
            21 May
          </Text>

        </View>

        <View style={styles.radioSelected}>
          <Text style={styles.radioDot}>
            ○
          </Text>
        </View>

      </TouchableOpacity>

      <TouchableOpacity style={styles.creditCard}>

        <View>
       <Image source={require('@/assets/images/sboi.png')} style={styles.bankIcon} />
          
        </View>

        <View style={styles.cardDetails}>

          <Text style={styles.bankName}>
            SBI Bank
          </Text>

          <Text style={styles.cardType}>
            Credit Card
          </Text>

          <Text style={styles.cardNumber}>
            •••• 5678
          </Text>

        </View>

        <View style={styles.billDetails}>

          <Text style={styles.smallText}>
            Total Due
          </Text>

          <Text style={styles.totalAmount}>
            ₹5,780.00
          </Text>

          <Text style={styles.smallText}>
            Due Date
          </Text>

          <Text style={styles.dueDate}>
            25 May
          </Text>

        </View>

        <View style={styles.radio}>
          <Text style={styles.radioEmpty}>
            ○
          </Text>
        </View>

      </TouchableOpacity>

      <View style={styles.notice}>

        <View style={styles.noticeIcon}>
          <Text>ⓘ</Text>
        </View>

        <Text style={styles.noticeText}>
          You will be redirected to your bank's secure portal
          to complete the payment.
        </Text>

      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Pay Bill
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
  bankIcon: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  cardIcon: {
    fontSize: 23,
    color: "#3E6B4A",
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
    marginBottom: 10,
  },

  creditCardSelected: {
    minHeight: 125,
    borderWidth: 1,
    borderColor: "#DCE2DE",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  creditCard: {
    minHeight: 125,
    borderWidth: 1,
    borderColor: "#DCE2DE",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  hdfcLogo: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 20,
  },

  bankLogoSbi: {
    width: 42,
    height: 42,
    borderRadius: 22,
    backgroundColor: "#2174C7",
    justifyContent: "center",
    alignItems: "center",
  },

  sbiLogo: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 20,
  },

  cardDetails: {
    flex: 1,
    marginLeft: 10,
  },

  bankName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#17221B",
  },

  cardType: {
    fontSize: 11,
    color: "#6F7772",
    marginTop: 2,
  },

  cardNumber: {
    fontSize: 12,
    marginTop: 12,
    letterSpacing: 1,
  },

  billDetails: {
    width: 80,
  },

  smallText: {
    fontSize: 9,
    color: "#777",
    marginTop: 3,
  },

  totalAmount: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 2,
    marginBottom: 6,
  },

  dueDate: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 2,
  },

  radioSelected: {
    marginLeft: 5,
  },

  radio: {
    marginLeft: 5,
  },

  radioDot: {
    color: "#3E6B4A",
    fontSize: 20,
  },

  radioEmpty: {
    color: "#8A928D",
    fontSize: 22,
  },

  notice: {
    backgroundColor: "#F3F8F9",
    borderRadius: 12,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  noticeIcon: {
    marginRight: 10,
  },

  noticeText: {
    flex: 1,
    fontSize: 11,
    color: "#586560",
    lineHeight: 17,
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