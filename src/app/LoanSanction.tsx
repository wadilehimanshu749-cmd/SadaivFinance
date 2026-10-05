import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LoanSanction() {
    return (
        <SafeAreaView style={styles.safearea}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.headerIconBtn} onPress={() =>
                    router.back()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                    <Ionicons name="arrow-back" size={23} color="#172017" />
                </TouchableOpacity>

                <View style={styles.headerTextWrapper}>
                    <Text style={styles.headerTitle}>Loan Sanctioned</Text>
                </View>
            </View>

            <ScrollView style={styles.scrollcontent}>

                <View style={styles.card}>
                    <View style={styles.cardheader}>
                        <View style={styles.badge}>
                            <Ionicons name="checkmark-circle-sharp" size={23} color="#a6e5a5" />
                            <Text style={styles.badgetext}>Loan Sanctioned</Text>

                        </View>
                        <View style={styles.cardiconcontainer}>
                            <Image source={require('@/assets/images/confetti.png')} style={styles.icon} />
                        </View>

                    </View>

                    <View style={styles.cardlabel}>
                        <Text style={styles.label}>Total Sanctioned Amount</Text>
                        <Text style={styles.labelamount}>₹10,00,000</Text>

                    </View>

                    <View style={styles.containerrow}>
                        <View style={styles.columns}>
                            <Text style={styles.columnslabel}>Monthly EMI</Text>
                            <Text style={styles.columnslableamount}>₹31.875</Text>
                        </View>
                        <View style={styles.verticalDivider} />

                        <View style={styles.columns}>
                            <Text style={styles.columnslabel}>Tenure</Text>
                            <Text style={styles.columnslableamount}>24 Months</Text>
                        </View>
                        <View style={styles.verticalDivider} />

                        <View style={styles.columns}>
                            <Text style={styles.columnslabel}>Interest</Text>
                            <Text style={styles.columnslableamount}>10.5% fixed</Text>
                        </View>

                    </View>

                    <View style={styles.row}>
                        <Text style={styles.rowtext}>Processing fee</Text>
                        <Text style={styles.rowvaluetext}>₹-15,000</Text>

                    </View>

                    <View style={styles.horizontalDivider} />

                    <View style={styles.row}>
                        <Text style={styles.rowtext}>You'll receive</Text>
                        <Text style={styles.rowvaluetext}>₹9,80,00</Text>

                    </View>

                    <View style={styles.horizontalDivider} />

                    <View style={styles.row}>
                        <Text style={styles.rowtext}>Disbursal Bank A/c:</Text>
                        <Text style={styles.rowvaluetext}>HDFC Bank ****1234</Text>

                    </View>

                </View>

                <View style={styles.banner}>
                    <Text style={styles.bannertext}>
                        {'e-NACH mandate signed. Your money\narrives within 24 hours of confirming.'}
                    </Text>

                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{'Proceed to Disbursal (e-NACH Signed)'}</Text>
                </TouchableOpacity>

                <Text style={styles.footerText}>By continuing, you accept the loan terms</Text>

            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    safearea: {
        flex: 1,
        backgroundColor: '#F7F9F7'

    },
    headerIconBtn: {
        padding: 4,
    },
    header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
    marginTop: 10,
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
  
    scrollcontent: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 40

    },
    card: {
        backgroundColor: '#0f4a38',
        borderRadius: 15,
        padding: 24,
        overflow: 'hidden',
        marginBottom: 20

    },
    cardheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        marginHorizontal: 0

    },
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#1a6951',
        paddingHorizontal: 12,
        paddingVertical: 6,

    },
    badgetext: {
        marginLeft: 10,
        color: '#b5e9d6',
        fontFamily: 'DMSanSemibold'
    },
    cardiconcontainer: {
        marginTop: 10
    },
    icon: {
        width: 45,
        height: 45,
        resizeMode: "contain",

    },

    cardlabel: {
        marginBottom: 10,
        fontFamily: 'DMSanRegular'

    },

    label: {
        color: '#b5e9d6'
    },
    labelamount: {
        fontSize: 30,
        color: '#b5e9d6',
        fontFamily: 'SoraBold'

    },

    containerrow: {
        flexDirection: 'row',
        backgroundColor: '#0a3d2e',
        borderRadius: 15,
        padding: 15,
        marginBottom: 10
    },
    columns: {
        flex: 1,
        alignItems: 'center'
    },
    columnslabel: {
        color: '#8DB2A8',
        fontSize: 11,
        marginBottom: 6,
        fontFamily: 'DMSanRegular'
    },

    columnslableamount: {
        color: '#FFFFFF',
        fontSize: 13,
        fontFamily: 'DMSanSemibold'
    },

    verticalDivider: {
        width: 1,
        backgroundColor: '#316656'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowtext: {
        color: '#8DB2A8',
        fontSize: 15,
        fontFamily: 'DMSanRegular'
    },
    rowvaluetext: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'DMSanSemibold'
    },

    horizontalDivider: {
        height: 1,
        backgroundColor: '#1E5849',
        marginVertical: 16,
    },
    banner: {
        backgroundColor: '#e2f2e8',
        padding: 20,
        borderRadius: 15

    },
    bannertext: {
        color: '#1A4737',
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'DMSanRegular'
    },
    button: {
        backgroundColor: '#0D4738',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        borderRadius: 30,
        marginBottom: 16,
        marginTop: 13
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'SoraSemibold'
    },
    footerText: {
        textAlign: 'center',
        color: '#66706B',
        fontSize: 13,
        fontFamily: 'DMSanRegular'
    },

});