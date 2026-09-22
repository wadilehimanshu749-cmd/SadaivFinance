import React, { useState } from "react";
import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Modal,ScrollView} from "react-native";

import { useLocalSearchParams, router } from "expo-router";

export default function FastTagPayment() {

  const { provider, vehicle } = useLocalSearchParams();

  const [amount, setAmount] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const customerName = "Himanshu Wadile";

  const fastTagBalance = 850.50;


  const selectAmount = (value: string) => {
    setAmount(value);
  };

  const proceedPayment = () => {

    if (amount.trim() === "") {
      return;
    }

    setShowSuccess(true);
  };

  const getBankLogo = () => {

    if (provider === "IDFC FIRST FASTag") {
      return require("@/assets/images/IDFC.png");
    }

    if (provider === "ICICI Bank FASTag") {
      return require("@/assets/images/ICICI.png");
    }

    if (provider === "State Bank of India SBI - FASTag") {
      return require("@/assets/images/sboi.png");
    }

    return require("@/assets/images/axis.png");
  };


  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.bankCard}>

        <View style={styles.logoContainer}>
          <Image
            source={getBankLogo()}
            style={styles.bankLogo}
          />
        </View>

        <View style={styles.bankDetails}>

          <Text style={styles.bankLabel}>
            FASTag Provider
          </Text>

          <Text style={styles.bankName}>
            {provider}
          </Text>

        </View>

      </View>


      <Text style={styles.sectionTitle}>
        FASTag Details
      </Text>

      <View style={styles.detailsCard}>

        <View style={styles.detailRow}>

          <Text style={styles.detailLabel}>
            Customer Name
          </Text>

          <Text style={styles.detailValue}>
            {customerName}
          </Text>

        </View>


        <View style={styles.detailRow}>

          <Text style={styles.detailLabel}>
            Vehicle Number
          </Text>

          <Text style={styles.detailValue}>
            {vehicle}
          </Text>

        </View>


        <View style={styles.balanceBox}>

          <View>

            <Text style={styles.balanceLabel}>
              FASTag Balance
            </Text>

            <Text style={styles.balanceAmount}>
              ₹{fastTagBalance.toFixed(2)}
            </Text>

          </View>

          <Text style={styles.balanceStatus}>
            Active
          </Text>

        </View>

      </View>


      <Text style={styles.sectionTitle}>
        Enter Recharge Amount
      </Text>


      <View style={styles.amountBox}>

        <Text style={styles.rupee}>
          ₹
        </Text>

        <TextInput
          style={styles.amountInput}
          placeholder="Enter amount"
          placeholderTextColor="#89918C"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          maxLength={6}
        />

      </View>


      <View style={styles.quickAmountRow}>

        <TouchableOpacity
          style={styles.quickAmount}
          onPress={() => selectAmount("200")}
        >
          <Text style={styles.quickAmountText}>
            ₹200
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.quickAmount}
          onPress={() => selectAmount("500")}
        >
          <Text style={styles.quickAmountText}>
            ₹500
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.quickAmount}
          onPress={() => selectAmount("1000")}
        >
          <Text style={styles.quickAmountText}>
            ₹1000
          </Text>
        </TouchableOpacity>

      </View>


      <TouchableOpacity
        style={[
          styles.proceedButton,
          amount.trim() === "" && styles.disabledButton,
        ]}
        onPress={proceedPayment}
        disabled={amount.trim() === ""}
      >

        <Text style={styles.proceedText}>
          Proceed to Pay
        </Text>

      </TouchableOpacity>


      <View style={styles.secureRow}>

        <Text style={styles.lock}>
          🔒
        </Text>

        <Text style={styles.secureText}>
          Your payment information is secure
        </Text>

      </View>


      <Modal
        visible={showSuccess}
        transparent
        animationType="fade"
        onRequestClose={() => setShowSuccess(false)}>

        <View style={styles.successOverlay}>

          <View style={styles.successBox}>

            <View style={styles.successIcon}>
              <Text style={styles.check}>
                ✓
              </Text>
            </View>


            <Text style={styles.successTitle}>
              Recharge Successful
            </Text>


            <Text style={styles.successMessage}>
              Your FASTag has been recharged successfully.
            </Text>


            <Text style={styles.successAmount}>
              ₹{amount}
            </Text>


            <Text style={styles.successVehicle}>
              {vehicle}
            </Text>


            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => { setShowSuccess(false); router.back(); }}>

              <Text style={styles.doneText}>
                Done
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </Modal>
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


  bankCard: {
    backgroundColor: "#e8fbed",
    borderRadius: 16,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },

  logoContainer: {
    width: 60,
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  bankLogo: {
    width: 45,
    height: 40,
    resizeMode: "contain",
  },

  bankDetails: {
    flex: 1,
  },

  bankLabel: {
    fontSize: 11,
    color: "#718078",
    marginBottom: 3,
  },

  bankName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#17221B",
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#17221B",
    marginBottom: 12,
  },

  detailsCard: {
    borderWidth: 1,
    borderColor: "#DCE3DE",
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 15,
    marginBottom: 22,
  },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  detailLabel: {
    fontSize: 12,
    color: "#758079",
  },

  detailValue: {
    fontSize: 13,
    fontWeight: "600",
    color: "#17221B",
  },


  balanceBox: {
    borderTopWidth: 1,
    borderTopColor: "#E1E6E3",
    paddingTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  balanceLabel: {
    fontSize: 11,
    color: "#758079",
  },

  balanceAmount: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2F6843",
    marginTop: 3,
  },

  balanceStatus: {
    backgroundColor: "#DDF4E4",
    color: "#2F6843",
    fontSize: 11,
    fontWeight: "700",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  amountBox: {
    height: 58,
    borderWidth: 1,
    borderColor: "#CBD5CF",
    backgroundColor:'white',
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  rupee: {
    fontSize: 22,
    fontWeight: "700",
    color: "#3E6B4A",
    marginRight: 8,
  },

  amountInput: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: "#17221B",
  },

  quickAmountRow: {
    flexDirection: "row",
    marginTop: 12,
    marginBottom: 25,
  },

  quickAmount: {
    borderWidth: 1,
    borderColor: "#C9D5CD",
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginRight: 10,
  },

  quickAmountText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#3E6B4A",
  },

  proceedButton: {
    height: 54,
    borderRadius: 28,
    backgroundColor: "#4c6342",
    justifyContent: "center",
    alignItems: "center",
  },

  disabledButton: {
    backgroundColor: "#AAB5AE",
  },

  proceedText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  secureRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 14,
  },

  lock: {
    fontSize: 12,
    marginRight: 5,
  },

  secureText: {
    fontSize: 10,
    color: "#778079",
  },

  successOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  successBox: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 25,
    alignItems: "center",
  },

  successIcon: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: "#DDF4E4",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  check: {
    fontSize: 36,
    color: "#3E6B4A",
    fontWeight: "700",
  },

  successTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#17221B",
    marginBottom: 8,
  },

  successMessage: {
    textAlign: "center",
    fontSize: 12,
    color: "#718078",
    lineHeight: 18,
  },

  successAmount: {
    fontSize: 28,
    fontWeight: "800",
    color: "#3E6B4A",
    marginTop: 15,
  },

  successVehicle: {
    fontSize: 13,
    color: "#68756D",
    marginTop: 4,
  },

  doneButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#3E6B4A",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  doneText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

});
