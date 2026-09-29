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

          <View style={styles.actionrow}>
           <TouchableOpacity style={styles.primaryaction}>
            <Ionicons
              name="document-text-outline"
              size={20}
              color="#cfeade"
            />

            <Text style={styles.actiontxt}>
              View Statement
            </Text>

           </TouchableOpacity >

           <TouchableOpacity style={styles.secondaryaction}>
            <Ionicons
              name="calendar-outline"
              size={20}
              color="#cfeade"
            />

            <Text style={styles.actiontxt}>
              Make Payment
            </Text>

           </TouchableOpacity>
          </View>
          <View style={styles.detailsCard}>

            <Text style={styles.sectionTitle}>
              Loan Details
            </Text>


            <View style={styles.detailRow}>

              <Text style={styles.detailLabel}>
                Loan Amount
              </Text>

              <Text style={styles.detailValue}>
                ₹5,00,000
              </Text>

            </View>


            <View style={styles.detailDivider} />


            <View style={styles.detailRow}>

              <Text style={styles.detailLabel}>
                Interest Rate
              </Text>

              <Text style={styles.detailValue}>
                10.5% p.a.
              </Text>

            </View>


            <View style={styles.detailDivider} />


            <View style={styles.detailRow}>

              <Text style={styles.detailLabel}>
                EMI Amount
              </Text>

              <Text style={styles.detailValue}>
                ₹8,732
              </Text>

            </View>


            <View style={styles.detailDivider} />


            <View style={styles.detailRow}>

              <Text style={styles.detailLabel}>
                Loan Start Date
              </Text>

              <Text style={styles.detailValue}>
                25 May 2023
              </Text>

            </View>

          </View>

          <View style={styles.benefitsection}>

            <Text>Why Choose Our Personal Loan ?</Text>

            <View style={styles.benefitrow}>

              <View style={styles.benefititem}>
                <View style={styles.benefiticon}>
                   <Ionicons
                      name="flash"
                     size={20}
                     color="#2b6446"/>

                </View>

            <Text style={styles.benefittxt}>
             {'Quick\nApproval'}
              
            </Text>

              </View>

              <View style={styles.benefititem}>

                <View style={styles.benefiticon}>
              <Ionicons
              name="shield-checkmark"
              size={20}
              color="#2b6446" />
              </View>
            
            <Text style={styles.benefittxt}>
             {'100% Secure\n& Trusted'}
              
            </Text>

              </View>
              <View style={styles.benefititem}>
                <View style={styles.benefiticon}>
                   <Ionicons
                      name="document-text-outline"
                     size={20}
                     color="#2b6446"/>

                </View>

            <Text style={styles.benefittxt}>
             {'Minimal\nDocumentation'}
              
            </Text>

              </View>

              <View style={styles.benefititem}>
                <View style={styles.benefiticon}>
                   <Ionicons
                      name="pricetag-outline"
                     size={20}
                     color="#2b6446"/>

                </View>

            <Text style={styles.benefittxt}>
             {'Competative\nInterest Rates'}
              
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
    marginBottom: 70
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
  actionrow:{
    flexDirection: 'row',
    gap: 10,
    marginTop: 15
    
  },
  primaryaction:{
    flex: 1,
    height: 45,
    backgroundColor: "#286047",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

  },
  secondaryaction:{
    flex: 1,
    height: 45,
    backgroundColor: "#286047",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

  },
actiontxt:{
  marginLeft:5,
  color: '#FFFFFF'
},
detailsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    padding: 20,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#E9ECE9",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 5,

    elevation: 1,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#163A31",
    marginBottom: 12,
  },

  detailRow: {
    minHeight: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  detailLabel: {
    fontSize: 13,
    color: "#61736A",
  },

  detailValue: {
    fontSize: 14,
    color: "#18382F",
    fontWeight: "600",
  },

  detailDivider: {
    height: 1,
    backgroundColor: "#EDF0ED",
  },
benefitsection:{
  padding: 15
},
benefitrow:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop:10

},
benefititem:{
  width: "24%",
  alignItems: 'center'

},
benefiticon:{
  backgroundColor: '#dcebde',
  borderRadius: 25,
  width: 45,
  height: 45,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 5
  
},
benefittxt:{
  textAlign: 'center',
  fontSize: 10,
  lineHeight: 15
}


});