import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Animated } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';

const employmentTypes = [
  { label: "Salaried", value: "salaried" },
  { label: "Self-Employed", value: "self-employed" },
  { label: "Business Owner", value: "business-owner" },
  { label: "Professional", value: "professional" },
  { label: "Government Employee", value: "government" },
];


export default function LoanKYC({ navigation }: any) {
  const arrowTranslateY = useRef(new Animated.Value(0)).current;
  const arrowOpacity = useRef(new Animated.Value(1)).current;
  const [employmentType, setEmploymentType] = useState(null);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(arrowTranslateY, {
          toValue: 7,
          duration: 650,
          useNativeDriver: true,
        }),
        Animated.timing(arrowTranslateY, {
          toValue: 0,
          duration: 650,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, []);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    if (offsetY > 20) {
      Animated.timing(arrowOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(arrowOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIconBtn} onPress={() =>
          router.back()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Ionicons name="arrow-back" size={23} color="#172017" />
        </TouchableOpacity>

        <View style={styles.headerTextWrapper}>
          <Text style={styles.headerTitle}>Personal Loan Application</Text>
          <Text style={styles.headerSubtitle}>Configure your New loan</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent} onScroll={handleScroll} scrollEventThrottle={16}>
        <View style={styles.personalCard}>
          <View style={styles.greenCard}>
            <View style={styles.iconCircle}>
              <Ionicons
                name="person-outline"
                size={23}
                color="#FFFFFF" />
            </View>

            <View style={styles.greenCardText}>
              <Text style={styles.greenCardTitle}>
                Personal Details
              </Text>
            </View>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.field}>
              <Text style={styles.fieldLabel}>
                Full Name (as per PAN)
              </Text>

              <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={20} color="#356A53" />

                <TextInput
                  style={styles.input}
                  placeholder="Enter full name"
                  placeholderTextColor="#82958D" />
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>
                Date of Birth (DD/MM/YYYY)
              </Text>

              <View style={styles.inputContainer}>
                <Ionicons
                  name="calendar-outline"
                  size={20}
                  color="#356A53" />

                <TextInput
                  style={styles.input}
                  placeholder="DD/MM/YYYY"
                  placeholderTextColor="#82958D"
                  keyboardType="numeric" />
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>
                Residential Address
              </Text>

              <View style={styles.inputContainer}>
                <Ionicons
                  name="location-outline"
                  size={20}
                  color="#356A53" />

                <TextInput
                  style={styles.input}
                  placeholder="Enter your address"
                  placeholderTextColor="#82958D"
                />
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>
                PAN Card Number
              </Text>

              <View style={styles.inputContainer}>
                <Ionicons
                  name="card-outline"
                  size={20}
                  color="#356A53" />

                <TextInput
                  style={styles.input}
                  placeholder="ABCDE1234E"
                  placeholderTextColor="#82958D"
                  autoCapitalize="characters" />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.personalCard2}>
          <View style={styles.greenCard}>
            <View style={styles.iconCircle}>
              <Ionicons name="briefcase-outline" size={23} color="#FFFFFF" />
            </View>

            <View style={styles.greenCardText}>
              <Text style={styles.greenCardTitle}>
                Employment Details
              </Text>
            </View>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.field}>
              <Text style={styles.fieldLabel}>
                Employment Type
              </Text>

              <View style={styles.dropdownContainer}>
                <Ionicons
                  name="briefcase-outline"
                  size={20}
                  color="#356A53" />

                <Dropdown style={styles.dropdown} placeholderStyle={styles.dropdownplaceholder}
                  selectedTextStyle={styles.dropdownselectedtext} containerStyle={styles.dropdownmenu}
                  itemTextStyle={styles.dropdownitemtext} data={employmentTypes}
                  labelField='label' valueField='value' placeholder='Select Employment Type'
                  value={employmentTypes} onChange={item => { setEmploymentType(item.value) }}
                  renderRightIcon={() => (
                    <Ionicons name="chevron-down" size={20} color="#356A53" />

                  )} />

              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>
                Company Name
              </Text>

              <View style={styles.inputContainer}>
                <Ionicons
                  name="business-outline"
                  size={20}
                  color="#356A53" />

                <TextInput
                  style={styles.input}
                  placeholder="Enter company name"
                  placeholderTextColor="#82958D" />
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>
                Work Email
              </Text>

              <View style={styles.inputContainer}>
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color="#356A53" />

                <TextInput
                  style={styles.input}
                  placeholder="name@company.com"
                  placeholderTextColor="#82958D"
                  keyboardType="email-address" />
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>
                Monthly In-Hand Income
              </Text>

              <View style={styles.inputContainer}>
                <Ionicons
                  name="cash-outline"
                  size={20}
                  color="#356A53" />

                <TextInput
                  style={styles.input}
                  placeholder="1,50,000"
                  placeholderTextColor="#82958D"
                  keyboardType="numeric" />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoIcon}>
            <Ionicons
              name="shield-checkmark-outline"
              size={20}
              color="#2C7657" />
          </View>

          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>
              Your information is secure
            </Text>

            <Text style={styles.infoSubtitle}>
              Your personal details are protected and used only for loan processing.
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.proceedButton} activeOpacity={0.88} onPress={() => router.push('/LoanSanction')}>
          <Text style={styles.proceedButtonText}>
            Proceed to KYC & Documents
          </Text>

          <Ionicons
            name="arrow-forward"
            size={20}
            color="#FFFFFF" />
        </TouchableOpacity>
      </ScrollView>

      <Animated.View pointerEvents="none" style={[
        styles.scrollIndicator,
        {
          opacity: arrowOpacity,
          transform: [
            {
              translateY: arrowTranslateY,
            },
          ],
        },
      ]} >
        <View style={styles.scrollArrowCircle}>
          <Ionicons
            name="chevron-down"
            size={21}
            color="#287454" />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "#F5F8F5",
  },
  scrollViewContent: {
    paddingHorizontal: 18,
    paddingBottom: 35,
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
  personalCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E2EBE6",
    shadowColor: "#173627",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 3,
  },
  personalCard2: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E2EBE6",
    shadowColor: "#173627",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 3,
    marginTop: 30,
  },
  greenCard: {
    minHeight: 72,
    paddingHorizontal: 5,
    paddingVertical: 17,
    backgroundColor: "#245D45",
    flexDirection: "row",
    alignItems: "center",
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  greenCardText: {
    marginLeft: 5,
  },
  greenCardTitle: {
    fontSize: 20,
    fontFamily: "SoraSemibold",
    color: "#FFFFFF",
  },
  formContainer: {
    paddingHorizontal: 17,
    paddingTop: 20,
    paddingBottom: 20,
  },
  field: {
    marginBottom: 17,
  },
  fieldLabel: {
    fontSize: 13.5,
    fontFamily: "DMSanSemibold",
    color: "#1D4537",
    marginBottom: 8,
  },
  inputContainer: {
    height: 52,
    borderWidth: 1,
    borderColor: "#D5E2DD",
    borderRadius: 14,
    backgroundColor: "#F8FBF9",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 0,
    fontSize: 14.5,
    fontFamily: "DMSanRegular",
    color: "#173F32",
  },

  dropdownContainer: {
    height: 52,
    borderWidth: 1,
    borderColor: "#D5E2DD",
    borderRadius: 14,
    backgroundColor: "#F8FBF9",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
  },

  dropdown: {
    flex: 1,
    marginLeft: 10,
    height: 52,
  },

  dropdownplaceholder: {
    fontSize: 14.5,
    fontFamily: "DMSanRegular",
    color: "#82958D",
  },

  dropdownselectedtext: {
    fontSize: 14.5,
    fontFamily: "DMSanRegular",
    color: "#173F32",
  },

  dropdownmenu: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#D5E2DD",
    backgroundColor: "#FFFFFF",
  },

  dropdownitemtext: {
    fontSize: 14,
    fontFamily: "DMSanRegular",
    color: "#173F32",
  },

  infoContainer: {
    marginTop: 18,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderRadius: 16,
    backgroundColor: "#EAF6EF",
    borderWidth: 1,
    borderColor: "#D6EBDD",
    flexDirection: "row",
    alignItems: "center",
  },
  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#D6EDDF",
    alignItems: "center",
    justifyContent: "center",
  },
  infoTextContainer: {
    flex: 1,
    marginLeft: 11,
  },
  infoTitle: {
    fontSize: 12.5,
    fontFamily: "DMSanSemibold",
    color: "#285943",
  },
  infoSubtitle: {
    fontSize: 11,
    fontFamily: "DMSanRegular",
    color: "#60796E",
    lineHeight: 16,
    marginTop: 2,
  },
  proceedButton: {
    height: 55,
    borderRadius: 28,
    backgroundColor: "#245D45",
    marginTop: 20,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#173627",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 3,
  },
  proceedButtonText: {
    fontSize: 14,
    fontFamily: "SoraSemibold",
    color: "#FFFFFF",
    marginRight: 10,
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    zIndex: 10,
  },
  scrollArrowCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#E2EBE6',
  },
});