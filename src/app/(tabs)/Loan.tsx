import React, { useState,useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import { Ionicons } from "@expo/vector-icons";

const TENURE_OPTIONS = [12, 18, 24, 36];
const INTEREST_RATE = 10.5;
const MIN_AMOUNT = 50000;
const MAX_AMOUNT = 1000000;
const STEP_AMOUNT = 10000;

export default function Loan({ navigation }: any) {
  const [loanAmount, setLoanAmount] = useState<number>(350000);
  const [selectedTenure, setSelectedTenure] = useState<number>(24);
  const formatCurrency = (val: number) => { return '₹' + val.toLocaleString('en-IN');};

  const calculatedEMI = useMemo(() => {
    const monthlyRate = INTEREST_RATE / (12 * 100);
    const months = selectedTenure;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  }, [loanAmount, selectedTenure]);

  const IncrementAmount = () =>{

    setLoanAmount((prev) => Math.min(MAX_AMOUNT, prev + STEP_AMOUNT))
  }

  const DecrementAmount = () => {

    setLoanAmount((prev) => Math.max(MIN_AMOUNT, prev - STEP_AMOUNT));

  }

  return (
    <SafeAreaView style={styles.safeArea}>

      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIconBtn} onPress={() =>
           navigation?.goBack()}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <Ionicons name="arrow-back" size={23} color="#172017" />
          
        </TouchableOpacity>

        <View style={styles.headerTextWrapper}>
          <Text style={styles.headerTitle}>Personal Loan Application</Text>
          <Text style={styles.headerSubtitle}>New loan</Text>
        </View>

        {/* <TouchableOpacity style={styles.headerIconBtn}>
          <HelpCircle size={24} color="#1C3829" />
        </TouchableOpacity> */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        <View style={styles.darkGreenCard}>
          <View style={{alignItems: 'center'}}>
          <Text style={styles.cardHeaderLabel}>Select Loan Amount</Text>

          <View style={styles.amountControlRow}>
              <TouchableOpacity 
                style={[styles.stepButton, loanAmount <= MIN_AMOUNT && styles.stepButtonDisabled]} 
                onPress={DecrementAmount}
                disabled={loanAmount <= MIN_AMOUNT}>

                <Ionicons name="remove" size={20} color={loanAmount <= MIN_AMOUNT ? "#A3B8AD" : "#173627"} />
              </TouchableOpacity>

          <Text style={styles.cardMainValue}>{formatCurrency(loanAmount)}</Text>

          <TouchableOpacity 
                style={[styles.stepButton, loanAmount >= MAX_AMOUNT && styles.stepButtonDisabled]} 
                onPress={IncrementAmount}
                disabled={loanAmount >= MAX_AMOUNT}
              >
                <Ionicons name="add" size={20} color={loanAmount >= MAX_AMOUNT ? "#A3B8AD" : "#173627"} />
              </TouchableOpacity>
            </View>


        </View>
          <Slider style={styles.slider}
            minimumValue={MIN_AMOUNT}
            maximumValue={MAX_AMOUNT}
            step={STEP_AMOUNT}
            value={loanAmount}
            onValueChange={(val) => setLoanAmount(val)}
            minimumTrackTintColor="#9BD0B4"
            maximumTrackTintColor="#3B634E"
            thumbTintColor="#FFFFFF"/>

          <View style={styles.sliderLimitsRow}>
            <Text style={styles.limitLabel}>{formatCurrency(MIN_AMOUNT)} (Min.)</Text>
            <Text style={styles.limitLabel}>{formatCurrency(MAX_AMOUNT)} (Max.)</Text>
          </View>
        </View>

        {/* <View style={{width: '100%', borderColor: '#abd9c2', marginTop: 30}}/>   */}
          <Text style={styles.sectionheading2}>
            Select Loan Duration
          </Text>

          <View style={styles.loancontainer}>

          {TENURE_OPTIONS.map((tenure) => {
            const isSelected = selectedTenure === tenure;
            return (
              <TouchableOpacity
                key={tenure}
                style={[ styles.tenurePill, isSelected  && styles.tenurePillSelected,]}
                activeOpacity={0.8} onPress={() => setSelectedTenure(tenure)}>
                <Text style={[ styles.tenurePillText, isSelected && styles.tenurePillTextSelected,]}>
                 <Text style={styles.tenureNumber}>{tenure}{'\n'}</Text>
                  <Text style={styles.tenureSubText}>Months</Text>

                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryCardHeading}>Estimated EMI Summary</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryRowLabel}>Estimated Monthly EMI:</Text>
            <Text style={styles.summaryRowValue}>
              {formatCurrency(calculatedEMI)}/mo
            </Text>
          </View>

          <View style={[styles.summaryRow, { marginTop: 12 }]}>
            <Text style={styles.summaryRowLabel}>Yearly Interest :</Text>
            <Text style={styles.summaryRowValue}>
              {INTEREST_RATE}% p.a. (Fixed)
            </Text>
          </View>
        </View>

        <View style={styles.featuresGrid}>
          <View style={styles.featureItem}>
            <View style={styles.featureIconContainer}>
              <Ionicons name="flash-sharp" size={23} color="#172017" />
            </View>
            <Text style={styles.featureLabel}>Quick{"\n"}Approval</Text>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureIconContainer}>
              <Ionicons name="shield-checkmark" size={23} color="#172017" />
            </View>
            <Text style={styles.featureLabel}>100% Secure{"\n"}& Trusted</Text>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureIconContainer}>
              <Ionicons name="newspaper" size={23} color="#172017" />
            </View>
            <Text style={styles.featureLabel}>Minimal{"\n"}Documentation</Text>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureIconContainer}>
              <Ionicons name="checkmark" size={23} color="#172017" />
            </View>
            <Text style={styles.featureLabel}>Competitive{"\n"}Interest Rates</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.88}
          onPress={() => console.log('Proceed clicked with:', { loanAmount, selectedTenure })}
        >
          <Text style={styles.primaryButtonText}>
            Proceed to Personal Details
          </Text>
        </TouchableOpacity>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7F5',
    marginBottom: 45
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
    marginTop: 10,
  },
  headerIconBtn: {
    padding: 4,
  },
  headerTextWrapper: {
    flex: 1,
    marginLeft: 12,
  },
  headerTitle: {
    fontSize: 19,
    fontFamily: 'SoraSemibold',
    color: '#153123',
    letterSpacing: -0.3,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#678071',
    fontFamily: 'DMSanRegular',
    marginTop: 2,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#142E20',
    marginBottom: 12,
    marginTop: 8,
  },
  darkGreenCard: {
    borderRadius: 20,
    backgroundColor: '#d8ecdb',
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: '#173627',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
    
  },
  stepButtonDisabled: {
    backgroundColor: '#E2ECE6',
    opacity: 0.7,
  },
  amountControlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 6,
  },
  stepButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#173627',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeaderLabel: {
    fontSize: 15,
    color: '#0a0c0b',
    fontFamily: 'DMSanMedium'
  },
  cardMainValue: {
    fontSize: 34,
    fontFamily: 'SoraBold',
    color: '#0a0c0b',
    marginVertical: 10,
    letterSpacing: -0.5,
  },
  slider: {
    width: '100%',
    height: 40,
    marginTop: 6,
  },
  sliderLimitsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -2,
  },
  limitLabel: {
    fontSize: 12,
    color: '#0a0c0b',
    fontFamily: 'DMSanMedium'
  },
  sectionheading2:{
    fontSize: 17,
    marginTop: 20,
    marginLeft: 5,
    textAlign: 'center',
    fontFamily: 'DMSanSemibold'
  },
  loancontainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginHorizontal: -8

  },
  tenurePill: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: '#DFECE5',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'transparent',
    marginTop: 25,
    marginHorizontal: 10
  },
  tenurePillSelected: {
    backgroundColor: '#FFFFFF',
    borderColor: '#1F4733',
  },
  tenureNumber: {
    fontSize: 15,
    fontFamily: 'DMSanSemibold',
    color: '#284E3B',
    textAlign: 'center'
  },
  tenureSubText: {
    fontSize: 11,
    fontFamily: 'DMSanMedium',
    color: '#556E60',
  },
  tenurePillText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#284E3B',
    textAlign: 'center'
  },
  tenurePillTextSelected: {
    color: '#122D1F',
    fontFamily: 'DMSanSemibold'
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  summaryCardHeading: {
    fontSize: 16,
    fontFamily: 'SoraSemibold',
    color: '#153123',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryRowLabel: {
    fontSize: 14,
    color: '#556E60',
    fontFamily: 'DMSanRegular'
  },
  summaryRowValue: {
    fontSize: 15,
    color: '#132C1E',
    fontFamily: 'SoraSemibold'
  },
  featuresGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    paddingHorizontal: 2,
  },
  featureItem: {
    alignItems: 'center',
    width: '23%',
  },
  featureIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#DDECE4',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  featureLabel: {
    fontSize: 10.5,
    color: '#2B4A3A',
    fontFamily: 'DMSanMedium',
    textAlign: 'center',
    lineHeight: 14,
  },
  primaryButton: {
    backgroundColor: '#264D3B',
    borderRadius: 26,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30
  },
  primaryButtonText: {
    fontSize: 15,
    fontFamily: 'SoraSemibold',
    color: '#FFFFFF',
    letterSpacing: 0.2,
  },
});