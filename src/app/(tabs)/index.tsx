import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions,ImageBackground} from "react-native";
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

        <ScrollView horizontal showsHorizontalScrollIndicator={false}contentContainerStyle={styles.accountsContainer}>
            <ImageBackground source={require("@/assets/images/card3.png")} style={styles.accountCard} imageStyle={styles.accountCardImage}>
              <View style={styles.accountHeader}>
                <View style={styles.bankIdentity}>
                  <View style={styles.bankLogo}>
          <Image  source={require("@/assets/images/hdfc.png")}  style={styles.bankIcon}/>
        </View>

        <View style={styles.bankInfo}>
          <Text style={styles.bankName}>HDFC Bank</Text>

          <Text style={styles.accountNumber}>
            Savings •••• 1234
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.cardMenu}>
        <Ionicons
          name="ellipsis-horizontal"
          size={18}
          color="#5D675A"
        />
      </TouchableOpacity>
    </View>

    <View style={styles.balanceSection}>
      <Text style={styles.balanceLabel}>
        Available Balance
      </Text>

      <Text style={styles.balance}>
        ₹2,24,560.50
      </Text>
    </View>

    <View style={styles.cardFooter}>
      <View>
        <Text style={styles.footerLabel}>Account Type</Text>
        <Text style={styles.footerValue}>Primary Account</Text>
      </View>

      <View style={styles.activeBadge}>
        <View style={styles.activeDot} />
        <Text style={styles.activeText}>Active</Text>
      </View>
    </View>
  </ImageBackground>

    <ImageBackground source={require("@/assets/images/card3.png")} style={styles.accountCard2} imageStyle={styles.accountCardImage}>
    <View style={styles.accountHeader}>
      <View style={styles.bankIdentity}>
        <View style={styles.bankLogo}>
          <Image
            source={require("@/assets/images/sboi.png")}
            style={styles.bankIcon}
          />
        </View>

        <View style={styles.bankInfo}>
          <Text style={styles.bankName} numberOfLines={1}>
            State Bank of India
          </Text>

          <Text style={styles.accountNumber}>
            Savings •••• 5678
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.cardMenu}>
        <Ionicons
          name="ellipsis-horizontal"
          size={18}
          color="#5D675A"
        />
      </TouchableOpacity>
    </View>

    <View style={styles.balanceSection}>
      <Text style={styles.balanceLabel}>
        Available Balance
      </Text>

      <Text style={styles.balance}>
        ₹56,780.20
      </Text>
    </View>

    <View style={styles.cardFooter}>
      <View>
          <Text style={styles.footerLabel}>Account Type</Text>
              <Text style={styles.footerValue}>Savings Account</Text>
                </View>

                 <View style={styles.activeBadge}>
                     <View style={styles.activeDot} />
                       <Text style={styles.activeText}>Active</Text>
                       </View>
                 </View>

                   </ImageBackground>
                
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
    backgroundColor: "#f4f9f5",
  },

  scrollContent: {
    paddingBottom: 50,
  },

  greetingSection: {
    paddingHorizontal: 26,
    paddingTop: 14,
    paddingBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  smallGreeting: {
    fontSize: 13,
    color: "#202820",
    marginBottom: 3,
    fontFamily: 'SoraRegular',
  },

  userName: {
    fontSize: 27,
    color: "#202820",
    letterSpacing: -0.1,
    fontFamily: 'SoraBold',
  },

searchContainer: {
    marginHorizontal: 20,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E8ECE6",
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 12,
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
    fontFamily: 'DMSanRegular',
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
    marginHorizontal: 26,
    marginTop: 25,
    marginBottom: 13,
    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sectionTitle: {
    fontSize: 17,
    color: "#070808",
    fontFamily: 'SoraSemibold',
  },

  sectionSubtitle: {
    fontSize: 11,
    color: "#000100",
    marginTop: 3,
    fontFamily: 'DMSanRegular',
  },

  viewAll: {
    fontSize: 12,
    color: "#4A7046",
    fontFamily: 'SoraRegular',
  },

  accountsContainer: {
  paddingLeft: 20,
  paddingRight: 20,
  paddingVertical: 9,
},

accountCard: {
  width: width * 0.89,
  height: 230,
  backgroundColor: "#FFFFFF",
  borderRadius: 22,
  padding: 23,
  marginRight: 17,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: "#d3e2d3",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.07,
  shadowRadius: 12,
  elevation: 3,
},
accountCard2:{
  width: width * 0.89,
  height: 230,
  backgroundColor: "#FFFFFF",
  borderRadius: 22,
  padding: 23,
  marginLeft: 8,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: "#d3e2d3",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.07,
  shadowRadius: 12,
  elevation: 3,

},

 accountCardImage: {
    borderRadius: 22,
    resizeMode: "cover",
    opacity: 0.5,
    tintColor: '#3aab93'
  },

accountHeader: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
},

bankIdentity: {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
},

bankLogo: {
  width: 46,
  height: 46,
  justifyContent: "center",
  alignItems: "center",
},

bankIcon: {
  width: 45,
  height: 45,
  resizeMode: "contain",
},

bankInfo: {
  flex: 1,
  marginLeft: 12,
  paddingRight: 8,
},

bankName: {
  fontSize: 16,
  color: "#202820",
  fontFamily: "DMSanSemibold",
},

accountNumber: {
  fontSize: 11,
  color: "#7B8479",
  marginTop: 4,
  fontFamily: "DMSanRegular",
},

cardMenu: {
  width: 34,
  height: 34,

  borderRadius: 11,

  backgroundColor: "#F5F7F3",

  justifyContent: "center",
  alignItems: "center",
},

balanceSection: {
  marginTop: 20,
  marginLeft: 7
},

balanceLabel: {
  fontSize: 11,
  color: "#7A8478",
  fontFamily: "DMSanRegular",
  marginBottom: 4,
},

balance: {
  fontSize: 26,
  color: "#315C3A",
  letterSpacing: -0.5,
  fontFamily: "ManropeExtraBold",
},

cardFooter: {
  flexDirection: "row",
  alignItems: "flex-end",
  justifyContent: "space-between",
  marginLeft: 10,
  marginTop: 13,
  paddingTop: 11,
  borderTopWidth: 1,
  borderTopColor: "#EDF1EB",
},

footerLabel: {
  fontSize: 9,
  color: "#050505",
  fontFamily: "DMSanRegular",
},

footerValue: {
  fontSize: 10,
  color: "#4E574C",
  marginTop: 2,
  fontFamily: "DMSanSemibold",
},

activeBadge: {
  flexDirection: "row",
  alignItems: "center",

  paddingHorizontal: 9,
  paddingVertical: 5,

  borderRadius: 20,

  backgroundColor: "#EEF6EC",
},

activeDot: {
  width: 6,
  height: 6,
  borderRadius: 3,

  backgroundColor: "#4D8A52",

  marginRight: 5,
},

activeText: {
  fontSize: 9,
  color: "#4D754C",
  fontFamily: "DMSanMedium",
},

  scanPay: {
    marginHorizontal: 20,
    marginTop: 20,
    minHeight: 82,
    backgroundColor: "#205648",
    borderRadius: 19,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D0DFCA",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 1,
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
    color: "#eef2ec",
    fontFamily: 'SoraBold',
  },

  scanSubtitle: {
    fontSize: 11,
    color: "#daead3",
    fontFamily: 'DMSanRegular',
    marginTop: 4,
    lineHeight: 16,
  },

  arrowButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#3d7663",
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
    color: "#0c0e0b",
    fontFamily: 'DMSanMedium',
    marginTop: 8,
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
    color: "#30362E",
    marginTop: 9,
    fontFamily: 'DMSanSemibold',
    textAlign: "center",
  },

  serviceSub: {
    fontSize: 9,
    color: "#929890",
    fontFamily: 'DMSanRegular',
    marginTop: 4,
    textAlign: "center",
  },
});