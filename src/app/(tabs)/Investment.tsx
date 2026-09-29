import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, ActivityIndicator,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type Category =
  | "all" | "health" | "term-life" | "motor" | "travel";

const CATEGORY_TABS: {
  key: Category;
  label: string;
}[] = [
  {
    key: "all",
    label: "All",
  },
  {
    key: "health",
    label: "Health Insurance",
  },
  {
    key: "term-life",
    label: "Term Life",
  },
  {
    key: "motor",
    label: "Motor Insurance",
  },
  {
    key: "travel",
    label: "Travel Insurance",
  },
];

const API_KEY = "wbi_demo_2026_public";
const URL = "https://worldbestinsurer.com/api/v1/products";

export default function Investment() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("all");

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // fetch api data

  const fetchInsuranceData = async () => {
    try {
      setLoading(true);
      setError("");

      const url =`${URL}?country=in&category=health&limit=50&offset=0&apiKey=${API_KEY}`;

      console.log("API URL:", url);
      const response = await fetch(url);

      console.log("Status:", response.status);

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}` );
      }

      const result = await response.json();

      console.log("Insurance Data:");
      console.log( JSON.stringify(result, null, 2));

      setData(result);
    } 
    catch (error: any) {
      console.log("Error:", error);

      setError(error?.message || "Unable to fetch data");
    } 
    finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchInsuranceData();}, []);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={  styles.scrollContent }>

        <View style={styles.header}>
          <TouchableOpacity  style={styles.backButton}  onPress={() => router.back()} >
            <Ionicons
              name="arrow-back"
              size={22}
              color="#103D43"
            />
          </TouchableOpacity>

          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>
              Investment
            </Text>

            <Text style={styles.headerSubtitle}>
              Grow your wealth, secure your future
            </Text>
          </View>

          <TouchableOpacity
            style={styles.profileButton}
          >
            <Ionicons
              name="person-outline"
              size={21}
              color="#287454"
            />
          </TouchableOpacity>
        </View>

        <ImageBackground source={require("@/assets/images/investment.png")} style={styles.heroCard} imageStyle={styles.heroImage}>
          <View style={styles.heroOverlay}>
            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>
                Smart Investments for a
                Better Tomorrow
              </Text>

              <Text style={styles.heroDescription}>
                Explore insurance plans and
                secure your future with the
                right protection.
              </Text>

              <TouchableOpacity style={styles.heroButton} onPress={() => setSelectedCategory("all") } >
                <Text style={styles.heroButtonText}>
                  View All Plans
                </Text>

                <Ionicons
                  name="arrow-forward"
                  size={16}
                  color="#287454"
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.tabsHorizontal}>
          <ScrollView  horizontal  showsHorizontalScrollIndicator={false}  contentContainerStyle={ styles.tabsContainer }>
            {CATEGORY_TABS.map(
              (tab) => {
                const isSelected = selectedCategory === tab.key;

                return (
                  <TouchableOpacity key={tab.key}
                    style={[ styles.categoryTab,
                      isSelected && styles.selectedCategoryTab, ]}
                      onPress={() => setSelectedCategory( tab.key )}>
                    <Text
                      style={[ styles.categoryTabText,
                        isSelected && styles.selectedCategoryTabText, ]}>
                      {tab.label}
                    </Text>
                  </TouchableOpacity>
                );
              }
            )}
          </ScrollView>
        </View>

        <View style={styles.apiHeader}>
          <Text style={styles.apiTitle}>
            Insurance API Data
          </Text>

          
        </View>

        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator
              size="large"
              color="#287454"
            />

            <Text style={styles.loadingText}>
              Loading insurance data...
            </Text>
          </View>
        )}

        {error !== "" && (
          <View style={styles.errorContainer}>
            <Ionicons
              name="alert-circle-outline"
              size={25}
              color="#B3261E"
            />

            <Text style={styles.errorTitle}>
              Error
            </Text>

            <Text style={styles.errorText}>
              {error}
            </Text>

            <TouchableOpacity style={styles.retryButton} onPress={fetchInsuranceData}>
              <Text style={styles.retryText}>
                Retry
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {!loading && !error && data && (
            <View style={styles.rawDataContainer}>
              <Text style={styles.rawData}>
                {JSON.stringify( data,null, 2)}
              </Text>
            </View>
          )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5FAF7",
    marginTop: 15,
  },

  scrollContent: {
    paddingBottom: 30,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
  },

  backButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  headerTitleContainer: {
    flex: 1,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#103D43",
  },

  headerSubtitle: {
    fontSize: 12,
    color: "#78928A",
    marginTop: 2,
  },

  profileButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },

  heroCard: {
    marginHorizontal: 20,
    height: 210,
    borderRadius: 24,
    overflow: "hidden",
  },

  heroImage: {
    borderRadius: 24,
    opacity: 0.8,
  },

  heroOverlay: {
    flex: 1,
    justifyContent: "center",
  },

  heroContent: {
    paddingHorizontal: 22,
    width: "72%",
  },

  heroTitle: {
    fontSize: 21,
    lineHeight: 27,
    fontWeight: "800",
    color: "#082630",
  },

  heroDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: "#082630",
    marginTop: 8,
  },

  heroButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
    marginTop: 14,
  },

  heroButtonText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#287454",
    marginRight: 6,
  },

  tabsHorizontal: {
    marginTop: 20,
  },

  tabsContainer: {
    paddingHorizontal: 20,
    gap: 10,
  },

  categoryTab: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#E8F2EC",
  },

  selectedCategoryTab: {
    backgroundColor: "#287454",
  },

  categoryTabText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#55766A",
  },

  selectedCategoryTabText: {
    color: "#FFFFFF",
  },

  apiHeader: {
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 12,
  },

  apiTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#103D43",
  },

  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },

  loadingText: {
    marginTop: 10,
    fontSize: 13,
    color: "#55766A",
  },

  errorContainer: {
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#FFF4F3",
    alignItems: "center",
  },

  errorTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#B3261E",
    marginTop: 8,
  },

  errorText: {
    fontSize: 12,
    color: "#B3261E",
    textAlign: "center",
    marginTop: 5,
  },

  retryButton: {
    backgroundColor: "#287454",
    paddingHorizontal: 20,
    paddingVertical: 9,
    borderRadius: 10,
    marginTop: 12,
  },

  retryText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },

  rawDataContainer: {
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 15,
    borderWidth: 1,
    borderColor: "#E2EEE7",
  },

  rawData: {
    fontSize: 11,
    lineHeight: 17,
    color: "#103D43",
    fontFamily: "monospace",
  },
});