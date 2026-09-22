import React, { useState } from "react";
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Modal, Pressable, Image, ScrollView } from "react-native";
import { router } from "expo-router";

export default function FastTag() {
  const [selectedProvider, setSelectedProvider] = useState("");

  const [vehicleNumber, setVehicleNumber] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const selectProvider = (provider: string) => {
    setSelectedProvider(provider);
    setVehicleNumber("");
    setShowPopup(true);
  };

  const confirmProvider = () => {
    if (vehicleNumber.trim() === "") {
      return;
    }

    setShowPopup(false);

    router.push({
      pathname: "./fasttag_payment",
      params: { provider: selectedProvider, vehicle: vehicleNumber },
    });
  };

  const getProviderLogo = (provider: string) => {
    switch (provider) {
      case "IDFC FIRST FASTag":
        return require('@/assets/images/IDFC.png');
      case "ICICI Bank FASTag":
        return require('@/assets/images/ICICI.png');
      case "State Bank of India SBI - FASTag":
        return require('@/assets/images/sboi.png');
      case "Axis Bank FAstag":
        return require('@/assets/images/axis.png');
      default:
        return require('@/assets/images/IDFC.png');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.infoCard}>
        <View style={styles.infoIcon}>
          <FontAwesome6 name="car-rear" size={30} iconStyle="solid" color="green" />
        </View>
        <View>
          <Text style={styles.infoTitle}>Recharge your FASTag</Text>
          <Text style={styles.infoSubtitle}>Fast • Safe • Convenient</Text>
        </View>
      </View>

      <View style={styles.inputBox2}>
        <TextInput
          style={styles.input}
          placeholder="Search by Bank name"
          placeholderTextColor="#89918C"
        />
      </View>

      <Text style={styles.sectionTitle}>Popular banks</Text>

      <View style={styles.providerGrid}>
        <TouchableOpacity
          style={styles.providerCard}
          onPress={() => selectProvider("IDFC FIRST FASTag")}
          activeOpacity={0.7}
        >
          <View style={styles.logoBox}>
            <Image source={require('@/assets/images/IDFC.png')} style={styles.imagebox} />
          </View>
          <Text style={styles.providerName}>IDFC FIRST FASTag</Text>
          <View style={styles.popularTag}>
            <Text style={styles.popularText}>Popular</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.providerCard} 
          onPress={() => selectProvider("ICICI Bank FASTag")} 
          activeOpacity={0.7}
        >
          <View style={styles.logoBox}>
            <Image source={require('@/assets/images/ICICI.png')} style={styles.imagebox} />
          </View>
          <Text style={styles.providerName}>ICICI Bank FASTag</Text>
          <View style={styles.popularTag}>
            <Text style={styles.popularText}>Popular</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.providerCard} 
          onPress={() => selectProvider("State Bank of India SBI - FASTag")} 
          activeOpacity={0.7}
        >
          <View style={styles.logoBox}>
            <Image source={require('@/assets/images/sboi.png')} style={styles.imagebox} />
          </View>
          <Text style={styles.providerName}>
            State Bank of India {'\n'}SBI - FASTag
          </Text>
          <View style={styles.popularTag}>
            <Text style={styles.popularText}>Popular</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.providerCard} 
          onPress={() => selectProvider("Axis Bank FAstag")} 
          activeOpacity={0.7}
        >
          <View style={styles.logoBox}>
            <Image source={require('@/assets/images/axis.png')} style={{ width: 70, height: 50, resizeMode: "contain" }} />
          </View>
          <Text style={styles.providerName}>Axis Bank FAstag</Text>
          <View style={styles.popularTag}>
            <Text style={styles.popularText}>Popular</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomInfo}>
        <Text style={styles.infoSmallIcon}>●</Text>
        <Text style={styles.bottomInfoText}>Select your FASTag provider to continue</Text>
      </View>

      <Modal
        visible={showPopup}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowPopup(false)}
      >
        <View style={styles.modalContainer}>
          <Pressable style={styles.modalOverlay} onPress={() => setShowPopup(false)} />

          <View style={styles.bottomSheet}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setShowPopup(false)}>
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>

            <Text style={styles.popupHeading}>FASTag Details</Text>

            <View style={styles.selectedProvider}>
              <View style={styles.popupLogo}>
                <Image source={getProviderLogo(selectedProvider)} style={styles.imagebox} />
              </View>

              <View>
                <Text style={styles.selectedLabel}>Selected Provider</Text>
                <Text style={styles.selectedName}>{selectedProvider}</Text>
              </View>
            </View>

            <Text style={styles.inputLabel}>Vehicle Number</Text>

            <View style={styles.vehicleInputBox}>
              <TextInput
                style={styles.vehicleInput}
                placeholder="e.g. MH12AB1234"
                placeholderTextColor="#8A928D"
                value={vehicleNumber}
                onChangeText={setVehicleNumber}
                autoCapitalize="characters"
                maxLength={10}
              />
            </View>

            <Text style={styles.helperText}>Enter your vehicle number linked with FASTag</Text>

            <TouchableOpacity
              style={[
                styles.confirmButton,
                vehicleNumber.trim() === "" && styles.disabledButton,
              ]}
              onPress={confirmProvider}
              disabled={vehicleNumber.trim() === ""}
            >
              <Text style={styles.confirmText}>Confirm & Continue</Text>
            </TouchableOpacity>

            <View style={styles.secureRow}>
              <Text style={styles.lockIcon}>🔒</Text>
              <Text style={styles.secureText}>Your information is secure</Text>
            </View>
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
  infoCard: {
    backgroundColor: "#e8fbed",
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },
  infoIcon: {
    width: 50,
    height: 50,
    borderRadius: 28,
    backgroundColor: "#DDEFE2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#173022",
  },
  infoSubtitle: {
    fontSize: 12,
    color: "#68756D",
    marginTop: 4,
  },
  inputBox2: {
    height: 50,
    borderWidth: 1,
    borderColor: "#D7DEDA",
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#17221B",
    marginBottom: 12,
  },
  providerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  providerCard: {
    width: "48%",
    height: 130,
    borderWidth: 1,
    borderColor: "#DCE3DE",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 5,
  },
  imagebox: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  logoBox: {
    width: 55,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
  },
  providerName: {
    fontSize: 11,
    fontWeight: "600",
    color: "#17221B",
    textAlign: "center",
  },
  popularTag: {
    backgroundColor: "#3E6B4A",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginTop: 6,
  },
  popularText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "600",
  },
  bottomInfo: {
    backgroundColor: "#F1F8F3",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  infoSmallIcon: {
    color: "#3E6B4A",
    marginRight: 10,
  },
  bottomInfoText: {
    color: "#526158",
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  bottomSheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 30,
  },
  closeButton: {
    position: "absolute",
    right: 18,
    top: 12,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  closeText: {
    fontSize: 28,
    color: "#555D58",
  },
  popupHeading: {
    fontSize: 19,
    fontWeight: "700",
    color: "#17221B",
    marginBottom: 18,
  },
  selectedProvider: {
    backgroundColor: "#EEF8F1",
    borderRadius: 13,
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  popupLogo: {
    width: 52,
    height: 45,    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  selectedLabel: {
    fontSize: 10,
    color: "#758079",
  },
  selectedName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#17221B",
    marginTop: 3,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#17221B",
    marginBottom: 8,
  },
  vehicleInputBox: {
    height: 55,
    borderWidth: 1,
    borderColor: "#D5DDD8",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },
  vehicleInput: {
    flex: 1,
    fontSize: 15,
    color: "#17221B",
    fontWeight: "500",
  },
  helperText: {
    fontSize: 10,
    color: "#7A837D",
    marginTop: 6,
    marginBottom: 18,
  },
  confirmButton: {
    height: 54,
    borderRadius: 28,
    backgroundColor: "#3E6B4A",
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#AAB5AE",
  },
  confirmText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  secureRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 13,
  },
  lockIcon: {
    fontSize: 12,
    marginRight: 5,
  },
  secureText: {
    fontSize: 10,
    color: "#778079",
  },
});