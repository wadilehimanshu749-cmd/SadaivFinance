import React, { useState } from "react";
import {View,Text,TouchableOpacity,StyleSheet,Alert,TextInput,ScrollView,Modal,Pressable,Image} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function SelfTransfer() {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getSourceAccounts = () => {
    if (selectedAccount === "HDFC Bank") {
      return [
        {
          name: "State Bank of India",
          accNo: "•••• 5678",
          balance: "₹56,780.20",
          icon: require('@/assets/images/sboi.png'),
        },
      ];
    } else if (selectedAccount === "State Bank of India") {
      return [
        {
          name: "HDFC Bank",
          accNo: "•••• 1234",
          balance: "₹1,24,560.50",
          icon: require('@/assets/images/hdfc.png'),
        },
      ];
    }
    return [];
  };

  const handleTransferPress = () => {
  if (!selectedAccount) {
    Alert.alert("Select Account", "Please select a destination account.");
    return;
  }

  if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
    Alert.alert("Enter Amount", "Please enter a valid amount.");
    return;
  }
  setIsModalVisible(true);
};

const handleConfirmTransfer = (sourceBankName: string) => {

  console.log("SOURCE:", sourceBankName);
  console.log("DESTINATION:", selectedAccount);
  console.log("AMOUNT:", amount);

  alert(
    `₹${amount} transferred from ${sourceBankName} to ${selectedAccount}`
  );

  setIsModalVisible(false);
};

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.infoCard}>

        <View style={styles.infoIcon}>
          <FontAwesome size={20} name="bank" color="green"/>
        </View>

        <View>
          <Text style={styles.infoTitle}>
            Transfer to your account
          </Text>

          <Text style={styles.infoSubtitle}>
            Select the account where you want to transfer money.
          </Text>
        </View>

      </View>

        <TouchableOpacity
          style={[
            styles.accountCard,
            selectedAccount === "HDFC Bank" && styles.selectedCard,
          ]}
          onPress={() => setSelectedAccount("HDFC Bank")}>
          
            <Image source={require('@/assets/images/hdfc.png')} style={styles.bankIcon} />

          <View style={styles.accountInfo}>
            <Text style={styles.bankName}>HDFC Bank</Text>
            <Text style={styles.accountNumber}>•••• 1234</Text>
            <Text style={styles.balance}>₹1,24,560.50</Text>
          </View>

          <Text style={styles.radio}>
            {selectedAccount === "HDFC Bank" ? "●" : "○"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.accountCard,
            selectedAccount === "State Bank of India" && styles.selectedCard,
          ]}
          onPress={() => setSelectedAccount("State Bank of India")}>
         <Image source={require('@/assets/images/sboi.png')} style={styles.bankIcon} />

            <View style={styles.accountInfo}>
            <Text style={styles.bankName}>State Bank of India</Text>
            <Text style={styles.accountNumber}>•••• 5678</Text>
            <Text style={styles.balance}>₹56,780.20</Text>
          </View>

          <Text style={styles.radio}>
            {selectedAccount === "State Bank of India" ? "●" : "○"}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>Amount</Text>

        <View style={styles.inputBox}>
          <Text style={styles.rupee}>₹</Text>
          <TextInput style={styles.amountInput} placeholder="500" keyboardType="numeric" value={amount} onChangeText={setAmount} placeholderTextColor={'#89918C'} />
        </View>

        <Text style={styles.label}>
                Add Note <Text style={styles.optional}>(Optional)</Text>
              </Text>
        
              <TextInput style={styles.noteBox}placeholder="e.g. For dinner" placeholderTextColor={'#89918C'}/>

        <TouchableOpacity style={styles.button} onPress={handleTransferPress}>
          <Text style={styles.buttonText}>Transfer Money</Text>
        </TouchableOpacity>
        <View style={styles.secureBox}>
                <Text style={styles.secureIcon}>🛡️</Text>
        
                <Text style={styles.secureText}>
                  Money will be transferred securely via UPI
                </Text>
              </View>
      </ScrollView>

      <Modal visible={isModalVisible} transparent={true} animationType="slide" onRequestClose={() => setIsModalVisible(false)}>
     <View style={styles.modalOverlay}>

    <View style={styles.bottomSheet}>

      <View style={styles.modalHeaderHandle} />

      <Text style={styles.modalTitle}>
        Transfer From
      </Text>

      <Text style={styles.modalSubtitle}>
        Select the bank account to debit money from:
      </Text>

      {getSourceAccounts().map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.sourceAccountCard}
          onPress={() => {
            console.log("CLICKED:", item.name);

            handleConfirmTransfer(item.name);
          }}
        >

          <Image
            source={item.icon}
            style={styles.bankIcon}
          />

          <View style={styles.accountInfo}>
            <Text style={styles.bankName}>
              {item.name}
            </Text>

            <Text style={styles.accountNumber}>
              {item.accNo}
            </Text>
          </View>

          <Text style={styles.balance}>
            {item.balance}
          </Text>

        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => setIsModalVisible(false)}
      >
        <Text style={styles.cancelButtonText}>
          Cancel
        </Text>
      </TouchableOpacity>

    </View>

  </View>
</Modal>
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
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    marginTop: 5
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

  upiIcon: {
    color: "#3E6B4A",
    fontSize: 24,
    fontWeight: "bold",
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
  
  accountCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E5E1",
    backgroundColor: "white",
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
  },
  selectedCard: {
    borderColor: "#3E6B4A",
    backgroundColor: "#F2F8F3",
  },
  bankIcon: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  bankIconText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#3E6B4A",
  },
  accountInfo: {
    flex: 1,
  },
  bankName: {
    fontSize: 15,
    fontWeight: "600",
  },
  accountNumber: {
    color: "#777",
    marginTop: 3,
  },
  balance: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 5,
  },
  radio: {
    fontSize: 22,
    color: "#3E6B4A",
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 8,
  },
  rupee: {
    fontSize: 20,
    fontWeight: "600",
  },
  button: {
    height: 55,
    borderRadius: 28,
    backgroundColor: "#4c6342",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "600",
  },
  amountInput: {
    flex: 1,
    fontSize: 15,
    marginLeft: 8,
    color: "#222222",
  },
  inputBox: {
    height: 40,
    borderWidth: 1,
    borderColor: "#D5DAD7",
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "flex-end",
  },
  bottomSheet: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 30,
  },
  modalHeaderHandle: {
    width: 40,
    height: 4,
    backgroundColor: "#D0D0D0",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#18251E",
  },
  modalSubtitle: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
    marginBottom: 16,
  },
  sourceAccountCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E5E1",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#FAFAFA",
  },
  cancelButton: {
    marginTop: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#888",
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
  optional: {
    fontWeight: "400",
    color: "#777777",
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