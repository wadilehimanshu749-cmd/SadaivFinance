import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions,} from "react-native";

import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.greetingSection}>
          <View>
            <Text style={styles.smallGreeting}>Good Morning 👋</Text>

            <Text style={styles.userName}>Rahul Patil</Text>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={21} color="#7C847B"/>

          <TextInput placeholder="Search name, UPI ID or mobile" placeholderTextColor="#9A9F99" style={styles.searchInput}/>

          <TouchableOpacity style={styles.scanIcon}>
            <Ionicons name="scan-outline" size={21} color="#304B2F" />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Your Accounts</Text>
            <Text style={styles.sectionSubtitle}>
              Manage your linked bank accounts
            </Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.accountsContainer}>
          <View style={styles.accountCard}>
            <View style={styles.accountTop}>
              <View style={styles.bankLogo}>
                <Image source={require('@/assets/images/hdfc.png')} style={styles.bankIcon} />
              </View>

              <View style={styles.bankInfo}>
                <Text style={styles.bankName}>HDFC Bank</Text>

                <Text style={styles.accountNumber}>
                  Savings •••• 1234
                </Text>
              </View>

            </View>

            <View style={styles.balanceSection}>
              <Text style={styles.balanceLabel}>Available Balance</Text>

              <Text style={styles.balance}>
                ₹2,24,560.50
              </Text>
            </View>
          </View>

          <View style={styles.accountCard}>
            <View style={styles.accountTop}>
              <View style={[styles.bankLogo, styles.sbiLogo]}>
                <Image source={require('@/assets/images/sboi.png')} style={styles.bankIcon} />
              </View>

              <View style={styles.bankInfo}>
                <Text style={styles.bankName}>
                  State Bank of India
                </Text>

                <Text style={styles.accountNumber}>
                  Savings •••• 5678
                </Text>
              </View>

            </View>

            <View style={styles.balanceSection}>
              <Text style={styles.balanceLabel}>Available Balance</Text>

              <Text style={styles.balance}>
                ₹56,780.20
              </Text>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.scanPay}>
          <View style={styles.qrContainer}>
            <Ionicons  name="qr-code-outline"  size={27}  color="#31512F"/>
          </View>

          <View style={styles.scanContent}>
            <Text style={styles.scanTitle}>
              Scan & Pay
            </Text>

            <Text style={styles.scanSubtitle}>
              Scan any QR code and make instant payments
            </Text>
          </View>

          <View style={styles.arrowButton}>
            <Ionicons name="arrow-forward" size={18} color="#FFFFFF"/>
          </View>
        </TouchableOpacity>

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Quick Actions</Text>

            <Text style={styles.sectionSubtitle}>
              Payments & everyday services
            </Text>
          </View>
        </View>

        <View style={styles.quickActions}>
          <QuickAction imageSource={require("@/assets/images/send.png")} imageSize={25} text="Send Money" onPress={() => router.push("/send_money")}/>

          <QuickAction
            icon="phone-portrait-outline"
            text="To Mobile"
            onPress={() => router.push("/to_mobile")}
          />

          <QuickAction
            imageSource={require("@/assets/images/upi-icon.png")}
            plainImage
            imageSize={34}
            text="To UPI ID"
            onPress={() => router.push("/upi")}
          />

          <QuickAction
            icon="person-outline"
            text="Self Transfer"
            onPress={() => router.push("/self_transfer")}
          />

          <QuickAction
            icon="phone-portrait-outline"
            text="Recharge"
            onPress={() => router.push("/mobile_recharge")}
          />

          <QuickAction
            icon="receipt-outline"
            text="Utility Bills"
            onPress={() => router.push("/utility_bills")}
          />

          <QuickAction
            icon="card-outline"
            text="Credit Card"
            onPress={() => router.push("/credit_card_bill")}
          />

          <QuickAction
            imageSource={require("@/assets/images/fastag.png")}
            plainImage
            imageSize={38}
            text="FASTag"
            onPress={() => router.push("/fasttag")}
          />
        </View>

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Explore More</Text>

            <Text style={styles.sectionSubtitle}>
              More ways to manage your money
            </Text>
          </View>
        </View>

        <View style={styles.services}>
          <Service
            icon="💰"
            text="Digital Gold"
            sub="Buy 24K Gold"
          />

          <Service
            icon="📈"
            text="SIP Investment"
            sub="Start SIP"
          />

          <Service
            icon="🛡️"
            text="Insurance"
            sub="Protect Now"
          />

          <Service
            icon="🔔"
            text="Reminders"
            sub="3 Dues"
          />
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const QuickAction = ({
  icon,
  text,
  imageSource,
  imageSize = 30,
  onPress,
  plainImage = false,
}: {
  icon?: any;
  imageSource?: any;
  text: string;
  imageSize?: number;
  onPress?: () => void;
  plainImage?: boolean;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={styles.quickAction}
    >
      {imageSource ? (
        <View
          style={
            plainImage
              ? styles.plainImageContainer
              : styles.iconContainer
          }
        >
          <Image
            source={imageSource}
            style={{
              width: imageSize,
              height: imageSize,
              resizeMode: "contain",
            }}
          />
        </View>
      ) : (
        <View style={styles.iconContainer}>
          <Ionicons
            name={icon}
            size={23}
            color="#466A42"
          />
        </View>
      )}

      <Text style={styles.quickActionText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const Service = ({
  icon,
  text,
  sub,
}: {
  icon: string;
  text: string;
  sub: string;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.service}
    >
      <View style={styles.serviceIconContainer}>
        <Text style={styles.serviceIcon}>
          {icon}
        </Text>
      </View>

      <Text style={styles.serviceText}>
        {text}
      </Text>

      <Text style={styles.serviceSub}>
        {sub}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F3",
  },

  scrollContent: {
    paddingBottom: 50,
  },

  greetingSection: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  smallGreeting: {
    fontSize: 13,
    color: "#7A8177",
    marginBottom: 3,
    fontWeight: "500",
    fontFamily: 'Roboto Slab',
  },

  userName: {
    fontSize: 27,
    color: "#202820",
    fontWeight: "700",
    letterSpacing: -0.1,
    fontFamily: 'Roboto Slab',
  },

searchContainer: {
    marginHorizontal: 20,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E8ECE6",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 1,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: "#222",
    paddingVertical: 0,
    fontFamily: 'Roboto'
  },

  scanIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#F0F5ED",
    justifyContent: "center",
    alignItems: "center",
  },

  sectionHeader: {
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 13,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#252D24",
    fontFamily: 'Roboto Slab',
  },

  sectionSubtitle: {
    fontSize: 11,
    color: "#8B9289",
    marginTop: 3,
    fontFamily: 'Roboto Slab',
  },

  viewAll: {
    fontSize: 13,
    color: "#4A7046",
    fontWeight: "600",
    fontFamily: 'Roboto Slab'
  },

  accountsContainer: {
    paddingLeft: 30,
    paddingRight: 15,
  },

  accountCard: {
    width: width * 0.65,
    height: 165,
    backgroundColor: "#fefefe",
    borderRadius: 20,
    padding: 25,
    marginRight: 30,
    overflow: "hidden",
    shadowColor: "#243B22",
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },

    elevation: 5,
  },

  accountTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  bankLogo: {
    width: 42,
    height: 42,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },

  sbiLogo: {
    backgroundColor: "#E8F0E5",
  },

  bankIcon:{
    height: 40,
    width: 40

  },

  bankInfo: {
    flex: 1,
    marginLeft: 12,
  },

  bankName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#366f50",
    fontFamily: 'Roboto Slab'
  },

  accountNumber: {
    fontSize: 11,
    color: "#366f50",
    marginTop: 4,
    fontFamily: 'Roboto Slab'
  },

  balanceSection: {
    marginTop: 20,
  },

  balanceLabel: {
    fontSize: 10,
    color: "#366f50",
    marginBottom: 3,
    fontFamily: 'Roboto Slab'
  },

  balance: {
    fontSize: 24,
    fontWeight: "700",
    color: "#366f50",
    letterSpacing: -0.4,
    fontFamily: 'Roboto Slab'
  },

  scanPay: {
    marginHorizontal: 20,
    marginTop: 20,
    minHeight: 82,
    backgroundColor: "#4c6342",
    borderRadius: 19,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D0DFCA",
  },

  qrContainer: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  scanContent: {
    flex: 1,
    marginLeft: 14,
  },

  scanTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#daead3",
    fontFamily: 'Roboto Slab'
  },

  scanSubtitle: {
    fontSize: 11,
    color: "#daead3",
    fontFamily: 'Roboto Slab',
    marginTop: 4,

    lineHeight: 16,
  },

  arrowButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#6c8163",
    justifyContent: "center",
    alignItems: "center",
  },

  quickActions: {
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: "#EDF0EB",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 1,
  },

  quickAction: {
    width: "25%",
    minHeight: 95,
    justifyContent: "center",
    alignItems: "center",
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#F0F5ED",
    justifyContent: "center",
    alignItems: "center",
  },

  plainImageContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  quickActionText: {
    fontSize: 9,
    color: "#3A4038",
    fontFamily: 'Roboto Slab',
    marginTop: 8,
    fontWeight: "400",
    textAlign: "center",
    paddingHorizontal: 2,
  },

  services: {
    marginHorizontal: 20,
    flexDirection: "row",
    gap: 10,
  },

  service: {
    flex: 1,
    minHeight: 125,
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: "#EDF0EB",
  },

  serviceIconContainer: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#F2F6EF",
    justifyContent: "center",
    alignItems: "center",
  },

  serviceIcon: {
    fontSize: 20,
  },

  serviceText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#30362E",
    marginTop: 9,
    fontFamily: 'Roboto Slab',
    textAlign: "center",
  },

  serviceSub: {
    fontSize: 9,
    color: "#929890",
    marginTop: 4,
    textAlign: "center",
  },
});