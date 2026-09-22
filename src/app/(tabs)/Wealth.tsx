import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet,} from "react-native";

export default function Wealth() {
  return (
    
    <View style={styles.container}>


      <ScrollView showsVerticalScrollIndicator={false}contentContainerStyle={styles.scrollContent}>

      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <View style={styles.pageHeader}>

          <View>
            <Text style={styles.title}>
              Wealth & Gold
            </Text>

            <Text style={styles.subtitle}>
              Grow and manage your wealth
            </Text>
          </View>

        </View>


        <View style={styles.wealthCard}>

          <View style={styles.wealthHeader}>

            <View>
              <Text style={styles.wealthLabel}>
                Total Wealth
              </Text>

              <Text style={styles.wealthAmount}>
                ₹1,34,560
              </Text>
            </View>

          </View>

          <View style={styles.returnBox}>
            <Text style={styles.returnText}>
              ↑ +12.5% this month
            </Text>
          </View>

        </View>


        <Text style={styles.sectionTitle}>
          Quick Actions
        </Text>

        <View style={styles.quickActions}>

          <TouchableOpacity style={styles.quickItem}>
            <View style={styles.quickIcon}>
              <Text style={styles.quickIconText}>+</Text>
            </View>

            <Text style={styles.quickText}>
              Add Money
            </Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.quickItem}>
            <View style={styles.quickIcon}>
              <Text style={styles.quickIconText}>↗</Text>
            </View>

            <Text style={styles.quickText}>
              Invest
            </Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.quickItem}>
            <View style={styles.quickIcon}>
              <Text style={styles.quickIconText}>₹</Text>
            </View>

            <Text style={styles.quickText}>
              Save
            </Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.quickItem}>
            <View style={styles.quickIcon}>
              <Text style={styles.quickIconText}>◎</Text>
            </View>

            <Text style={styles.quickText}>
              Goals
            </Text>
          </TouchableOpacity>

        </View>


        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>
            Digital Gold
          </Text>

          <Text style={styles.viewAll}>
            View All ›
          </Text>

        </View>


        <View style={styles.goldCard}>

          <View style={styles.goldTop}>

            <View style={styles.goldIcon}>
              <Text style={styles.goldEmoji}>
                🪙
              </Text>
            </View>

            <View style={styles.goldInfo}>

              <Text style={styles.cardTitle}>
                24K Digital Gold
              </Text>

              <Text style={styles.cardSubtitle}>
                You own 2.135 gm
              </Text>

              <Text style={styles.goldValue}>
                ₹15,513.62
              </Text>

            </View>

            <View style={styles.goldPrice}>

              <Text style={styles.livePrice}>
                Live Price
              </Text>

              <Text style={styles.price}>
                ₹7,268.30/gm
              </Text>

              <Text style={styles.positive}>
                ↑ ₹42.30 (0.58%)
              </Text>

            </View>

          </View>


          <View style={styles.goldButtons}>

            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyText}>
                Buy Gold
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sellButton}>
              <Text style={styles.sellText}>
                Sell Gold
              </Text>
            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>
            SIP Investment
          </Text>

          <Text style={styles.viewAll}>
            View Portfolio ›
          </Text>

        </View>


        <View style={styles.sipCard}>

          <View style={styles.sipIcon}>
            <Text style={styles.sipIconText}>
              ↗
            </Text>
          </View>


          <View style={styles.sipColumn}>

            <Text style={styles.smallText}>
              Monthly SIP
            </Text>

            <Text style={styles.sipAmount}>
              ₹10,000
            </Text>

            <Text style={styles.smallText}>
              Total Invested
            </Text>

            <Text style={styles.investedAmount}>
              ₹1,20,000
            </Text>

          </View>


          <View style={styles.sipColumn}>

            <Text style={styles.smallText}>
              Current Value
            </Text>

            <Text style={styles.currentValue}>
              ₹1,34,560
            </Text>

            <Text style={styles.smallText}>
              Est. Returns
            </Text>

            <Text style={styles.positive}>
              +₹14,560 (12.13%)
            </Text>

          </View>

        </View>


        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>
            Curated Mutual Funds
          </Text>

          <Text style={styles.viewAll}>
            View All
          </Text>

        </View>


        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >

          <View style={styles.fundCard}>

            <Text style={styles.fundName}>
              Parag Parikh
            </Text>

            <Text style={styles.fundName}>
              Flexi Cap Fund
            </Text>

            <Text style={styles.smallText}>
              Growth
            </Text>

            <Text style={styles.fundReturn}>
              12.45%
            </Text>

            <Text style={styles.smallText}>
              1Y Returns
            </Text>

          </View>


          <View style={styles.fundCard}>

            <Text style={styles.fundName}>
              Axis Bluechip
            </Text>

            <Text style={styles.fundName}>
              Fund
            </Text>

            <Text style={styles.smallText}>
              Growth
            </Text>

            <Text style={styles.fundReturn}>
              14.32%
            </Text>

            <Text style={styles.smallText}>
              1Y Returns
            </Text>

          </View>


          <View style={styles.fundCard}>

            <Text style={styles.fundName}>
              SBI Small Cap
            </Text>

            <Text style={styles.fundName}>
              Fund
            </Text>

            <Text style={styles.smallText}>
              Growth
            </Text>

            <Text style={styles.fundReturn}>
              18.67%
            </Text>

            <Text style={styles.smallText}>
              1Y Returns
            </Text>

          </View>

        </ScrollView>

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>
            Insurance Plans
          </Text>

          <Text style={styles.viewAll}>
            View All
          </Text>

        </View>


        <View style={styles.insuranceRow}>

          <View style={styles.insuranceCard}>
           <FontAwesome6 name="hand-holding-medical" iconStyle="solid" size={21} color={'#93a986'} />
            <Text style={styles.insuranceText}>
              Term Life{"\n"}Insurance
            </Text>
          </View>

          <View style={styles.insuranceCard}>
           <FontAwesome6 name="kit-medical" iconStyle="solid" size={21} color={'#93a986'} />
            
            <Text style={styles.insuranceText}>
              Health{"\n"}Insurance
            </Text>
          </View>

          <View style={styles.insuranceCard}>
           <FontAwesome6 name="car-side" iconStyle="solid" size={21} color={'#93a986'} />
            <Text style={styles.insuranceText}>
              Motor{"\n"}Insurance
            </Text>
          </View>

        </View>

        <View style={styles.loanCard}>

          <View style={styles.loanIcon}>
            <Text style={styles.loanIconText}>
              ₹
            </Text>
          </View>

          <View style={styles.loanInfo}>

            <Text style={styles.cardTitle}>
              Personal Loan
            </Text>

            <Text style={styles.smallText}>
              Outstanding
            </Text>

            <Text style={styles.loanAmount}>
              ₹2,45,000
            </Text>

          </View>

          <View>

            <Text style={styles.smallText}>
              EMI Amount
            </Text>

            <Text style={styles.emi}>
              ₹8,732
            </Text>

            <Text style={styles.smallText}>
              Due on 25 May
            </Text>

          </View>

          <Text style={styles.arrow}>
            ›
          </Text>

        </View>
</SafeAreaView>
      </ScrollView>
    

    </View>
  );
}


const styles = StyleSheet.create({

  safeArea:{
    backgroundColor: "#F5F7F3",
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 110,
    marginTop: 20
  },

  pageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  title: {
    fontSize: 23,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#17221B",
  },

  subtitle: {
    fontSize: 12,
    fontFamily: 'Roboto Slab',
    color: "#7A837D",
    marginTop: 4,
  },

  wealthCard: {
    backgroundColor: "#4c6342",
    borderRadius: 18,
    padding: 20,
    height: 140,
    marginBottom: 20,
  },

  wealthHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  wealthLabel: {
    color: "#DCEADF",
    fontSize: 12,
  },

  wealthAmount: {
    color: "#FFFFFF",
    fontSize: 27,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    marginTop: 5,
  },

  returnBox: {
    alignSelf: "flex-start",
    backgroundColor: "#527B5E",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 14,
  },

  returnText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontFamily: 'Roboto Slab',
    fontWeight: "500",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 15,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#17221B",
  },

  viewAll: {
    fontSize: 11,
    fontFamily: 'Roboto Slab',
    color: "#3E6B4A",
    fontWeight: "600",
  },

  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    backgroundColor: 'white',
    padding: 15,
    borderRadius:20,
    marginTop: 15
  },

  quickItem: {
    alignItems: "center",
    width: "24%",
  },

  quickIcon: {
    width: 52,
    height: 52,
    borderRadius: 27,
    backgroundColor: "#F0F6F1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
  },

  quickIconText: {
    fontSize: 21,
    fontFamily: 'Roboto Slab',
    color: "#3E6B4A",
    fontWeight: "600",
  },

  quickText: {
    fontSize: 10,
    color: "#39433D",
    fontFamily: 'Roboto Slab',
    textAlign: "center",
  },

  goldCard: {
    borderWidth: 1,
    borderColor: "#DCE3DE",
    borderRadius: 15,
    padding: 14,
    backgroundColor: 'white'
  },

  goldTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  goldIcon: {
    width: 48,
    height: 48,
    borderRadius: 25,
    backgroundColor: "#F7F2DE",
    justifyContent: "center",
    alignItems: "center",
  },

  goldEmoji: {
    fontSize: 23,
  },

  goldInfo: {
    flex: 1,
    marginLeft: 10,
  },

  cardTitle: {
    fontSize: 13,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#17221B",
  },

  cardSubtitle: {
    fontSize: 10,
    fontFamily: 'Roboto Slab',
    color: "#78817B",
    marginTop: 3,
  },

  goldValue: {
    fontSize: 13,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#17221B",
    marginTop: 4,
  },

  goldPrice: {
    alignItems: "flex-end",
  },

  livePrice: {
    fontSize: 9,
    fontFamily: 'Roboto Slab',
    color: "#8A928D",
  },

  price: {
    fontSize: 12,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    marginTop: 3,
  },

  positive: {
    fontSize: 9,
    fontFamily: 'Roboto Slab',
    color: "#3D8651",
    fontWeight: "600",
    marginTop: 3,
  },

  goldButtons: {
    flexDirection: "row",
    marginTop: 14,
    gap: 8,
  },

  buyButton: {
    flex: 1,
    height: 38,
    backgroundColor: "#4c6342",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  buyText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
  },

  sellButton: {
    flex: 1,
    height: 38,
    borderWidth: 1,
    borderColor: "#AEB9B1",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  sellText: {
    color: "#3B463F",
    fontSize: 12,
    fontFamily: 'Roboto Slab',
    fontWeight: "600",
  },

  sipCard: {
    borderWidth: 1,
    borderColor: "#DCE3DE",
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  sipIcon: {
    width: 52,
    height: 52,
    borderRadius: 27,
    backgroundColor: "#E7F1E8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  sipIconText: {
    color: "#3E6B4A",
    fontSize: 25,
    fontFamily: 'Roboto Slab',
  },

  sipColumn: {
    flex: 1,
  },

  smallText: {
    fontSize: 9,
    fontFamily: 'Roboto Slab',
    color: "#78817B",
    marginTop: 3,
  },

  sipAmount: {
    fontSize: 14,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#17221B",
    marginVertical: 3,
  },

  investedAmount: {
    fontSize: 12,
    fontFamily: 'Roboto Slab',
    fontWeight: "600",
    color: "#17221B",
    marginTop: 2,
  },

  currentValue: {
    fontSize: 13,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#17221B",
    marginVertical: 3,
  },

  fundCard: {
    width: 145,
    height: 145,
    borderWidth: 1,
    borderColor: "#DCE3DE",
    backgroundColor: 'white',
    borderRadius: 13,
    padding: 12,
    marginRight: 10,
  },

  fundName: {
    fontSize: 11,
    fontFamily: 'Roboto Slab',
    fontWeight: "600",
    color: "#17221B",
  },

  fundReturn: {
    fontSize: 18,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#3E6B4A",
    marginTop: 15,
  },

  insuranceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  insuranceCard: {
    width: "31.5%",
    height: 100,
    borderWidth: 1,
    borderColor: "#DCE3DE",
    backgroundColor: 'white',
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  insuranceText: {
    fontSize: 10,
    fontFamily: 'Roboto Slab',
    color: "#39433D",
    textAlign: "center",
  },

  loanCard: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#DCE3DE",
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
  },

  loanIcon: {
    width: 48,
    height: 48,
    borderRadius: 25,
    backgroundColor: "#F5EAD0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  loanIconText: {
    fontSize: 22,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
  },

  loanInfo: {
    flex: 1,
  },

  loanAmount: {
    fontSize: 13,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    marginTop: 3,
  },

  emi: {
    fontSize: 13,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    marginTop: 3,
  },

  arrow: {
    fontSize: 25,
    color: "#6D7770",
    marginLeft: 8,
  },

});