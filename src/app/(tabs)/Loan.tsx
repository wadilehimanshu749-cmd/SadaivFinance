import React from "react";
import {View, Text, StyleSheet, TouchableOpacity,ScrollView,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PersonalLoan() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>

        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="#18382D"
            />
          </TouchableOpacity>

          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>
              Personal Loan
            </Text>

            <Text style={styles.headerSubtitle}>
              Your financial goals, our support
            </Text>
          </View>
          
        </View>


        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent} >

          <View style={styles.loanCard}>

            <View style={styles.loanTopRow}>

              <View style={styles.loanInfo}>

                <Text style={styles.outstandingLabel}>
                  Outstanding Loan
                </Text>

                <Text style={styles.outstandingAmount}>
                  ₹2,45,000
                </Text>

                <Text style={styles.totalLoan}>
                  of ₹5,00,000
                </Text>

              </View>


            </View>

            <View style={styles.progressRow}>

              {/* <View style={styles.progressBackground}>
                <View style={styles.progressFill} />
              </View> */}

              <Text style={styles.paidText}>
                49% paid
              </Text>

            </View>

            <View style={styles.loanStats}>

              <View style={styles.statItem}>
                <Text style={styles.statLabel}>
                  EMI Amount
                </Text>

                <Text style={styles.statValue}>
                  ₹8,732
                </Text>
              </View>


              <View style={styles.statDivider} />


              <View style={styles.statItem}>
                <Text style={styles.statLabel}>
                  Next Due Date
                </Text>

                <Text style={styles.statValueSmall}>
                  25 May 2025
                </Text>
              </View>


              <View style={styles.statDivider} />


              <View style={styles.statItem}>
                <Text style={styles.statLabel}>
                  Tenure Left
                </Text>

                <Text style={styles.statValueSmall}>
                  24 months
                </Text>
              </View>

            </View>

          </View>


        </ScrollView>

      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: "#f1faf2",
  },

  mainContainer: {
    flex: 1,
    backgroundColor: "#f1faf2",
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  
  header: {
    height: 92,
    paddingHorizontal: 18,
    paddingTop: 18,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F6EF",
  },

  backButton: {
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitleContainer: {
    flex: 1,
    marginLeft: 7,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#15382E",
  },

  headerSubtitle: {
    fontSize: 11,
    color: "#667A71",
    marginTop: 3,
  },

  helpButton: {
    width: 38,
    height: 38,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#D6E0D9",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  loanCard: {
    backgroundColor: "#286047",
    borderRadius: 21,
    padding: 20,
    overflow: "hidden",
  },

  loanTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  loanInfo: {
    flex: 1,
  },

  outstandingLabel: {
    color: "#E7F1E9",
    fontSize: 14,
    marginBottom: 5,
  },

  outstandingAmount: {
    color: "#FFFFFF",
    fontSize: 37,
    fontWeight: "700",
    letterSpacing: 0.3,
  },

  totalLoan: {
    color: "#DDEBE1",
    fontSize: 15,
    marginTop: 2,
  },

  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },

  progressBackground: {
    flex: 1,
    height: 15,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.18)",
    overflow: "hidden",
  },

  progressFill: {
    width: "49%",
    height: "100%",
    borderRadius: 12,
    backgroundColor: "#DDF0E2",
  },

  paidText: {
    color: "#FFFFFF",
    fontSize: 17,
    marginLeft: 5,
    fontWeight: "600",
  },

  loanStats: {
    flexDirection: "row",
    marginTop: 18,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.18)",
  },

  statItem: {
    flex: 1,
  },

  statDivider: {
    width: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginHorizontal: 8,
  },

  statLabel: {
    color: "#CDE0D3",
    fontSize: 11,
    marginBottom: 6,
  },

  statValue: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  statValueSmall: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },


});