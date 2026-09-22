import React from "react";
import {View,Text,TouchableOpacity,StyleSheet,TextInput,ScrollView, } from "react-native";
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { Feather } from '@react-native-vector-icons/feather'; 


export default function UtilityBills() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >

      <View style={styles.header}>  

      </View>

      <View style={styles.searchBox}>

        <Feather name="search" size={24} style={{marginRight:10}} />

        <TextInput style={styles.searchInput} placeholder="Search bills & services" placeholderTextColor="#8A928D"/>

      </View>

      <Text style={styles.sectionTitle}>
        Pay Bills & Services
      </Text>

      <View style={styles.servicesCard}>

        <TouchableOpacity style={styles.serviceItem}>

          <View style={{width: 45,height: 45,borderRadius: 23,backgroundColor: "#fef3c2",justifyContent: "center",alignItems: "center", marginBottom: 7,}}>
             <FontAwesome6 name="lightbulb" size={25} iconStyle="solid" color="#4d5a55" />
            </View>

          <Text style={styles.serviceText}>
            Electricity
          </Text>

        </TouchableOpacity>


        <TouchableOpacity style={styles.serviceItem}>

          <View style={{width: 45,height: 45,borderRadius: 23,backgroundColor: "#d8edfd",justifyContent: "center",alignItems: "center", marginBottom: 7,}}>
             <FontAwesome6 name="droplet" size={25} iconStyle="solid" color="#2b6fba" />
          </View>

          <Text style={styles.serviceText}>
            Water
          </Text>

        </TouchableOpacity>


   

        <TouchableOpacity style={styles.serviceItem}>

          <View style={{width: 45,height: 45,borderRadius: 23,backgroundColor: "#fedecb",justifyContent: "center",alignItems: "center", marginBottom: 7,}}>
             <FontAwesome6 name="fire-flame-curved" size={25} iconStyle="solid" color="#d35e42" />

         </View>

          <Text style={styles.serviceText}>
            Gas
          </Text>

        </TouchableOpacity>


   

        <TouchableOpacity style={styles.serviceItem}>

          <View style={{width: 45,height: 45,borderRadius: 23,backgroundColor: "#ddf4e1",justifyContent: "center",alignItems: "center", marginBottom: 7,}}>
            <FontAwesome6 name="wifi" size={22} iconStyle="solid" color="#2a714f" />

          </View>

          <Text style={styles.serviceText}>
            Broadband
          </Text>

        </TouchableOpacity>




        <TouchableOpacity style={styles.serviceItem}>

          <View style={{width: 45,height: 45,borderRadius: 23,backgroundColor: "#e9dbfd",justifyContent: "center",alignItems: "center", marginBottom: 7,}}>
             <FontAwesome6 name="tv" size={22} iconStyle="solid" color="#5721b2" />

          </View>

          <Text style={styles.serviceText}>
            DTH
          </Text>

        </TouchableOpacity>


        <TouchableOpacity style={styles.serviceItem}>

          <View style={{width: 45,height: 45,borderRadius: 23,backgroundColor: "#d4f4eb",justifyContent: "center",alignItems: "center", marginBottom: 7,}}>
            <FontAwesome6 name="car" size={22} iconStyle="solid" color="#2a714f" />
          </View>

          <Text style={styles.serviceText}>
            FASTag
          </Text>

        </TouchableOpacity>



        <TouchableOpacity style={styles.serviceItem}>

          <View style={{width: 45,height: 45,borderRadius: 23,backgroundColor: "#fedde9",justifyContent: "center",alignItems: "center", marginBottom: 7,}}>
            <FontAwesome6 name="credit-card" size={22} iconStyle="solid" color="#b73d66" />

          </View>

          <Text style={styles.serviceText}>
            Credit Card
          </Text>

        </TouchableOpacity>


        <TouchableOpacity style={styles.serviceItem}>

          <View style={{width: 45,height: 45,borderRadius: 23,backgroundColor: "#d1f2f9",justifyContent: "center",alignItems: "center", marginBottom: 7,}}>
            <FontAwesome6 name="shield-heart" size={22} iconStyle="solid" color="#2a7d90" />
          </View>

          <Text style={styles.serviceText}>
            Insurance
          </Text>

        </TouchableOpacity>



        <TouchableOpacity style={styles.serviceItem}>

          <View style={{width: 45,height: 45,borderRadius: 23,backgroundColor: "#d6ecfd",justifyContent: "center",alignItems: "center", marginBottom: 7,}}>
            <FontAwesome6 name="school" size={22} iconStyle="solid" color="#2a7d90" />
          </View>

          <Text style={styles.serviceText}>
            Education
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceItem}>

          <View style={{width: 45,height: 45,borderRadius: 23,backgroundColor: "#fddae8",justifyContent: "center",alignItems: "center", marginBottom: 7,}}>
            <FontAwesome6 name="house" size={22} iconStyle="solid" color="#74a489" />
          </View>

          <Text style={styles.serviceText}>
            Rent
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceItem}>

          <View style={{width: 45,height: 45,borderRadius: 23,backgroundColor: "#fef3c2",justifyContent: "center",alignItems: "center", marginBottom: 7,}}>
            <FontAwesome6 name="building-columns" size={22} iconStyle="solid" color="#2a7d90" />
          </View>

          <Text style={styles.serviceText}>
            Municipal Tax
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceItem}>

          <View style={styles.iconCircle}>
            <Text style={styles.moreIcon}>•••</Text>
          </View>

          <Text style={styles.serviceText}>
            More Services
          </Text>

        </TouchableOpacity>

      </View>

      <View style={styles.reminderCard}>

        <View style={styles.reminderIcon}>
          <FontAwesome6 name="calendar" size={25} iconStyle="solid" color="#2a7d90" />

        </View>

        <View style={styles.reminderContent}>

          <Text style={styles.reminderTitle}>
            Never miss a due date
          </Text>

          <Text style={styles.reminderSubtitle}>
            Set reminders and pay on time.
          </Text>

        </View>

        <TouchableOpacity style={styles.reminderButton}>

          <Text style={styles.reminderButtonText}>
            Set Reminder
          </Text>

        </TouchableOpacity>

      </View>

      <View style={styles.recentHeader}>

        <Text style={styles.sectionTitle}>
          Recent Bills
        </Text>

        <Text style={styles.viewAll}>
          View All
        </Text>

      </View>

      <TouchableOpacity style={styles.billCard}>

        <View style={styles.billIcon}>
        <FontAwesome6 name="lightbulb" size={20} iconStyle="solid" color="#4d5a55" />

        </View>

        <View style={styles.billInfo}>

          <Text style={styles.billName}>
            MSEDCL Electricity
          </Text>

          <Text style={styles.billNumber}>
            Consumer No. 0123456789
          </Text>

        </View>

        <View style={styles.billAmount}>

          <Text style={styles.amount}>
            ₹1,248.00
          </Text>

          <Text style={styles.dueDate}>
            Due on 18 May
          </Text>

        </View>

        <Text style={styles.arrow}>
          ›
        </Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.billCard}>

        <View style={styles.billIcon}>
            <FontAwesome6 name="wifi" size={20} iconStyle="solid" color="#2a714f" />

        </View>

        <View style={styles.billInfo}>

          <Text style={styles.billName}>
            Airtel Broadband
          </Text>

          <Text style={styles.billNumber}>
            98765 43210
          </Text>

        </View>

        <View style={styles.billAmount}>

          <Text style={styles.amount}>
            ₹799.00
          </Text>

          <Text style={styles.dueDate}>
            Due on 19 May
          </Text>

        </View>

        <Text style={styles.arrow}>
          ›
        </Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.billCard}>

        <View style={styles.billIcon}>
           <FontAwesome6 name="credit-card" size={20} iconStyle="solid" color="#b73d66" />

        </View>

        <View style={styles.billInfo}>

          <Text style={styles.billName}>
            HDFC Bank Credit Card
          </Text>

          <Text style={styles.billNumber}>
            •••• 1234
          </Text>

        </View>

        <View style={styles.billAmount}>

          <Text style={styles.amount}>
            ₹3,250.00
          </Text>

          <Text style={styles.dueDate}>
            Due on 21 May
          </Text>

        </View>

        <Text style={styles.arrow}>
          ›
        </Text>

      </TouchableOpacity>

      <View style={{ height: 30 }} />

    </ScrollView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 18,
    paddingBottom: 40
  },

  header: {
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    fontSize: 20,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#17221B",
  },

  searchBox: {
    height: 48,
    borderWidth: 1,
    borderColor: "#D9E0DB",
    backgroundColor: 'white',
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 20,
    paddingVertical:0
  },

  searchIcon: {
    fontSize: 16,
    fontFamily: 'Roboto Slab',
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 13,
    color: "#17221B",
    fontFamily: 'Roboto Slab',
  },

  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#17221B",
    marginBottom: 12,
  },


  servicesCard: {
    borderWidth: 1,
    borderColor: "#E0E5E1",
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 7,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },

  serviceItem: {
    width: "25%",
    alignItems: "center",
    marginBottom: 20,
  },

  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#F2F7F3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
  },

  moreIcon: {
    fontSize: 18,
    fontWeight: "700",
    color: "#3E6B4A",
  },

  serviceText: {
    fontSize: 10,
    fontFamily: 'Roboto Slab',
    color: "#303A34",
    textAlign: "center",
  },

  reminderCard: {
    backgroundColor: "#FFF7E8",
    borderRadius: 14,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  reminderIcon: {
    width: 45,
    height: 45,
    borderRadius: 10,    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  reminderContent: {
    flex: 1,
  },

  reminderTitle: {
    fontSize: 12,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#302B21",
  },

  reminderSubtitle: {
    fontSize: 9,
    fontFamily: 'Roboto Slab',
    color: "#777064",
    marginTop: 3,
  },

  reminderButton: {
    backgroundColor: "#3E6B4A",
    borderRadius: 18,
    paddingHorizontal: 11,
    paddingVertical: 8,
  },

  reminderButtonText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontFamily: 'Roboto Slab',
    fontWeight: "600",
  },

  recentHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  viewAll: {
    color: "#3E6B4A",
    fontSize: 11,
    fontFamily: 'Roboto Slab',
    fontWeight: "600",
    marginBottom: 12,
  },

  billCard: {
    minHeight: 72,
    borderWidth: 1,
    borderColor: "#E0E5E1",
    backgroundColor:'white',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  billIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F1F6F2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 9,
  },

  billInfo: {
    flex: 1,
  },

  billName: {
    fontSize: 11,
    fontFamily: 'Roboto Slab',
    fontWeight: "600",
    color: "#202922",
  },

  billNumber: {
    fontSize: 9,
    fontFamily: 'Roboto Slab',
    color: "#858D88",
    marginTop: 4,
  },

  billAmount: {
    alignItems: "flex-end",
    marginRight: 7,
  },

  amount: {
    fontSize: 11,
    fontFamily: 'Roboto Slab',
    fontWeight: "700",
    color: "#202922",
  },

  dueDate: {
    fontSize: 8,
    fontFamily: 'Roboto Slab',
    color: "#7D857F",
    marginTop: 4,
  },

  arrow: {
    fontSize: 23,
    color: "#6F7872",
  },

});