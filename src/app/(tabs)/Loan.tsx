import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import { HelpCircle } from 'lucide-react-native';
import { Ionicons } from "@expo/vector-icons";


const MIN_AMOUNT = 50000;
const MAX_AMOUNT = 1000000;
const STEP_AMOUNT = 10000;

export default function Loan({ navigation }: any) {
  const [loanAmount, setLoanAmount] = useState<number>(350000);

  const formatCurrency = (val: number) => { return '₹' + val.toLocaleString('en-IN');};

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

        <TouchableOpacity style={styles.headerIconBtn}>
          <HelpCircle size={24} color="#1C3829" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionHeading}>Loan Amount Selector</Text>

        <View style={styles.darkGreenCard}>
          <Text style={styles.cardHeaderLabel}>Select Loan Amount</Text>
          <Text style={styles.cardMainValue}>{formatCurrency(loanAmount)}</Text>

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

  
          <Text style={[styles.sectionheading, {marginTop:10}]}>
            Select Loan Duration
          </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
    marginTop: 10
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
    fontWeight: '700',
    color: '#153123',
    letterSpacing: -0.3,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#678071',
    marginTop: 2,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  sectionHeading: {
    fontSize: 17,
    fontWeight: '700',
    color: '#142E20',
    marginBottom: 12,
    marginTop: 8,
  },
  darkGreenCard: {
    backgroundColor: '#264D3B',
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 20,
    shadowColor: '#173627',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeaderLabel: {
    fontSize: 15,
    color: '#D4E6DC',
    fontWeight: '500',
  },
  cardMainValue: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFFFFF',
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
    color: '#C6DDD0',
    fontWeight: '500',
  },
  sectionheading:{
  }
});